'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TestAppSubmission', {
        storedProcedure: {
            type: DataTypes.STRING(500),
            field: 'StoredProcedure',
            allowNull: true
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        existingMotorVehicleLoanID: {
            type: DataTypes.INTEGER,
            field: 'ExistingMotorVehicleLoanID',
            allowNull: true
        },
        existingMotorVehicleSecurityID: {
            type: DataTypes.INTEGER,
            field: 'ExistingMotorVehicleSecurityID',
            allowNull: true
        },
        createUpdatePartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreateUpdatePartyRoleID',
            allowNull: true
        },
        loanPurposeTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanPurposeTypeID',
            allowNull: true
        },
        loanTermTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTermTypeID',
            allowNull: true
        },
        loanAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'LoanAmount',
            allowNull: true
        },
        balloonPayment: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'BalloonPayment',
            allowNull: true
        },
        pMSMotorVehicleLoanProgramProductPricingID: {
            type: DataTypes.INTEGER,
            field: 'PMSMotorVehicleLoanProgramProductPricingID',
            allowNull: true
        },
        retailMotorVehicleSpecificationID: {
            type: DataTypes.INTEGER,
            field: 'RetailMotorVehicleSpecificationID',
            allowNull: true
        },
        motorVehicleYear: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleYear',
            allowNull: true
        },
        retailMakeID: {
            type: DataTypes.INTEGER,
            field: 'RetailMakeID',
            allowNull: true
        },
        retailModelID: {
            type: DataTypes.INTEGER,
            field: 'RetailModelID',
            allowNull: true
        },
        motorVehicleSecurityTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleSecurityTypeID',
            allowNull: true
        },
        odometerReading: {
            type: DataTypes.STRING(10),
            field: 'OdometerReading',
            allowNull: true
        },
        registrationNumber: {
            type: DataTypes.STRING(20),
            field: 'RegistrationNumber',
            allowNull: true
        },
        vINChassisNumber: {
            type: DataTypes.STRING(50),
            field: 'VINChassisNumber',
            allowNull: true
        },
        engineNumber: {
            type: DataTypes.STRING(50),
            field: 'EngineNumber',
            allowNull: true
        },
        valuationAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'ValuationAmount',
            allowNull: true
        },
        purchasePrice: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'PurchasePrice',
            allowNull: true
        },
        nVIC: {
            type: DataTypes.STRING(50),
            field: 'NVIC',
            allowNull: true
        },
        firstRegistrationDate: {
            type: DataTypes.DATEONLY,
            field: 'FirstRegistrationDate',
            allowNull: true
        },
        financeOwing: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'FinanceOwing',
            allowNull: true
        },
        financeTerm: {
            type: DataTypes.INTEGER,
            field: 'FinanceTerm',
            allowNull: true
        },
        financeTermFrequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FinanceTermFrequencyTypeID',
            allowNull: true
        },
        registrationState: {
            type: DataTypes.STRING(50),
            field: 'RegistrationState',
            allowNull: true
        },
        crumbsSupplierPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsSupplierPartyRoleID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TestAppSubmission',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TestAppSubmission = model.TestAppSubmission;

};
