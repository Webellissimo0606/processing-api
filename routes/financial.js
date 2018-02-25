"use strict";

/** Financial route implementation
    @module routes/application */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieve living expenses
    @func _livingExpenseList
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _livingExpenseList(req, res, next) {


}

/** Create living expense
    @func _livingExpenseCreate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _livingExpenseCreate(req, res, next) {


}

/** Update living expense
    @func _livingExpenseUpdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _livingExpenseUpdate(req, res, next) {


}

/** Delete living expense
    @func _livingExpenseDelete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _livingExpenseDelete(req, res, next) {


}


/** Retrieve asset
    @func _assetList
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _assetList(req, res, next) {


}

/** Create asset
    @func _assetCreate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _assetCreate(req, res, next) {


}

/** Update asset
    @func _assetUpdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _assetUpdate(req, res, next) {


}

/** Delete asset
    @func _assetDelete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _assetDelete(req, res, next) {


}

/** Retrieve liability
    @func _liabilityList
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _liabilityList(req, res, next) {

  let id = utils.fi(req.params.id);

  if(isNaN(id)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  let w = {
    householdID: id,
    liabilityTypeID: 1
  };

  return dao.v8.Liability.findAll({
    where: w
  })
  .then(liabilities => {

    if (!liabilities || (liabilities && liabilities.length === 0)) {
      return next(new restifyErrors.NotFoundError(`id`));
    }

    res.send(liabilities);
    return next();
  })
  .catch(next)
  .done();

}

/** Create liability
    @func _liabilityCreate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _liabilityCreate(req, res, next) {


}

/** Update liability
    @func _liabilityUpdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _liabilityUpdate(req, res, next) {


}

/** Delete liability
    @func _liabilityDelete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _liabilityDelete(req, res, next) {


}

/** Gets the households for an application container
    @func _households
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _households(req, res, next) {


}



module.exports = {
    living: {
                list:             _livingExpenseList,
                create:           _livingExpenseCreate,
                update:           _livingExpenseUpdate,
                delete:           _livingExpenseDelete
            },
    asset: {
                list:             _assetList,
                create:           _assetCreate,
                update:           _assetUpdate,
                delete:           _assetDelete
            },
    liability: {
                list:             _liabilityList,
                create:           _liabilityCreate,
                update:           _liabilityUpdate,
                delete:           _liabilityDelete
            },
    households:                   _households
};
