'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationEquipmentProgramProductPricingLink', {
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
        pMSEquipmentFinanceLoanProgramProductPricingID: {
            type: DataTypes.INTEGER,
            field: 'PMSEquipmentFinanceLoanProgramProductPricingID',
            allowNull: true
        },
        pMSEquipmentFinanceProductTypeID: {
            type: DataTypes.INTEGER,
            field: 'PMSEquipmentFinanceProductTypeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationEquipmentProgramProductPricingLink',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationEquipmentProgramProductPricingLink = model.ApplicationEquipmentProgramProductPricingLink;

};
