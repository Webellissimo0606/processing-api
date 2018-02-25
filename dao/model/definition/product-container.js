'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ProductContainer', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ProductContainer',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ProductContainer = model.ProductContainer;
    var ApplicationType = model.ApplicationType;
    var ProductCategory = model.ProductCategory;

    ProductContainer.hasMany(ApplicationType, {
        as: 'ApplicationTypeProductcontainerFks',
        foreignKey: 'ProductContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductContainer.hasMany(ProductCategory, {
        as: 'ProductCategoryProductcontainerFks',
        foreignKey: 'ProductContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
