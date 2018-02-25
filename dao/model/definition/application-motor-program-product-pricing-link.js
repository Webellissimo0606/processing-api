'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationMotorProgramProductPricingLink', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: true
        },
        pMSMotorVehicleLoanProgramProductPricingID: {
            type: DataTypes.INTEGER,
            field: 'PMSMotorVehicleLoanProgramProductPricingID',
            allowNull: true
        },
        pMSEquipmentFinanceProductTypeID: {
            type: DataTypes.INTEGER,
            field: 'PMSEquipmentFinanceProductTypeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationMotorProgramProductPricingLink',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationMotorProgramProductPricingLink = model.ApplicationMotorProgramProductPricingLink;

};
