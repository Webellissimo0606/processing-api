'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Asset', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        householdID: {
            type: DataTypes.INTEGER,
            field: 'HouseholdID',
            allowNull: false,
            references: {
                model: 'Household',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        customDescription: {
            type: DataTypes.STRING(500),
            field: 'CustomDescription',
            allowNull: true
        },
        assetTypeID: {
            type: DataTypes.INTEGER,
            field: 'AssetTypeID',
            allowNull: false,
            references: {
                model: 'AssetType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        value: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Value',
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
        },
        refinancing: {
            type: DataTypes.BOOLEAN,
            field: 'Refinancing',
            allowNull: true,
            defaultValue: false
        }
    }, {
        schema: 'public',
        tableName: 'Asset',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Asset = model.Asset;
    var AssetType = model.AssetType;
    var PartyRole = model.PartyRole;
    var Household = model.Household;

    Asset.belongsTo(AssetType, {
        as: 'AssetType',
        foreignKey: 'AssetTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Asset.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Asset.belongsTo(Household, {
        as: 'Household',
        foreignKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Asset.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
