"use strict";

/** Deposit route implementation
    @module routes/deposit */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieve a deposit
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _retrieve(req, res, next) {

  let id = utils.fi(req.params.id);

  if (isNaN(id)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  return dao.v8.Deposit.findById(id)
  .then(deposit => {

    if (!deposit) {
      return next(new restifyErrors.NotFoundError(`id`));
    }

    res.send(200, deposit);
    return next();
  })
  .catch(next)
  .done();

}

/** Lists deposits for a loan
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _list(req, res, next) {

   let errorFields = _.filter([
                               !utils.ci(req.params.id) && 'id',
                               ], x => x);

   if (errorFields.length > 0) {
     return next(new restifyErrors.BadRequestError(errorFields.join()));
   }

   let w = {
     loanId : utils.fi(req.params.id)
   };

   return dao.v8.Deposit.findAll({
     where: w
   })
   .then(deposits => {

     if (!deposits || (deposits && deposits.length === 0)) {
       return next(new restifyErrors.NotFoundError(`id`));
     }

     res.send(deposits);
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

  // return 500 internal server error if loan id was not found or invalid
  if(!req.params.id || (req.params.id && !utils.ci(req.params.id))) {
    return next(new restifyErrors.InternalServerError());
  }

  let errorFields = _.filter([
                              (!req.body.depositType || (req.body.depositType && !utils.ci(req.body.depositType.id))) && 'depositType.id',
                              !utils.dataHasKey(req.body, 'amount') && 'amount',
                              !utils.dataHasKey(req.body, 'active') && 'active',
                              ], x => x);

  // return 400 bad request error if required fields are invalid
  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }

  req.body.loanID = utils.fi(req.params.id);

  req.body.created = when;
  req.body.createdByPartyRoleID = who;
  req.body.lastUpdated = when;
  req.body.lastUpdatedByPartyRoleID = who;

  return dao.v8.Deposit.create(req.body)
  .then(result => {
    if(!result) {
      return next(new restifyErrors.InternalServerError());
    }

    res.send(201, { 'iD': result.get('iD') });
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
                              !utils.ci(req.params.id) && "id",
                              (!req.body.loan || (req.body.loan && !utils.ci(req.body.loan.id))) && 'loan.id',
                              (!req.body.depositType || (req.body.depositType && !utils.ci(req.body.depositType.id))) && 'depositType.id',
                              !utils.dataHasKey(req.body, 'amount') && 'amount',
                              !utils.dataHasKey(req.body, 'active') && 'active',
                              ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }

  req.body.iD = utils.fi(req.params.id);

  delete req.body.created;
  delete req.body.createdByPartyRoleID;
  req.body.lastUpdated = when;
  req.body.lastUpdatedByPartyRoleID = who;

  return dao.v8.Deposit.findById(req.body.iD)
  .then(deposit => {

    if (!deposit) {
      return next(new restifyErrors.NotFoundError(`Deposit does not exist`));
    }
    deposit.updateAttributes(req.body);

    return deposit.save();
  })
  .then(depositOut => {
    res.send(200);
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

  let id = utils.fi(req.params.id);

  if (isNaN(id)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  let filters = {
    id: id
  };

  return dao.sequelize.query(
    'SELECT * FROM "LoanDeposit_Delete"(:id);',
    {
      replacements: filters,
      type: dao.sequelize.QueryTypes.BULKDELETE
    }
  )
  .then(result => {
    if(!result || (result && result.length == 0)) {
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
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
};
