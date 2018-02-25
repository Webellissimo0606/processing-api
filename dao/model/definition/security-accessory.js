'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SecurityAccessory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false,
            references: {
                model: 'Security',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        detail: {
            type: DataTypes.STRING(500),
            field: 'Detail',
            allowNull: false
        },
        accessoryCategoryID: {
            type: DataTypes.INTEGER,
            field: 'AccessoryCategoryID',
            allowNull: false,
            references: {
                model: 'AccessoryCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        accessoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'AccessoryTypeID',
            allowNull: false,
            references: {
                model: 'AccessoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        quantity: {
            type: DataTypes.INTEGER,
            field: 'Quantity',
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Amount',
            allowNull: false
        },
        fixed: {
            type: DataTypes.BOOLEAN,
            field: 'Fixed',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'SecurityAccessory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SecurityAccessory = model.SecurityAccessory;
    var AccessoryCategoryType = model.AccessoryCategoryType;
    var AccessoryType = model.AccessoryType;
    var PartyRole = model.PartyRole;
    var Security = model.Security;

    SecurityAccessory.belongsTo(AccessoryCategoryType, {
        as: 'AccessoryCategory',
        foreignKey: 'AccessoryCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SecurityAccessory.belongsTo(AccessoryType, {
        as: 'AccessoryType',
        foreignKey: 'AccessoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SecurityAccessory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SecurityAccessory.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SecurityAccessory.belongsTo(Security, {
        as: 'Security',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
