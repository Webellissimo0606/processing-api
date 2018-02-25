"use strict";

/** Application services implementation
    @module services/application */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config");


const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("../routes/utils"),
        applicationService  = require(".");

/** gets the product categories
    @func _determineProductCategories
    @param id {int} The credit report id
*/
function _determineProductCategories(id, userPartyRoleId) {

   //create the filters for the function
    let filters = {
        id: id,
        user: userPartyRoleId
    };


    //execute the sequelize query
    return dao.sequelize.query(
            'SELECT * FROM "Application_DetermineProductCategories"(:id, :user);',
            {
                replacements: filters,
                type: dao.sequelize.QueryTypes.SELECT
            }
    ) //once completed, process the data to the next action
    .then(pc => {
        //send the data down the response
        return Q(pc);
    });

}


/** gets the product categories in a formatted string
    @func _determineProductCategoriesFormatted
    @param id {int} The credit report id
*/
function _determineProductCategoriesFormatted(id, userPartyRoleId) {

    //execute the sequelize query
    return _determineProductCategories(id, userPartyRoleId)
    //once completed, process the data to the next action
    .then(pc => {
        //send the data down the response
         return  Q(pc ? (pc["ProductCategoryID"] + (pc["SubProductCategoryID"] ? ("_" + pc["SubProductCategoryID"]) : "")) : null);
    });

}


module.exports = {
    determineProductCategories:                 _determineProductCategories,
    determineProductCategoriesFormatted:        _determineProductCategoriesFormatted
};
