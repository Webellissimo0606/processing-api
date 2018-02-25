"use strict";

/** Pool  route implementation
    @module routes/pool */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Executes Auto Pooling for an application
    @func _auto
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _auto(req, res, next) {

  let acId = utils.fi(req.params.id),
      user = utils.v8PartyRole(req);

  if(isNaN(acId)) {
    return next(new restifyErrors.BadRequestError('id'));
  }

  let replacements = {
    acId,
    user
  };

  return dao.sequelize.query(
    'SELECT * FROM "Pool_AutoForApplication"(:acId, :user);',
    {
      replacements: replacements,
      type: dao.sequelize.QueryTypes.SELECT
    }
  )
  .then((result) => {

    if(!result || (result && result.length === 0)) {
      return next(new restifyErrors.InternalServerError());
    }

    res.send(201, result);
    next();
  })
  .catch(next)
  .done();

}

module.exports = {
    auto:                        _auto
};
