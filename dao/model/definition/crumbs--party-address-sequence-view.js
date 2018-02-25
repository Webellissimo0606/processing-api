'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartyaddresssequenceview', {
        a: {
            type: DataTypes.BIGINT,
            field: 'a',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyAddressSequenceView',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartyaddresssequenceview = model.CrumbsPartyaddresssequenceview;

};
