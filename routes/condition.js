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


/** Retrieves conditions for an application
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _list(req, res, next) {
    
    let acId = utils.fi(req.params.id),
        user = utils.v8PartyRole(req);
        
    if (isNaN(acId)) {
        return next(new restifyErrors.BadRequestError('id'));
    }

    let replacements = {
        acId,
        user
    };

    return dao.sequelize.query(
        'SELECT * FROM "ApplicationCondition_RetrieveForApplicationContainerID"(:acId, :user);',
        {
            replacements,
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    .then((result) => {

        if (!result || (result && result.length == 0)) {
            return next(new restifyErrors.InternalServerError(`id`));
        }

        res.send(result);
        return next();
    })
    .catch(next)
    .done();
    
}

/** Retrieves an application condition
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _retrieve(req, res, next) {
    let acId = utils.fi(req.params.id),
        user = utils.v8PartyRole(req);
        
    if (isNaN(acId)) {
        return next(new restifyErrors.BadRequestError('id'));
    }

    let replacements = {
        acId,
        user
    };

    return dao.sequelize.query(
        'SELECT * FROM "ApplicationCondition_Retrieve"(:acId, :user)',
        {
            replacements,
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    .then(result => {
        if(!result) {
            return next(new restifyErrors.InternalServerError(`id`));
        }

        res.send(result);
        return next();
    })
    .catch(next)
    .done();
}

/** Configures conditions for an application
    @func _configure
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _configure(req, res, next) {

}

/** Saves a conditions for an application
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _create(req, res, next) {

}


/** Update a conditions for an application
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _update(req, res, next) {

}

/** Checks if all conditions are met for the stage
    @func _stagemet
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _stagemet(req, res, next) {

}

/** Checks if all conditions are met for the stage with a flag only
    @func _stagemetflag
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _stagemetflag(req, res, next) {

}

/** Processes auto conditions from an application status
    @func _processfromstatus
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _processfromstatus(req, res, next) {

}

/** Processes auto conditions from another condition
    @func _processfromcondition
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _processfromcondition(req, res, next) {

}




module.exports = {
    list:                        _list,
    configure:                   _configure,
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    stagemet:                    _stagemet,
    stagemetflag:                _stagemetflag,
    processfromstatus:           _processfromstatus,
    processfromcondition:        _processfromcondition,
};

