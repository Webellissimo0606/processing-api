'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailEquipmentfinanceloanapplication', {
        equipmentFinanceLoanApplicationID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceLoanApplicationID',
            allowNull: false
        },
        leadID: {
            type: DataTypes.INTEGER,
            field: 'LeadID',
            allowNull: false
        },
        funderPartyID: {
            type: DataTypes.INTEGER,
            field: 'FunderPartyID',
            allowNull: true
        },
        equipmentFinanceLoanProductID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceLoanProductID',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: true
        },
        purchasePrice: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'PurchasePrice',
            allowNull: false
        },
        loanAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'LoanAmount',
            allowNull: true
        },
        loanPurposeTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanPurposeTypeID',
            allowNull: true
        },
        applicationCreated: {
            type: DataTypes.DATE,
            field: 'ApplicationCreated',
            allowNull: false
        },
        interestRate: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'InterestRate',
            allowNull: true
        },
        expectedSettlement: {
            type: DataTypes.DATE,
            field: 'ExpectedSettlement',
            allowNull: true
        },
        financeDate: {
            type: DataTypes.DATE,
            field: 'FinanceDate',
            allowNull: true
        },
        rowStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'RowStatusTypeID',
            allowNull: false
        },
        v8ApplicationID: {
            type: DataTypes.INTEGER,
            field: 'V8ApplicationID',
            allowNull: true
        },
        externalReferenceIdentifier: {
            type: DataTypes.STRING(50),
            field: 'ExternalReferenceIdentifier',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'retail_EquipmentFinanceLoanApplication',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailEquipmentfinanceloanapplication = model.RetailEquipmentfinanceloanapplication;

};
