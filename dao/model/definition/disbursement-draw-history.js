'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DisbursementDrawHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        disbursementID: {
            type: DataTypes.INTEGER,
            field: 'DisbursementID',
            allowNull: false,
            references: {
                model: 'Disbursement',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        openingBalance: {
            type: DataTypes.DECIMAL,
            field: 'OpeningBalance',
            allowNull: true
        },
        claimAmount: {
            type: DataTypes.DECIMAL,
            field: 'ClaimAmount',
            allowNull: true
        },
        remainingToComplete: {
            type: DataTypes.DECIMAL,
            field: 'RemainingToComplete',
            allowNull: true
        },
        amountPaid: {
            type: DataTypes.DECIMAL,
            field: 'AmountPaid',
            allowNull: true
        },
        datePaid: {
            type: DataTypes.DATE,
            field: 'DatePaid',
            allowNull: true
        },
        retainedFunds: {
            type: DataTypes.DECIMAL,
            field: 'RetainedFunds',
            allowNull: true
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
        },
        settlementID: {
            type: DataTypes.INTEGER,
            field: 'SettlementID',
            allowNull: false
        },
        expectedPayment: {
            type: DataTypes.DATE,
            field: 'ExpectedPayment',
            allowNull: true
        },
        disbursementSubTypeID: {
            type: DataTypes.INTEGER,
            field: 'DisbursementSubTypeID',
            allowNull: false,
            references: {
                model: 'DisbursementSubType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        estimatedCompletion: {
            type: DataTypes.DATE,
            field: 'EstimatedCompletion',
            allowNull: true
        },
        claimTypeDisbursementID: {
            type: DataTypes.INTEGER,
            field: 'ClaimTypeDisbursementID',
            allowNull: true
        },
        valuationOrderID: {
            type: DataTypes.INTEGER,
            field: 'ValuationOrderID',
            allowNull: true
        },
        sendEmail: {
            type: DataTypes.BOOLEAN,
            field: 'SendEmail',
            allowNull: false,
            defaultValue: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'DisbursementDrawHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DisbursementDrawHistory = model.DisbursementDrawHistory;
    var DisbursementSubType = model.DisbursementSubType;
    var Disbursement = model.Disbursement;

    DisbursementDrawHistory.belongsTo(DisbursementSubType, {
        as: 'DisbursementSubType',
        foreignKey: 'DisbursementSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementDrawHistory.belongsTo(Disbursement, {
        as: 'Disbursement',
        foreignKey: 'DisbursementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
