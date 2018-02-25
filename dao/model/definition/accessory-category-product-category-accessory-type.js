'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AccessoryCategoryProductCategoryAccessoryType', {
        accessoryCategoryProductCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'AccessoryCategoryProductCategoryTypeID',
            allowNull: false,
            primaryKey: true
        },
        accessoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'AccessoryTypeID',
            allowNull: false,
            primaryKey: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'AccessoryCategoryProductCategoryAccessoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AccessoryCategoryProductCategoryAccessoryType = model.AccessoryCategoryProductCategoryAccessoryType;

};
