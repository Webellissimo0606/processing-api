'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SecurityTitleInsurance', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false
        },
        insuranceObtained: {
            type: DataTypes.DATE,
            field: 'InsuranceObtained',
            allowNull: true
        },
        titleInsurer: {
            type: DataTypes.STRING(500),
            field: 'TitleInsurer',
            allowNull: true
        },
        policyNumber: {
            type: DataTypes.STRING(200),
            field: 'PolicyNumber',
            allowNull: true
        },
        premium: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'Premium',
            allowNull: true
        },
        gSTOnPremium: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'GSTOnPremium',
            allowNull: true
        },
        stampDuty: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'StampDuty',
            allowNull: true
        },
        total: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'Total',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: true
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: true
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: true
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'SecurityTitleInsurance',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SecurityTitleInsurance = model.SecurityTitleInsurance;

};
