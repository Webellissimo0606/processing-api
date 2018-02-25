"use strict";

/** Application History route implementation
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
        applicationHistoryService    = services.applicationHistory;


/** Retrieves a list of history notes by application container
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _list(req, res, next) {

    let errorFields = _.filter([
                                !utils.ci(req.params.id) && "id",
                                !utils.ci(req.params.p) && "p",
                                !utils.ci(req.params.ps) && "ps",
                                ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }


    //create the filters for the function
    let filters = {
        id: utils.fi(req.params.id),
        p: utils.fi(req.params.p),
        ps: utils.fi(req.params.ps),
        ht: utils.si(req.params.ht)
    };

        //set up the where claise
        let w = { 
                    applicationContainerID : filters.id,
                    active: 1
                };


         //do we have a filter on the type?
        if(filters.ht){
            w.applicationHistoryTypeID = filters.ht;
        };

        //create an array of promises
        let dataPromises = [
            dao.v8.ApplicationHistory.count({
                                                where: w
            })
        ];

        //add in the next promise with the final filter
        dataPromises.push(
            dao.v8.ApplicationHistory.findAll({
                                                where: w,
                                                offset: (filters.p > 1 ? (((filters.p - 1) * filters.ps) + 1) : 0),
                                                limit: filters.ps,
                                                order: 'Created DESC',
                                                include: [
                                                          { model: dao.v8.ApplicationHistoryType, as: 'ApplicationHistoryType' },
                                                          { model: dao.v8.ApplicationHistoryPublicationType, as: 'ApplicationHistoryPublicationType' },
                                                          { model: dao.v8.PartyRole, as: 'CreatedByPartyRole' },
                                                          { model: dao.v8.PartyRole, as: 'LastUpdatedByPartyRole' }
                                                         ]
            }));
       
        return Q.spread(dataPromises,
                (totals, notes) => {
            //send the data down the response
            res.send({
                "total": totals,
                "notes": notes
            });
            //return to the next action
            return next();
        })
        //catch the exception for processing on the next item
        .catch(next)
        //mark the promise as done
        .done();

   
}



/** Creates and application history note
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

  //fill in the service file services/applicatiionhistory/create
  //then call it.
  
}



module.exports = {
    list:                        _list,
    create:                      _create
};
