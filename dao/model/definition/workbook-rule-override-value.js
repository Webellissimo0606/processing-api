'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookRuleOverrideValue', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false
        },
        workbookRuleTypeID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookRuleTypeID',
            allowNull: false,
            references: {
                model: 'WorkbookRuleType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        overrideValue: {
            type: DataTypes.STRING(20),
            field: 'OverrideValue',
            allowNull: true
        },
        overrideComments: {
            type: DataTypes.TEXT,
            field: 'OverrideComments',
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
        active: {
            type: DataTypes.INTEGER,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookRuleOverrideValue',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookRuleOverrideValue = model.WorkbookRuleOverrideValue;
    var PartyRole = model.PartyRole;
    var WorkbookRuleType = model.WorkbookRuleType;

    WorkbookRuleOverrideValue.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleOverrideValue.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleOverrideValue.belongsTo(WorkbookRuleType, {
        as: 'WorkbookRuleType',
        foreignKey: 'WorkbookRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
