"use strict";

/** Application route implementation
    @module routes/application */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** List a deposit
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _list(req, res, next) {

  let id = utils.fi(req.params.id);

  if(isNaN(id)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  let w = {
    applicationContainerID : id,
    active: 1
  };

  return dao.v8.DirectDebit.findAll({
    where: w
  })
  .then(directDebits => {

    if (!directDebits || (directDebits && directDebits.length === 0)) {
      return next(new restifyErrors.NotFoundError(`id`));
    }

    res.send(directDebits);
    return next();
  })
  .catch(next)
  .done();

}

/** Creates a deposit
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

     let when = new Date(),
         who  = utils.v8PartyRole(req);

     // return 500 internal server error if loan was not found
     if(!req.body.loan || (req.body.loan && !utils.ci(req.body.loan.id))) {
       return next(new restifyErrors.InternalServerError());
     }

     let errorFields = _.filter([
                                 !utils.ci(req.params.id) && 'id',
                                 (!req.body.frequencyType || (req.body.frequencyType && !utils.ci(req.body.frequencyType.id))) && 'frequencyType.id',
                                 !utils.ci(req.body.repaymentMethodTypeID) && 'repaymentMethodTypeID',
                                 !utils.dataHasKey(req.body, 'amount') && 'amount',
                                 (!req.body.repaymentAmountType || (req.body.repaymentAmountType && !utils.ci(req.body.repaymentAmountType.id))) && 'repaymentAmountType.id',
                                 !utils.ci(req.body.crumbsBankAccountID) && 'crumbsBankAccountID',
                                 !utils.dataHasKey(req.body, 'termsAndConditionsAcceptance') && 'termsAndConditionsAcceptance',
                                 ], x => x);

     // return 400 bad request error if required fields are invalid
     if (errorFields.length > 0) {
       return next(new restifyErrors.BadRequestError(errorFields.join()));
     }

     /* ensure the param id is set to the body */
     req.body.applicationPartyRoleID = utils.fi(req.params.id);

     /* set up the body param overrides */
     req.body.created = when;
     req.body.createdByPartyRoleID = who;
     req.body.lastUpdated = when;
     req.body.lastUpdatedByPartyRoleID = who;

     return dao.v8.DirectDebit.create(req.body)
       .then(result => {
         if(!result) {
           //no data send out a 500
           return next(new restifyErrors.InternalServerError());
         }

         res.send(201, { iD: result.get('iD') });
         return next();
       })
       .catch(next)
       .done();

}

/** Updates a deposit
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

  let when = new Date(),
       who = utils.v8PartyRole(req);

   let errorFields = _.filter([
                               !utils.ci(req.params.id) && 'id',
                               (!req.body.loan || (req.body.loan && !utils.ci(req.body.loan.id))) && 'loan.id',
                               (!req.body.frequencyType || (req.body.frequencyType && !utils.ci(req.body.frequencyType.id))) && 'frequencyType.id',
                               !utils.ci(req.body.repaymentMethodTypeID) && 'repaymentMethodTypeID',
                               !utils.dataHasKey(req.body, 'amount') && 'amount',
                               (!req.body.repaymentAmountType || (req.body.repaymentAmountType && !utils.ci(req.body.repaymentAmountType.id))) && 'repaymentAmountType.id',
                               !utils.ci(req.body.crumbsBankAccountID) && 'crumbsBankAccountID',
                               !utils.dataHasKey(req.body, 'termsAndConditionsAcceptance') && 'termsAndConditionsAcceptance',
                               ], x => x);


   if (errorFields.length > 0) {
     return next(new restifyErrors.BadRequestError(errorFields.join()));
   }

   req.body.iD = utils.fi(req.params.id);

   delete req.body.created;
   delete req.body.createdByPartyRoleID;
   req.body.lastUpdated = when;
   req.body.lastUpdatedByPartyRoleID = who;

   return dao.v8.DirectDebit.findById(req.params.id)
   .then(directDebit => {

     if (!directDebit) {
       return next(new restifyErrors.NotFoundError(`id`));
     }

     directDebit.updateAttributes(req.body);

     return directDebit.save();
   })
   .then(directDebit => {

     res.send(200, directDebit);
     return next();
   })
   .catch(next)
   .done();

}

/** Deletes a Deposit
    @func _delete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _delete(req, res, next) {
  let id = utils.fi(req.params.id),
           when = new Date(),
           who = utils.v8PartyRole(req);

       if (isNaN(id)) {
         return next(new restifyErrors.BadRequestError('id'));
       }

       let filters = {
         active: 0,
         lastUpdated: when,
         lastUpdatedByPartyRoleID: who
       };

       return dao.v8.DirectDebit.update(
         filters,
         { where: { iD: id } }
       )
       .then(n => {
           if (!n || (n && n[0] === 0)) {
             return next(new restifyErrors.InternalServerError());
           }

           res.send(204);
           return next();
       })
       .catch(next)
       .done();
}

module.exports = {
    list:                        _list,
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
};
