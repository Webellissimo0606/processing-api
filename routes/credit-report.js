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
        utils               = require("./utils");


/** Checks to see if a credit report is required for an applicant
    @func _required
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _required(req, res, next) {

    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    return dao.sequelize.query(
        'SELECT * FROM "CreditReport_RequiredByApplicationPartyRoleID"(:id);',
        {
            replacements: { 'id' : id },
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //send the data down the response
        res.send(200,result && result.length > 0 ? result[0]["CreditReport_RequiredByApplicationPartyRoleID"] : true);
        //return to the next action
        return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();
}

/** Applies the credit report and runs the required functionality
    @func _apply
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _apply(req, res, next) {


  let errorFields = _.filter([
                                !utils.ci(req.params.id) && "id",
                                !utils.dataHasKey(req.body, "report") || req.body.report == '' && "report",
                                !utils.dataHasKey(req.body, "requestFileId") || req.body.requestFileId == '' && "requestFileId",
                                !utils.dataHasKey(req.body, "responseFileId") || req.body.responseFileId == '' && "responseFileId",
                                !utils.dataHasKey(req.body, "requestedReportType") || req.body.requestedReportType == '' && "requestedReportType"
                                ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }

    return dao.sequelize.query(
        'SELECT * FROM "CreditReport_Create"(:id, :user, :report::xml,:requestFileId, :responseFileId, :requestedReportType);',
        {
            replacements: { 
                            'id' : utils.fi(req.params.id),
                            'user' :  utils.v8PartyRole(req),
                            'report' : req.body.report,
                            'requestFileId' : req.body.requestFileId,
                            'responseFileId' : req.body.responseFileId,
                            'requestedReportType': req.body.requestedReportType
                          },
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        if(result && result.length > 0 && utils.ci(result[0])){
            //send the data down the response
            res.send(201,{ 'iD' : result[0] });
            //return to the next action
            return next();
        }else{
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        }
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Lists all the applicants for an application requiring a credit report
    @func _listRequired
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _listRequired(req, res, next) {


    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }
    return dao.sequelize.query(
        'SELECT * FROM "CreditReport_RetrieveAllRequiredByApplicationContainerID"(:id);',
        {
            replacements: { 'id' : id },
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
            //send the data down the response, we dont care if nothing here so if null just send back an empty array
            res.send(200,result && result.length > 0 ? result : []);
            //return to the next action
            return next();
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Returns a summary for an applicant
    @func _summary
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _summary(req, res, next) {

    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }
    return utils.fetchResultsFromCursor("CreditReport_RetrieveRequestDataByApplicationPartyRoleID", ":id", { "id": id })
    //once completed, process the data to the next action
    .then(result => {
        //check the result
        if(result && result.length > 0){
            //send the data down the response, we dont care if nothing here so if null just send back an empty array
            res.send(200,result);
            //return to the next action
            return next();
        }else{
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        }
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Returns a company summary for an applicant
    @func _companySummary
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _companySummary(req, res, next) {

    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }
    return utils.fetchResultsFromCursor("TradingHistoryReport_RetrieveRequestDataByApplicationPartyRoleI", ":id", { "id": id })
    //once completed, process the data to the next action
    .then(result => {
        //check the result
        if(result && result.length > 0){
            //send the data down the response, we dont care if nothing here so if null just send back an empty array
            res.send(200,result);
            //return to the next action
            return next();
        }else{
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        }
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}


/** Returns the credit report type for an applicant
    @func _reportType
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _reportType(req, res, next) {

    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }
     return dao.sequelize.query(
        'SELECT * FROM "CreditReport_RetrieveCreditReportTypeByApplicationPartyRoleID"(:id);',
        {
            replacements: { 'id' : id },
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //check the result
        if(result && result.length > 0){
            //send the data down the response, we dont care if nothing here so if null just send back an empty array
            res.send(200,result);
            //return to the next action
            return next();
        }else{
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        }
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Returns the latest credit report for an applicant
    @func _latest
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _latest(req, res, next) {

    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

     return utils.fetchResultsFromCursor("CreditReport_RetrieveLatestPDFGenerationDataByAppPartyRoleID", ":id", { "id": id })
     //once completed, process the data to the next action
    .then(result => {
        //check the result
        if(result && result.length > 0){
            //send the data down the response, we dont care if nothing here so if null just send back an empty array
            res.send(200,result);
            //return to the next action
            return next();
        }else{
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        }
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Returns the credit report enquiry details for an applicant
    @func _enquiry
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _enquiry(req, res, next) {

    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }
     return dao.sequelize.query(
        'SELECT * FROM "CreditReport_RetrieveEnquiryIDAndApplicantDetailsByCreditReport"(:id);',
        {
            replacements: { 'id' : id },
            type: dao.sequelize.QueryTypes.SELECT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //check the result
        if(result && result.length > 0){
            //send the data down the response, we dont care if nothing here so if null just send back an empty array
            res.send(200,result[0]);
            //return to the next action
            return next();
        }else{
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        }
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

/** Updates the pdf file name
    @func _updatePDFFileName
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _updatePDFFileName(req, res, next) {

    let when = new Date(),
        who = utils.v8PartyRole(req);

    //filter out any missing required fields first
    let errorFields = _.filter([
                                !utils.ci(req.params.id) && "id",
                                !utils.dataHasKey(req.body, "fileName") && "fileName",
                                ], x => x);

    if (errorFields.length > 0) {
        return next(new restifyErrors.BadRequestError(errorFields.join()));
    }

    //save
    return dao.v8.CreditReport.findById(req.params.id)
    //once completed, process the data to the next action
    .then(creditReport => {

        if (!creditReport) {
            return next(new restifyErrors.NotFoundError(`id`));
        }
        //update the fields
       creditReport.lastUpdated = when;
       creditReport.lastUpdatedByPartyRoleID = who;
       creditReport.traxPDFFileID = req.body.fileName;

        // update the data object now
        creditReport.updateAttributes(creditReport);

        //save the employment
        return creditReport.save();
    })
    .then(creditReportOut => {

        if(!creditReportOut)
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());

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

/** Adds the applicant to the queue if applicable
    @func _enqueue
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _enqueue(req, res, next) {


    let id = utils.fi(req.params.id);

    //if not a number return the params failed using Precondition failed
    if (isNaN(id)) {
            return next(new restifyErrors.BadRequestError('id'));
    }

    //save
    return dao.sequelize.query(
        'SELECT * FROM "CreditReportRequired_Enqueue"(:id, :ref);',
        {
            replacements: {
                            'id' : id,
                            'ref' : utils.dataHasKey(req.body, "bureauRef") ? req.body.bureauRef : ''
                          },
            type: dao.sequelize.QueryTypes.INSERT
        }
    )
    //once completed, process the data to the next action
    .then(result => {
        //check the result
        if(result && result.length > 0 &&  result[0]["CreditReportRequired_Enqueue"]){
            //send the data down the response, we dont care if nothing here so if null just send back an empty array
            res.send(201,result[0]["CreditReportRequired_Enqueue"]);
            //return to the next action
            return next();
        }else{
            //no data send out a 500
            return next(new restifyErrors.InternalServerError());
        }
    })
    //catch the exception for processing on the next item
    .catch(next)
    //mark the promise as done
    .done();

}

module.exports = {
    apply:                           _apply,
    enquiry:                         _enquiry,
    enqueue:                         _enqueue,
    companySummary:                  _companySummary,
    latest:                          _latest,
    listRequired:                    _listRequired,
    reportType:                      _reportType,
    required:                        _required,
    summary:                         _summary,
    updatePDFFileName:               _updatePDFFileName
};
