"use strict";

/** Loan Xref History  route implementation
    @module routes/loanxrefhistory */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieve a loan xref history record
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _retrieve(req, res, next) {


}

/** Lists loan xref hsitory  for an application container
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _list(req, res, next) {


}

/** saves a loan xref history
    @func _save
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _save(req, res, next) {

}

/** Gets the loan xref history by loan
    @func _byloan
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _byloan(req, res, next) {


}
/** Lists loan xref history by xref
    @func _byxref
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _byxref(req, res, next) {


}


module.exports = {    
    list:                        _list,
    retrieve:                    _retrieve,
    save:                        _save,
    byloan:                      _byloan,
    byxref:                      _byxref
};
