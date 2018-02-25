'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsMotorvehicleloanprogramproductpricing', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        programProductID: {
            type: DataTypes.INTEGER,
            field: 'ProgramProductID',
            allowNull: false
        },
        minimumLoanTermLengthTypeID: {
            type: DataTypes.INTEGER,
            field: 'MinimumLoanTermLengthTypeID',
            allowNull: false
        },
        maximumLoanTermLengthTypeID: {
            type: DataTypes.INTEGER,
            field: 'MaximumLoanTermLengthTypeID',
            allowNull: false
        },
        motorVehicleSecurityTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleSecurityTypeID',
            allowNull: false
        },
        loanPurposeGroupID: {
            type: DataTypes.INTEGER,
            field: 'LoanPurposeGroupID',
            allowNull: false
        },
        motorVehicleUsageTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleUsageTypeID',
            allowNull: false
        },
        minimumPercentagePersonalUse: {
            type: DataTypes.INTEGER,
            field: 'MinimumPercentagePersonalUse',
            allowNull: false
        },
        margin: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Margin',
            allowNull: false
        },
        effectiveDate: {
            type: DataTypes.DATE,
            field: 'EffectiveDate',
            allowNull: false
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
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'pms_MotorVehicleLoanProgramProductPricing',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsMotorvehicleloanprogramproductpricing = model.PmsMotorvehicleloanprogramproductpricing;

};
