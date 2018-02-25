'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AccessoryCategoryType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'AccessoryCategoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AccessoryCategoryType = model.AccessoryCategoryType;
    var AccessoryCategoryTypeProductCategory = model.AccessoryCategoryTypeProductCategory;
    var SecurityAccessory = model.SecurityAccessory;
    var ProductCategory = model.ProductCategory;
    var AccessoryType = model.AccessoryType;
    var PartyRole = model.PartyRole;
    var Security = model.Security;

    AccessoryCategoryType.hasMany(AccessoryCategoryTypeProductCategory, {
        as: 'ProductCategoryAccessorycategorytypePks',
        foreignKey: 'AccessoryCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryCategoryType.hasMany(SecurityAccessory, {
        as: 'SecurityAccessoryAccessorycategorytypeFks',
        foreignKey: 'AccessoryCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryCategoryType.belongsToMany(ProductCategory, {
        as: 'AccessoryCategoryTypeProductCategoryProductCategoryTypes',
        through: AccessoryCategoryTypeProductCategory,
        foreignKey: 'AccessoryCategoryTypeID',
        otherKey: 'ProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryCategoryType.belongsToMany(AccessoryType, {
        as: 'SecurityAccessoryAccessoryTypes',
        through: SecurityAccessory,
        foreignKey: 'AccessoryCategoryID',
        otherKey: 'AccessoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryCategoryType.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryCreatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'AccessoryCategoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryCategoryType.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryLastUpdatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'AccessoryCategoryID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryCategoryType.belongsToMany(Security, {
        as: 'SecurityAccessorySecurities',
        through: SecurityAccessory,
        foreignKey: 'AccessoryCategoryID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
