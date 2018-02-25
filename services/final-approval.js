"use strict";

/** Final Approval services implementation
    @module services/final-approval */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config");


const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("../routes/utils");

/** Get final approval by id
    @func _required
    @param id {int} The final approval id
*/
function _retrieve(id) {

    return dao.v8.FinalApprovalProcessHistory.findById(id, {
      include: [
        { model: dao.v8.FinalApprovalProcessType, as: 'FinalApprovalProcessType' },
        { model: dao.v8.PartyRole, as: 'CreatedByPartyRole' },
        { model: dao.v8.PartyRole, as: 'CompletedByPartyRole' }
      ]
    })
    .then(result => {
      return Q(result);
    });

}



module.exports = {
    retrieve:      _retrieve
};
