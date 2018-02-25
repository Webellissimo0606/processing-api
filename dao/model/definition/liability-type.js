'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LiabilityType', {
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
        liabilityCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'LiabilityCategoryTypeID',
            allowNull: true,
            references: {
                model: 'LiabilityCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        },
        allowInterestOnly: {
            type: DataTypes.BOOLEAN,
            field: 'AllowInterestOnly',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'LiabilityType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LiabilityType = model.LiabilityType;
    var Liability = model.Liability;
    var LiabilityCategoryType = model.LiabilityCategoryType;
    var PartyRole = model.PartyRole;
    var Household = model.Household;
    var FrequencyType = model.FrequencyType;

    LiabilityType.hasMany(Liability, {
        as: 'LiabilityLiabilitytypeFks',
        foreignKey: 'LiabilityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LiabilityType.belongsTo(LiabilityCategoryType, {
        as: 'LiabilityCategoryType',
        foreignKey: 'LiabilityCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LiabilityType.belongsToMany(PartyRole, {
        as: 'LiabilityCreatedByPartyRoles',
        through: Liability,
        foreignKey: 'LiabilityTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LiabilityType.belongsToMany(PartyRole, {
        as: 'LiabilityCreditProviders',
        through: Liability,
        foreignKey: 'LiabilityTypeID',
        otherKey: 'CreditProviderID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LiabilityType.belongsToMany(Household, {
        as: 'LiabilityHouseholds',
        through: Liability,
        foreignKey: 'LiabilityTypeID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LiabilityType.belongsToMany(PartyRole, {
        as: 'LiabilityLastUpdatedByPartyRoles',
        through: Liability,
        foreignKey: 'LiabilityTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LiabilityType.belongsToMany(FrequencyType, {
        as: 'LiabilityRepaymentFrequencyTypes',
        through: Liability,
        foreignKey: 'LiabilityTypeID',
        otherKey: 'RepaymentFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
