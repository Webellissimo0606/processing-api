'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsBrand', {
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: false
        },
        sPVName: {
            type: DataTypes.STRING(300),
            field: 'SPVName',
            allowNull: true
        },
        sPVACN: {
            type: DataTypes.STRING(20),
            field: 'SPVACN',
            allowNull: true
        },
        ultracsBranchID: {
            type: DataTypes.INTEGER,
            field: 'UltracsBranchID',
            allowNull: true
        },
        vedaSubscriberID: {
            type: DataTypes.STRING(50),
            field: 'VedaSubscriberID',
            allowNull: true
        },
        vedaOperatorID: {
            type: DataTypes.STRING(50),
            field: 'VedaOperatorID',
            allowNull: true
        },
        documentBrandLevelTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentBrandLevelTypeID',
            allowNull: true
        },
        onlineBrandLevelTypeID: {
            type: DataTypes.INTEGER,
            field: 'OnlineBrandLevelTypeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Brand',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsBrand = model.CrumbsBrand;

};
