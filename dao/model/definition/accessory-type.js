'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AccessoryType', {
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
        tableName: 'AccessoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AccessoryType = model.AccessoryType;
    var SecurityAccessory = model.SecurityAccessory;
    var AccessoryCategoryType = model.AccessoryCategoryType;
    var PartyRole = model.PartyRole;
    var Security = model.Security;

    AccessoryType.hasMany(SecurityAccessory, {
        as: 'SecurityAccessoryAccessorytypeFks',
        foreignKey: 'AccessoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryType.belongsToMany(AccessoryCategoryType, {
        as: 'SecurityAccessoryAccessoryCategories',
        through: SecurityAccessory,
        foreignKey: 'AccessoryTypeID',
        otherKey: 'AccessoryCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryType.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryCreatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'AccessoryTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryType.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryLastUpdatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'AccessoryTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AccessoryType.belongsToMany(Security, {
        as: 'SecurityAccessorySecurities',
        through: SecurityAccessory,
        foreignKey: 'AccessoryTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
