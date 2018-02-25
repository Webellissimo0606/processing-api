"use strict";

/** Applicant services implementation
    @module services/applicant */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config");
        

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("../routes/utils");

/** Checks to see if a credit report is required for an applicant
    @func _required
    @param id {int} The credit report id    
*/
function _relationships(id, userPartyRoleId) {

    
    //create the filters for the function
    let filters = {
        id: id,
        user: userPartyRoleId
    };


    //execute the sequelize query
    return dao.sequelize.query(
            'SELECT * FROM "Applicant_RetrieveRelationships"(:id, :user);',
            {
                replacements: filters,
                type: dao.sequelize.QueryTypes.SELECT
            }
    ) //once completed, process the data to the next action
    .then(relationships => {  
        //send the data down the response
        return relationships;
    });

}



module.exports = {
    relationships:      _relationships
};
