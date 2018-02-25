"use strict";

/** Valuation  route implementation
    @module routes/Valuation */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieve a Valuation 
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _retrieve(req, res, next) {


}

/** Lists Valuation  for an application container
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _list(req, res, next) {


}

/** Creates a Valuation 
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

}

/** Updates a Valuation 
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

}

/** Deletes a Valuation 
    @func _delete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _delete(req, res, next) {

}

/** Retrieves avm details
    @func _avm
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _avm(req, res, next) {


}


module.exports = {    
    list:                        _list,
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
    avm:                         _avm
};
