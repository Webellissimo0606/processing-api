"use strict";

/** Applicant route implementation
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
        applicantService    = services.applicant;


/** Retrieves a summary by application container
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _list(req, res, next) {


    //get the param out
    let acId = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(acId)) {
            return next(new restifyErrors.BadRequestError('id'));
    }


    //create the filters for the function
    let filters = {
        acId: acId,
        user: utils.v8PartyRole(req)
    };

        //execute the sequelize query
        return dao.sequelize.query(
            'SELECT * FROM "Applicant_RetrieveShortSummary"(:acId, :user);',
            {
                replacements: filters,
                type: dao.sequelize.QueryTypes.SELECT
            }
        )
        //once completed, process the data to the next action
        .then(summary => {

            if (!summary || (summary && summary.length == 0)) {
                return next(new restifyErrors.InternalServerError(`Data for Application Container ${acId} does not exist`));
            }
            //send the data down the response
            res.send(summary);
            //return to the next action
            return next();
        })
        //catch the exception for processing on the next item
        .catch(next)
        //mark the promise as done
        .done();


}

/** Retrieves the relationships for an applicant
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _relationships(req, res, next) {

    //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

        return applicantService.relationships(id, utils.v8PartyRole(req))
        //once completed, process the data to the next action
        .then(relationships => {
            //send the data down the response
            res.send(relationships);
            //return to the next action
            return next();
        })
        //catch the exception for processing on the next item
        .catch(next)
        //mark the promise as done
        .done();

}

/** Retrieves the relationships for an applicant
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _relationshipTypes(req, res, next) {

      let errorFields = _.filter([
                                !utils.ci(req.params.fid) && "fid",
                                !utils.ci(req.params.tid) && "tid"
                                ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }

    //get the param out
    let fid = utils.fi(req.params.fid),
        tid = utils.fi(req.params.tid);

    //create the filters for the function
    let filters = {
        fid: fid,
        tid: tid
    };

        //execute the sequelize query
        return dao.sequelize.query(
            'SELECT * FROM "ApplicationPartyRoleRelationshipType_PartyTypeFromTo"(:fid, :tid);',
            {
                replacements: filters,
                type: dao.sequelize.QueryTypes.SELECT
            }
        )
        //once completed, process the data to the next action
        .then(types => {
            //do we have types
            if (!types || (types && types.length == 0)) {
                return next(new restifyErrors.InternalServerError(`Types for from ${fid} to ${tid} do not exist`));
            }
            //send the data down the response
            res.send(types);
            //return to the next action
            return next();
        })
        //catch the exception for processing on the next item
        .catch(next)
        //mark the promise as done
        .done();

}

/** Saves the relationships for an applicant
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _relationshipSave(req, res, next) {

    //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    //ensure we have relationships
    if(!req.body.relationships)
        return next(new restifyErrors.BadRequestError('relationships'));
    //create the filters for the function
    let filters = {
        id: id,
        user: utils.v8PartyRole(req),
        rel: JSON.stringify(req.body.relationships)
    };


    //execute the sequelize query
    return dao.sequelize.query(
        'SELECT * FROM "Applicant_RelationshipsUpdate"(:id, :rel, :user, true);',
        {
            replacements: filters,
            type: dao.sequelize.QueryTypes.BULKUPDATE
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //get the relationships
        if(result && result > 0){
            //get the relationships
             applicantService.relationships(id, utils.v8PartyRole(req))
            //once completed, process the data to the next action
            .then(relationships => {
                //send the data down the response
                res.send(relationships);
                //return to the next action
                return next();
            });
        }else{
            //send back a fail
            return next(new restifyErrors.InternalServerError());
        }
        //return the promise
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();


 
}

/** Creates and application party role and crumbs equivalent items
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

    //filter out any missing required fields first
    let errorFields = _.filter([
                                !utils.ci(req.params.id) && "id",
                                !req.body.borrowerRoleType || (req.body.borrowerRoleType && !utils.ci(req.body.borrowerRoleType.id)) && "borrowerRoleType.id",
                                //have to use the utility to ensure this data as it is a boolean and !req.body.nominatedBorrower could be false
                                !utils.dataHasKey(req.body, "nominatedBorrower") && "nominatedBorrower",
                                !req.body.partyType || (req.body.partyType && !utils.ci(req.body.partyType.id)) && "partyType.id"
                                ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }



     //construct the filters for the function
    let filters = {
        acId: utils.si(req.params.id),
        borrowerRoleType: utils.si(req.body.borrowerRoleType.id),
        nominatedBorrower: req.body.nominatedBorrower,
        partyType: utils.si(req.body.partyType.id),
        user: utils.v8PartyRole(req)
    };

    //execute the sequelize query
    return dao.sequelize.query(
        'SELECT * FROM "Applicant_CreateUpdate"(NULL, :acId, :borrowerRoleType, :nominatedBorrower, :partyType, :user);',
        {
            replacements: filters,
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //do we have data?
        if(!result || (result && result.length == 0))
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        else
            //send out the first item
            res.send(201,result[0]);
        //return the promise
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Creates and application party role and crumbs equivalent items
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

    //get the param out
    let id = utils.fi(req.params.id);

    //filter out any missing required fields first
    let errorFields = _.filter([
                                !utils.ci(id) && "id",
                                !req.body.borrowerRoleType || (req.body.borrowerRoleType && !utils.ci(req.body.borrowerRoleType.id)) && "borrowerRoleType.id",
                                //have to use the utility to ensure this data as it is a boolean and !req.body.nominatedBorrower could be false
                                !utils.dataHasKey(req.body, "nominatedBorrower") && "nominatedBorrower",
                                !req.body.partyType || (req.body.partyType && !utils.ci(req.body.partyType.id)) && "partyType.id"
                                ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }

    //construct the filters for the function
    let filters = {
        id: id,
        borrowerRoleType: utils.si(req.body.borrowerRoleType.id),
        nominatedBorrower: req.body.nominatedBorrower,
        partyType: utils.si(req.body.partyType.id),
        user: utils.v8PartyRole(req)
    };

    //execute the sequelize query
    return dao.sequelize.query(
        'SELECT * FROM "Applicant_CreateUpdate"(:id, NULL, :borrowerRoleType, :nominatedBorrower, :partyType, :user);',
        {
            replacements: filters,
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //do we have data?
        if(!result || (result && result.length == 0))
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        else
            //send out the first item
            res.send(200,result[0]);
        //return the promise
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Deletes an applicant
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _delete(req, res, next) {
    //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }


    //construct the filters for the function
    let filters = {
        id: id,
        user: utils.v8PartyRole(req)
    };

    //execute the sequelize query
    return dao.sequelize.query(
        'SELECT * FROM "Applicant_Delete"(:id, :user);',
        {
            replacements: filters,
            type: dao.sequelize.QueryTypes.BULKDELETE
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //do we have data?
        if(!result || (result && result.length == 0))
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        else
            //send out the first item
            res.send(204);
        //return the promise
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Saves the application partyl role ancillary data
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _ancillarysave(req, res, next) {
    //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    /* ensure the param id is set to the body */
    req.body.applicationPartyRoleID = id;

    return dao.v8.ApplicationPartyRoleAncillary.upsert(req.body)
    //once completed, process the data to the next action
    .then(result => {
        //send out the first item
        res.send(result && result == 1 ? 201 : 200, req.body);
        //return the promise
        return next();

    })
    //catch the exception for processing on the next item
    .catch(function(e){
        console.log("in error");
        next(e);
    })
    //mark the promise as done
    .done();

}


