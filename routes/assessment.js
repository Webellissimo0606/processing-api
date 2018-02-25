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


/** Retrieves an the current summary for assessment
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _retrieve(req, res, next) {

}

/** Triggers auto conditions for params
    @func _triggerconditions
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _triggerconditions(req, res, next) {

}

/** Triggers auto conditions for docu sign
    @func _docusignconditions
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _docusignconditions(req, res, next) {

}

/** Gets the latest workbook
    @func _workbook
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _workbook(req, res, next) {

}

/** Gets the detailed summary
    @func _detailed
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _detailed(req, res, next) {

}

/** Checks for the overall pass of an application
    @func _check
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _check(req, res, next) {

}

/** Calculates auto approval
    @func _calculate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _calculate(req, res, next) {

}

/** Processes functions for auto approval
    @func _approval
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _approval(req, res, next) {

}

/** Processes functions for auto decline
    @func _declined
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _declined(req, res, next) {

}

module.exports = {
    retrieve:                    _retrieve,
    triggerconditions:           _triggerconditions,
    docusignconditions:          _docusignconditions,
    workbook:                    _workbook,
    detailed:                    _detailed,
    check:                       _check,
    calculate:                   _calculate,
    approval:                    _approval,
    declined:                    _declined
};

