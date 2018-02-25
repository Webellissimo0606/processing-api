"use strict";

/** Third Party  route implementation
    @module routes/third party */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Tracking applications report
    @func _track
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _track(req, res, next) {

  let oprid = utils.fi(req.params.oprid);

  if(isNaN(oprid)) {
    return next(new restifyErrors.BadRequestError('oprid'));
  }

  let replacements = { oprid };

  return dao.sequelize.query(
    'SELECT * FROM "Report_TrackMyApplications_ByUserPartyRoleID"(:oprid)',
    {
      replacements: replacements,
      type: dao.sequelize.QueryTypes.SELECT
    }
  )
  .then(result => {
    if(!result || (result && result.length === 0)) {
      return next(new restifyErrors.InternalServerError());
    }

    result = result.map(item => {
      let trackItem = {};

      trackItem.id = item.applicationID;
      trackItem.name = item.borrowerName;
      trackItem.created = item.created;
      trackItem.amount = item.loanAmount;
      trackItem.elid = item.externalLeadID;
      trackItem.pcid = item.productCategoryID;
      trackItem.raid = item.retailApplicationID;
      trackItem.applicationStatusTypeName = item.applicationStatusTypeName;

      return trackItem;
    });


    res.send(result);
    next();
  })
  .catch(next)
  .done();

}


module.exports = {
    track:           _track
};
