'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Liability', {
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
        liabilityTypeID: {
            type: DataTypes.INTEGER,
            field: 'LiabilityTypeID',
            allowNull: false,
            references: {
                model: 'LiabilityType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        creditProviderID: {
            type: DataTypes.INTEGER,
            field: 'CreditProviderID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        amountOwing: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'AmountOwing',
            allowNull: true
        },
        repaymentAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'RepaymentAmount',
            allowNull: true
        },
        repaymentFrequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentFrequencyTypeID',
            allowNull: true,
            references: {
                model: 'FrequencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        refinancing: {
            type: DataTypes.BOOLEAN,
            field: 'Refinancing',
            allowNull: true
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
        isInterestOnly: {
            type: DataTypes.BOOLEAN,
            field: 'IsInterestOnly',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'Liability',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Liability = model.Liability;
    var PartyRole = model.PartyRole;
    var Household = model.Household;
    var LiabilityType = model.LiabilityType;
    var FrequencyType = model.FrequencyType;

    Liability.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Liability.belongsTo(PartyRole, {
        as: 'CreditProvider',
        foreignKey: 'CreditProviderID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Liability.belongsTo(Household, {
        as: 'Household',
        foreignKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Liability.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Liability.belongsTo(LiabilityType, {
        as: 'LiabilityType',
        foreignKey: 'LiabilityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Liability.belongsTo(FrequencyType, {
        as: 'RepaymentFrequencyType',
        foreignKey: 'RepaymentFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
