"use strict";

/** security  route implementation
    @module routes/security */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieve a security
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _retrieve(req, res, next) {


}

/** Lists security  for an application container
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _list(req, res, next) {

   let acId = utils.fi(req.params.id);

   if (isNaN(acId)) {
     return next(new restifyErrors.BadRequestError('id'));
   }

   let filters = {
     acId: acId
   };

   return dao.sequelize.query(
     'SELECT * FROM "Security_RetrieveListByApplicationContainerID"(:acId);',
     {
       replacements: filters,
       type: dao.sequelize.QueryTypes.SELECT
     }
   )
   .then(securities => {
     if (!securities || (securities && securities.length == 0)) {
       return next(new restifyErrors.InternalServerError(`id`));
     }

     securities = securities.map((security) => {
       let response = {
         id: security.iD,
         displayName: security.displayName,
         type: security.securityTypeID,
         ultracsId: security.ultracsID
       };

       return response;
     });

     res.send(securities);
     return next();
   })
   .catch(next)
   .done();

}

/** Creates a security
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

}

/** Updates a security
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

}

/** Deletes a security
    @func _delete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _delete(req, res, next) {

     let id = utils.fi(req.params.id);

     if (isNaN(id)) {
       return next(new restifyErrors.BadRequestError('id'));
     }

     let filters = {
       id: id,
       user: utils.v8PartyRole(req)
     };

     return dao.sequelize.query(
       'SELECT * FROM "Security_Delete"(:id, :user);',
       {
         replacements: filters,
         type: dao.sequelize.QueryTypes.BULKDELETE
       }
     )
     .then(result => {

       if (!result || (result && result.length == 0)) {
         return next(new restifyErrors.InternalServerError());
       }

       res.send(204);
       return next();
     })
     .catch(next)
     .done();

}

/** Gets the accessory categories by product category
    @func _accessorycats
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _accessorycats(req, res, next) {

  let pcid = utils.fi(req.params.pcid);

  if (isNaN(pcid)) {
    return next(new restifyErrors.BadRequestError('pcid'));
  }

  let w = {
    productCategoryTypeID: pcid
  };

  return dao.v8.AccessoryCategoryTypeProductCategory.findAll({
    where: w,
    order: 'sortOrder',
    include: [
      { model: dao.v8.AccessoryCategoryType, as: 'AccessoryCategoryType' }
    ]
  })
  .then(result => {

    if (!result || (result && result.length === 0)) {
      return next(new restifyErrors.NotFoundError(`pcid`));
    }

    res.send(result);
    return next();
  })
  .catch(next)
  .done();

}

/** Gets the accessory by product category and accessory category
    @func _accessories
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _accessories(req, res, next) {

  let errorFields = _.filter([
                              !utils.ci(req.params.pcid) && 'pcid',
                              !utils.ci(req.params.actid) && 'actid'
                              ], x => x);

  if (errorFields.length > 0) {
    return next(new restifyErrors.BadRequestError(errorFields.join()));
  }

  let w = {
    productCategoryTypeID: utils.fi(req.params.pcid),
    accessoryCategoryTypeID: utils.fi(req.params.actid)
  };

  return dao.v8.AccessoryCategoryTypeProductCategory.findAll({
    where: w,
    order: 'sortOrder',
    include: [
      { model: dao.v8.AccessoryCategoryProductCategoryAccessoryType, as: 'AccessoryCategoryProductCategoryAccessoryType' },
      { model: dao.v8.AccessoryCategoryType, as: 'AccessoryCategoryType' }
    ]
  })
  .then(result => {

    if (!result || (result && result.length === 0)) {
      return next(new restifyErrors.NotFoundError(`id`));
    }

    res.send(result);
    return next();
  })
  .catch(next)
  .done();

}



module.exports = {
    list:                        _list,
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
    accessorycats:               _accessorycats,
    accessories:                 _accessories
};
