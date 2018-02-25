"use strict";

/** Application route implementation
    @module routes/application */



const Q                     = require("q"),
        _                   = require("lodash"),
        config              = require("config"),
        restifyErrors       = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieves an application container
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _retrieve(req, res, next) {

    //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }


    return dao.v8.ApplicationContainer.findById(id,{
        include: [
            { model: dao.v8.ProductCategory, as: 'ProductCategory' }
        ]
    })
    .then(applicationContainer => {

        if (!applicationContainer) {
            return next(new restifyErrors.NotFoundError('id'));
        }
        res.send(applicationContainer);
        return next();
    })
    .catch(next)
    .done();




}

/** Creates an application container
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

}

/** Updates an application container
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

}

/** Retrieves the relationship keys for an application
    @func _relationshipKeys
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _relationshipKeys(req, res, next) {

    
     //get the param out    
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    let filters = {
        id: id,
        user:  utils.v8PartyRole(req)
    };

    return dao.sequelize.query(
        'SELECT * FROM "ApplicationPartyRole_KeySummary_JSON"(:id, :user);',
        {
            replacements: filters,
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(relationships => {
        //test the data
        if(relationships && relationships.length > 0)
            //send the data down the response
            res.send(relationships[0]["ApplicationPartyRole_KeySummary_JSON"]);
        else
            return next(new restifyErrors.InternalServerError());
        //return to the next action
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();


}

/** Adds a party role to an application
    @func _partyRoleCreate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _partyRoleCreate(req, res, next) {


}


/** Modifies a party role to an application
    @func _partyRoleUpdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _partyRoleUpdate(req, res, next) {


}

/** Deletes a party role from an application
    @func _partyRoleDelete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _partyRoleDelete(req, res, next) {


}

/** Gets the identity information for an application
    @func _identityList
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _identityList(req, res, next) {


}

/** Searches for an application by key and type
    @func _searchbykey
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _searchbykey(req, res, next) {


}


module.exports = {
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    relationshipKeys:            _relationshipKeys,
    searchbykey:                 _searchbykey,
    partyrole: {
                    create:      _partyRoleCreate,
                    update:      _partyRoleUpdate,
                    delete:      _partyRoleDelete
               },
    identity:  {
                    list:        _identityList
               }
};
