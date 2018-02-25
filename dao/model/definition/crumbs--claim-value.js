'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsClaimvalue', {
        loginID: {
            type: DataTypes.INTEGER,
            field: 'LoginID',
            allowNull: false
        },
        claimTypeID: {
            type: DataTypes.INTEGER,
            field: 'ClaimTypeID',
            allowNull: false
        },
        value: {
            type: DataTypes.STRING(512),
            field: 'Value',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_ClaimValue',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsClaimvalue = model.CrumbsClaimvalue;

};
