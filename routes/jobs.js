"use strict";

/** Jobs route implementation
    @module routes/jobs */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** List job types by application container and status
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _listbyapplicationandstatus(req, res, next) {


}

/** Lists job types by application container
    @func _listbyapplication
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _listbyapplication(req, res, next) {


}

/** Lists rollback job types by application container and application status
    @func _rollback
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _rollback(req, res, next) {

}


module.exports = {
    listbyapplicationandstatus:  _listbyapplicationandstatus,
    listbyapplication:           _listbyapplication,
    rollback:                    _rollback
};
