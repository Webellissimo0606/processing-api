'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AccessoryCategoryTypeProductCategory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        accessoryCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'AccessoryCategoryTypeID',
            allowNull: false,
            references: {
                model: 'AccessoryCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        productCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'ProductCategoryTypeID',
            allowNull: false,
            references: {
                model: 'ProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'AccessoryCategoryTypeProductCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AccessoryCategoryTypeProductCategory = model.AccessoryCategoryTypeProductCategory;
    var AccessoryCategoryType = model.AccessoryCategoryType;
    var ProductCategory = model.ProductCategory;

    AccessoryCategoryTypeProductCategory.belongsTo(AccessoryCategoryType, {
        as: 'AccessoryCategoryType',
        foreignKey: 'AccessoryCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryCategoryTypeProductCategory.belongsTo(ProductCategory, {
        as: 'ProductCategoryType',
        foreignKey: 'ProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
