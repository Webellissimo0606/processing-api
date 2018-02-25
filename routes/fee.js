"use strict";

/** Fees route implementation
    @module routes/application */



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

  return dao.v8.ApplicationContainerFee.findById(id, {
    include: [
      { model: dao.v8.PartyRole, as: 'PartyRole' }
    ]
  })
  .then(applicationContainerFee => {

    if (!applicationContainerFee) {
      return next(new restifyErrors.NotFoundError('id'));
    }
    res.send(applicationContainerFee);
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

  let id = utils.fi(req.params.id);

  if (isNaN(id)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  let w = {
    applicationContainerID: id
  };

  return dao.v8.ApplicationContainerFee.findAll({
    where: w,
    include: [
      { model: dao.v8.PartyRole, as: 'PartyRole' }
    ]
  })
  .then(result => {

    if (!result || (result && result.length === 0)) {
      return next(new restifyErrors.NotFoundError('id'));
    }

    res.send(result);
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

}

/** Updates a deposit
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

}

/** Deletes a Deposit
    @func _delete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _delete(req, res, next) {

}

module.exports = {
    list:                        _list,
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
};
