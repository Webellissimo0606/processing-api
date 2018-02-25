'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartycompliance', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        registrationTypeID: {
            type: DataTypes.INTEGER,
            field: 'RegistrationTypeID',
            allowNull: false
        },
        registrationNumber: {
            type: DataTypes.STRING(100),
            field: 'RegistrationNumber',
            allowNull: false
        },
        expiryDate: {
            type: DataTypes.DATEONLY,
            field: 'ExpiryDate',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
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
        tableName: 'crumbs_PartyCompliance',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartycompliance = model.CrumbsPartycompliance;

};
