'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsEquipmentfinanceloanproduct', {
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
        maximumLVR: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'MaximumLVR',
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
        tableName: 'pms_EquipmentFinanceLoanProduct',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsEquipmentfinanceloanproduct = model.PmsEquipmentfinanceloanproduct;

};
