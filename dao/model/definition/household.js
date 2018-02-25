'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Household', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'Household',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Household = model.Household;
    var ApplicationPartyRoleHousehold = model.ApplicationPartyRoleHousehold;
    var Asset = model.Asset;
    var Liability = model.Liability;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var AssetType = model.AssetType;
    var PartyRole = model.PartyRole;
    var LiabilityType = model.LiabilityType;
    var FrequencyType = model.FrequencyType;

    Household.hasMany(ApplicationPartyRoleHousehold, {
        as: 'ApplicationPartyRoleHouseholdHouseholdFks',
        foreignKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.hasMany(Asset, {
        as: 'AssetHouseholdFks',
        foreignKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.hasMany(Liability, {
        as: 'LiabilityHouseholdFks',
        foreignKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleHouseholdApplicationPartyRoles',
        through: ApplicationPartyRoleHousehold,
        foreignKey: 'HouseholdID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(AssetType, {
        as: 'AssetAssetTypes',
        through: Asset,
        foreignKey: 'HouseholdID',
        otherKey: 'AssetTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(PartyRole, {
        as: 'AssetCreatedByPartyRoles',
        through: Asset,
        foreignKey: 'HouseholdID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(PartyRole, {
        as: 'AssetLastUpdatedByPartyRoles',
        through: Asset,
        foreignKey: 'HouseholdID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(PartyRole, {
        as: 'LiabilityCreatedByPartyRoles',
        through: Liability,
        foreignKey: 'HouseholdID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(PartyRole, {
        as: 'LiabilityCreditProviders',
        through: Liability,
        foreignKey: 'HouseholdID',
        otherKey: 'CreditProviderID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(PartyRole, {
        as: 'LiabilityLastUpdatedByPartyRoles',
        through: Liability,
        foreignKey: 'HouseholdID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(LiabilityType, {
        as: 'LiabilityLiabilityTypes',
        through: Liability,
        foreignKey: 'HouseholdID',
        otherKey: 'LiabilityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Household.belongsToMany(FrequencyType, {
        as: 'LiabilityRepaymentFrequencyTypes',
        through: Liability,
        foreignKey: 'HouseholdID',
        otherKey: 'RepaymentFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
