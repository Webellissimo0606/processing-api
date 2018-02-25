'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailMotorvehicleloanapplication', {
        motorVehicleLoanApplicationID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleLoanApplicationID',
            allowNull: false
        },
        leadID: {
            type: DataTypes.INTEGER,
            field: 'LeadID',
            allowNull: false
        },
        funderID: {
            type: DataTypes.INTEGER,
            field: 'FunderID',
            allowNull: true
        },
        motorVehicleLoanProductID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleLoanProductID',
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
        tontoApplicationID: {
            type: DataTypes.INTEGER,
            field: 'TontoApplicationID',
            allowNull: true
        },
        accountantFirm: {
            type: DataTypes.STRING(200),
            field: 'AccountantFirm',
            allowNull: true
        },
        accountantPhone: {
            type: DataTypes.STRING(50),
            field: 'AccountantPhone',
            allowNull: true
        },
        accountantContactName: {
            type: DataTypes.STRING(200),
            field: 'AccountantContactName',
            allowNull: true
        },
        externalReferenceIdentifier: {
            type: DataTypes.STRING(50),
            field: 'ExternalReferenceIdentifier',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'retail_MotorVehicleLoanApplication',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailMotorvehicleloanapplication = model.RetailMotorvehicleloanapplication;

};
