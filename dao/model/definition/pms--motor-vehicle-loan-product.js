'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsMotorvehicleloanproduct', {
        productID: {
            type: DataTypes.INTEGER,
            field: 'ProductID',
            allowNull: false
        },
        interestRateTermTypeID: {
            type: DataTypes.INTEGER,
            field: 'InterestRateTermTypeID',
            allowNull: false
        },
        honeymoonTermTypeID: {
            type: DataTypes.INTEGER,
            field: 'HoneymoonTermTypeID',
            allowNull: false
        },
        minimumLoanAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'MinimumLoanAmount',
            allowNull: false
        },
        maximumLoanAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'MaximumLoanAmount',
            allowNull: false
        },
        maximumLVR: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'MaximumLVR',
            allowNull: true
        },
        maximumAgeOfVehicleAtPurchase: {
            type: DataTypes.INTEGER,
            field: 'MaximumAgeOfVehicleAtPurchase',
            allowNull: false
        },
        maximumAgeOfVehicleAtMaturity: {
            type: DataTypes.INTEGER,
            field: 'MaximumAgeOfVehicleAtMaturity',
            allowNull: false
        },
        canCapitaliseFees: {
            type: DataTypes.BOOLEAN,
            field: 'CanCapitaliseFees',
            allowNull: false
        },
        canCapitaliseBrokerage: {
            type: DataTypes.BOOLEAN,
            field: 'CanCapitaliseBrokerage',
            allowNull: false
        },
        availableOnConsumerLoans: {
            type: DataTypes.BOOLEAN,
            field: 'AvailableOnConsumerLoans',
            allowNull: true
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByUserID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByUserID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'pms_MotorVehicleLoanProduct',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsMotorvehicleloanproduct = model.PmsMotorvehicleloanproduct;

};
