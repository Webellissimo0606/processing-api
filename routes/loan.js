"use strict";

/** Loan  route implementation
    @module routes/loan */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieve a loan 
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _retrieve(req, res, next) {


}

/** Lists loan  for an application container
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _list(req, res, next) {


}

/** Creates a loan 
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

}

/** Updates a loan 
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

}

/** Deletes a loan 
    @func _delete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _delete(req, res, next) {

}

/** Lists loan amount summary for an application container
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _listamounts(req, res, next) {


}

/** Lists balloons for a loan
    @func _balloons
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _balloons(req, res, next) {


}



/** Lists products for a loan
    @func _products
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _products(req, res, next) {


}

/** Lists repayments for a loan
    @func _repayments
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _repayments(req, res, next) {


}


/** Lists term rates for a loan
    @func _termrates
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _termrates(req, res, next) {


}

module.exports = {
    listamounts:                 _listamounts,
    list:                        _list,
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
    balloons:                    _balloons,
    products:                    _products,
    repayments:                  _repayments,
    termrates:                   _termrates
};
