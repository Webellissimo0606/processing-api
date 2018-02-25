'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AssetType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'AssetType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AssetType = model.AssetType;
    var Asset = model.Asset;
    var PartyRole = model.PartyRole;
    var Household = model.Household;

    AssetType.hasMany(Asset, {
        as: 'AssetAssettypeFks',
        foreignKey: 'AssetTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AssetType.belongsToMany(PartyRole, {
        as: 'AssetCreatedByPartyRoles',
        through: Asset,
        foreignKey: 'AssetTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AssetType.belongsToMany(Household, {
        as: 'AssetHouseholds',
        through: Asset,
        foreignKey: 'AssetTypeID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AssetType.belongsToMany(PartyRole, {
        as: 'AssetLastUpdatedByPartyRoles',
        through: Asset,
        foreignKey: 'AssetTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
