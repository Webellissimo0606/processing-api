"use strict";

/** Motore Vehicle  route implementation
    @module routes/motorvehicle */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Saves a motor vehicle dealer tack invoice
    @func _dealerinvoicesave
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _dealerinvoicesave(req, res, next) {


}


module.exports = {
    dealerinvoicesave:           _dealerinvoicesave
};
