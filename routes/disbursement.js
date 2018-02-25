"use strict";

/** Disbursments route implementation
    @module routes/application */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils"),
        services            = require("../services"),
        applicationService  = services.application,
        applicationHistoryService    = services.applicationHistory;


/** Runs the auto generation process for disbursments
    @func _auto
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _auto(req, res, next) {


    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    let userPartyRoleId = utils.v8PartyRole(req);
    let pc = null;
    let messages = '';
    return applicationService.determineProductCategoriesFormatted(id, userPartyRoleId)
    .then(pcd => {
            //set up the response here...
            if(!pcd || pcd == undefined){
                return next(new restifyErrors.InternalServerError('pc'));
            }
            //set the data
            pc = pcd;

            return dao.sequelize.query(
                'SELECT * FROM "Disbursement_AutoGenerateForApplication"(:id);',
                {
                    replacements: { 'id' : id,  user: userPartyRoleId },
                    type: dao.sequelize.QueryTypes.SELECT
                }
            )
            //once completed, process the data to the next action
            .then(result => {

                //send the data down the response
                res.send(200,{
                    "autoDisbursementsResult": true,
                    "autoDisbursementsMessages": "",
                    "traxJobTypeByConfigs": ("Trax.Disbursements.AutoFail_" + pc)
                });
                //return to the next action
                return next();
            })
    })
    //catch the exception for processing on the next item
    .catch(function(e){
        //set up the response here...
        if(!pc || (pc && pc == '')){
            return next(new restifyErrors.InternalServerError('pc'));
        }
        //do we always fake it to be successful? or should we use a response type?
        //set the message
        applicationHistoryService.prettyFormatPostGres(e).then(m => {
            //set the message
            messages = m;
            //add a history note
            applicationHistoryService.create(id,
                                      messages,
                                      userPartyRoleId,
                                      "Auto Disbursment Process")
            .then(r => {
                //check if the note failed
                if(!r){
                     //update the message
                     messages += ' History Note Failed';
                }
                    res.send(200,{
                        "autoDisbursementsResult": false,
                        "autoDisbursementsMessages": messages,
                        "traxJobTypeByConfigs": ("Trax.Disbursements.AutoFail_" + pc)
                    });
                    //return to the next action
                    return next();
            })
            //history note failed but we still want to return the message
            .catch(function(e){
                    //the history failed but we still want to push out the result
                    res.send(200,{
                        "autoDisbursementsResult": false,
                        "autoDisbursementsMessages": (e + (messages ? " " + messages : '')).trim(),
                        "traxJobTypeByConfigs": ("Trax.Disbursements.AutoFail_" + pc)
                    });
                    //return the promise
                    return next();
            })
         })
           //we get anything further - completely fail it
        .catch(function(e){
                 //the history pretty format failed but we still want to push out the result
                res.send(200,{
                    "autoDisbursementsResult": false,
                    "autoDisbursementsMessages": (e  + (messages ? " " + messages : '')).trim(),
                    "traxJobTypeByConfigs": ("Trax.Disbursements.AutoFail_" + pc)
                });
                 //return the promise
                return next();
        });
    })
    //we get anything further - completely fail it?
    .catch(function(e){
        //the history pretty format failed but we still want to push out the result
        res.send(200,{
            "autoDisbursementsResult": false,
            "autoDisbursementsMessages": (e  + (messages ? " " + messages : '')).trim(),
            "traxJobTypeByConfigs": ("Trax.Disbursements.AutoFail_" + pc)
        });
         //return the promise
        return next();
    })
    //mark the promise as done
    .done();

}


module.exports = {
    auto:                        _auto
};
