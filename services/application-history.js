"use strict";

/** Application History services implementation
    @module services/application-history */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config");
        

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("../routes/utils");

/** Checks to see if a credit report is required for an applicant
    @func _create
    @param id {int} The credit report id    
*/
function _create(id, message, userId, title) {

  //this is being externalised
  return Q(1);

}

function _prettyFormatPostGres(message){
    //reformat
    message = message.replace("P0001: ", "")
                     .replace("{\"", "")
                     .replace("\"}", "")
                     .replace("{'", "")
                     .replace("'}", "")
                     .replace("{ \"", "")
                     .replace("\" }", "")
                     .replace("{ '", "")
                     .replace("' }", "");
    return Q(message);
}


module.exports = {
    create:                 _create,
    prettyFormatPostGres:   _prettyFormatPostGres
};