/* EMPLOYMENTS */
/** Retrieves the employment list for an applicant
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _employments(req, res, next) {
    //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    return dao.v8.Employment.findAll({
                                    where : { applicationPartyRoleID : id }
    })
    //once completed, process the data to the next action
    .then(result => {
        if(!result || (result && result.length == 0))
            return next(new restifyErrors.NotFoundError());
        else
            //send out the first item
            res.send(result);
            //return the promise
            return next();

    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Saves a new employment for an application party role
    @func _employmentCreate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _employmentCreate(req, res, next) {

    //get the param out
    let id = utils.fi(req.params.id),
        when = new Date(),
        who = utils.v8PartyRole(req);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

     /* ensure the param id is set to the body */
    req.body.applicationPartyRoleID = id;

    /* set up the body param overrides */
    req.body.created = when;
    req.body.createdByPartyRoleID = who;
    req.body.lastUpdated = when;
    req.body.lastUpdatedByPartyRoleID = who;

    //save
    return dao.v8.Employment.create(req.body)
    //once completed, process the data to the next action
    .then(result => {
        if(!result)
             //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        //send out the first item
        res.send(201, result.iD);
        //return the promise
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Updates a employment for an application party role
    @func _employmentUpdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _employmentUpdate(req, res, next) {

    let when = new Date(),
        who = utils.v8PartyRole(req);

    //filter out any missing required fields first
    let errorFields = _.filter([
                                !utils.ci(req.params.id) && "id"
                                ], x => x);

    if (errorFields.length > 0) {
        return next(new restifyErrors.BadRequestError(errorFields.join()));
    }

     /* ensure the param id is set to the body */
    req.body.iD = utils.fi(req.params.id);

    /* set up the body param overrides */
    delete req.body.created;
    delete req.body.createdByPartyRoleID;
    delete req.body.applicationPartyRoleID;
    req.body.lastUpdated = when;
    req.body.lastUpdatedByPartyRoleID = who;

    //save
    return dao.v8.Employment.findById(req.params.id)    
    //once completed, process the data to the next action
    .then(employment => {

        if (!employment) {
            return next(new restifyErrors.NotFoundError(`Employment does not exist`));
        }
        // update the data object now
        employment.updateAttributes(req.body);

        //save the employment
        return employment.save();
    })
    .then(employmentOut => {
        //send out the first item
        res.send(200);
        //return the promise
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();
}

/** Deletes an employment for an application party role
    @func _employmentUpdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _employmentDelete(req, res, next) {

     //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    //construct the filters for the function
    let filters = {
        id: id,
        user: utils.v8PartyRole(req)
    };

    //execute the sequelize query
    return dao.sequelize.query(
        'SELECT * FROM "Employment_Delete"(:id, :user);',
        {
            replacements: filters,
            type: dao.sequelize.QueryTypes.BULKDELETE
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //do we have data?
        if(!result || (result && result.length == 0))
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        else
            //send out the first item
            res.send(204);
        //return the promise
        return next();
    })
    //catch the exception for processing on the next item
    .catch(function(e){
        console.log("Error = " + e);
        return next(e);

    })
    //mark the promise as done
    .done();


}


/* INCOMES */
/** Retrieves the income list for an applicant
    @func _incomes
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _incomes(req, res, next) {

       //get the param out
    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    return dao.v8.Income.findAll({
                                    where : { applicationPartyRoleID : id },
                                    include: [
                                                { model: dao.v8.IncomeEmployment, as: 'EmploymentIncomeFks' }
                                             ]
    })
    //once completed, process the data to the next action
    .then(result => {
         if(!result || (result && result.length == 0))
            return next(new restifyErrors.NotFoundError());
        else
        //send out the first item
        res.send(result);
        //return the promise
        return next();

    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Saves a new income for an application party role
    @func _incomeCreate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _incomeCreate(req, res, next) {

}

/** Updates an income for an application party role
    @func _incomeUpdate
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _incomeUpdate(req, res, next) {

}

/** Deletes an income for an application party role
    @func _incomeDelete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/

function _incomeDelete(req, res, next) {


}



module.exports = {
    list:                        _list,
    relationships:  {
                        list:            _relationships,
                        save:            _relationshipSave,
                        types:           _relationshipTypes
                    },
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
    ancillarysave:               _ancillarysave,
    employment:     {
                        list:             _employments,
                        create:           _employmentCreate,
                        update:           _employmentUpdate,
                        delete:           _employmentDelete
                    },
    income:         {

                        list:             _incomes,
                        create:           _incomeCreate,
                        update:           _incomeUpdate,
                        delete:           _incomeDelete,
                    }
};
