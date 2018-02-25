'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartytelephonesequenceview', {
        a: {
            type: DataTypes.BIGINT,
            field: 'a',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyTelephoneSequenceView',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartytelephonesequenceview = model.CrumbsPartytelephonesequenceview;

};
