'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsEquipmentfinanceloanprogramproductpricing', {
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
        equipmentFinanceProductCategoryID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceProductCategoryID',
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
        tableName: 'pms_EquipmentFinanceLoanProgramProductPricing',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsEquipmentfinanceloanprogramproductpricing = model.PmsEquipmentfinanceloanprogramproductpricing;

};
