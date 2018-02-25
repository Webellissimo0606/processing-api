'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsProduct', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        productCategoryID: {
            type: DataTypes.INTEGER,
            field: 'ProductCategoryID',
            allowNull: false
        },
        funderProductID: {
            type: DataTypes.INTEGER,
            field: 'FunderProductID',
            allowNull: false
        },
        lType: {
            type: DataTypes.STRING(10),
            field: 'LType',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByUserID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByUserID',
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
        tableName: 'pms_Product',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsProduct = model.PmsProduct;

};
