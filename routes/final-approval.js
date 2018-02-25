"use strict";

/** Final Approval route implementation
    @module routes/application */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                    = require("../dao"),
        common               = require("fm-common"),
        logger               = common.logger,
        utils                = require("./utils"),
        services             = require("../services"),
        finalApprovalService = services.finalApproval;

/** Retrieve a deposit
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _retrieve(req, res, next) {

  let id = utils.fi(req.params.id);

  if(isNaN(id)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  return finalApprovalService.retrieve(id)
  .then(result => {

    if (!result) {
      return next(new restifyErrors.NotFoundError(`id`));
    }

    res.send(result);
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

   // return 400 bad request error if required fields are invalid
   if (errorFields.length > 0) {
     return next(new restifyErrors.BadRequestError(errorFields.join()));
   }

   let w = {
     applicationContainerID: utils.si(req.params.id)
   };

   return dao.v8.FinalApprovalProcessHistory.findAll({
     where: w,
     order: 'Created',
     include: [
       { model: dao.v8.FinalApprovalProcessType, as: 'FinalApprovalProcessType' },
       { model: dao.v8.PartyRole, as: 'CreatedByPartyRole' },
       { model: dao.v8.PartyRole, as: 'CompletedByPartyRole' }
     ]
   })
   .then(approvals => {

      if (!approvals || (approvals && approvals.length === 0)) {
        return next(new restifyErrors.NotFoundError(`id`));
      }

      res.send(approvals);
      return next();
   })
   .catch(next)
   .done();

}

/** Creates a deposit
    @func _save
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _save(req, res, next) {

  let errorFields = _.filter([
                              !utils.ci(req.params.id) && "id",
                              (!req.body.finalApprovalProcessType || (req.body.finalApprovalProcessType && !utils.ci(req.body.finalApprovalProcessType.id))) && "finalApprovalProcessType.id",
                              (!req.body.finalApprovalProcessHistory || (req.body.finalApprovalProcessHistory && !utils.ci(req.body.finalApprovalProcessHistory.id))) && "finalApprovalProcessHistory.id",
                              ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }

  let replacements = {
    acId: utils.fi(req.params.id),
    user: utils.v8PartyRole(req),
    finalApprovalProcessTypeID: req.body.finalApprovalProcessType.id,
    finalApprovalProcessHistoryID: req.body.finalApprovalProcessHistory.id,
  };


  return dao.sequelize.query(
    'SELECT * FROM "FinalApprovalProcess_UpdateCreate"(:acId, :user, :finalApprovalProcessTypeID, :finalApprovalProcessHistoryID);',
    {
      replacements,
      type: dao.sequelize.QueryTypes.SELECT
    }
  )
  .then((result) => {

    if(!result) {
      return next(new restifyErrors.InternalServerError());
    }


    return finalApprovalService.retrieve(result.iD);
  })
  .then((result) => {

    if(!result) {
      return next(new restifyErrors.NotFoundError(`id`));
    }

    res.send(201, result);
    next();
  })
  .catch(next)
  .done();

}

/** Updates a deposit
    @func _reset
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _reset(req, res, next) {

  let id = utils.fi(req.params.id),
      user = utils.v8PartyRole(req);

  if(isNaN(id)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  let replacements = {
    id,
    user
  };

  return dao.sequelize.query(
    'SELECT * FROM "FinalApprovalProcess_Reset"(:id, :user);',
    {
      replacements: replacements,
      type: dao.sequelize.QueryTypes.BULKUPDATE
    }
  )
  .then(() => {
    return finalApprovalService.retrieve(id);
  })
  .then((result) => {

    if(!result) {
      return next(new restifyErrors.NotFoundError('id'));
    }

    res.send(result);
    next();
  })
  .catch(next)
  .done();

}

/** Gets the latest record by application container
    @func _latest
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _latest(req, res, next) {

}

/** Gets the next type of final approval process
    @func _next
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _next(req, res, next) {

  let acId = utils.fi(req.params.id),
      user = utils.v8PartyRole(req);

  if(isNaN(acId)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  let replacements = {
    acId,
    user
  }

  return dao.sequelize.query(
    'SELECT * FROM "FinalApprovalProcess_DetermineNext"(:acId, :user, :faptId);',
    {
      replacements: replacements,
      type: dao.sequelize.QueryTypes.SELECT
    }
  )
  .then(result => {

    if(!result) {
      return next(new restifyErrors.NotFoundError());
    }

    res.send(200, result);
    next();
  })
  .catch(next)
  .done();

}

module.exports = {
    list:                        _list,
    retrieve:                    _retrieve,
    save:                        _save,
    reset:                       _reset,
    latest:                      _latest,
    next:                        _next,
};
