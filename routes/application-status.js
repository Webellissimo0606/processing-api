"use strict";

/** Application Status route implementation
    @module routes/applicationstatus */


/** Retrieves an application status summary
    @func _summary
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _summary(req, res, next) {

}

/** Retrieves an application status summary grouped
    @func _grouped
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _grouped(req, res, next) {

}


/** Sets an application status
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _create(req, res, next) {

}

/** Sets an application status with a specific date
    @func _createwithdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _createwithdate(req, res, next) {

}

/** Clears an application status date
    @func _clear
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _clear(req, res, next) {

}

/** Crashes an application
    @func _crash
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _crash(req, res, next) {

}

/** Resets an application
    @func _reset
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _reset(req, res, next) {

}

module.exports = {
    summary:                        _summary,
    create:                         _create,
    createwithdate:                 _createwithdate,
    grouped:                        _grouped,
    clear:                          _clear,
    crash:                          _crash,
    reset:                          _reset
};
