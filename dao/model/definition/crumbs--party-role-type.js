'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartyroletype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        },
        partyRoleSuiteID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleSuiteID',
            allowNull: true
        },
        partyRoleCategoryID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleCategoryID',
            allowNull: true
        },
        partyRoleGroupID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleGroupID',
            allowNull: true
        },
        partyTypeID: {
            type: DataTypes.INTEGER,
            field: 'PartyTypeID',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        applySecurity: {
            type: DataTypes.BOOLEAN,
            field: 'ApplySecurity',
            allowNull: true
        },
        usedForOwnership: {
            type: DataTypes.BOOLEAN,
            field: 'UsedForOwnership',
            allowNull: true
        },
        requiresV8PartyRole: {
            type: DataTypes.BOOLEAN,
            field: 'RequiresV8PartyRole',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyRoleType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartyroletype = model.CrumbsPartyroletype;

};
