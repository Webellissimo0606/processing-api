'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookRuleType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        },
        failureMessage: {
            type: DataTypes.STRING(200),
            field: 'FailureMessage',
            allowNull: true
        },
        referMessage: {
            type: DataTypes.STRING(200),
            field: 'ReferMessage',
            allowNull: true
        },
        workbookRuleCategoryID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookRuleCategoryID',
            allowNull: false,
            references: {
                model: 'WorkbookRuleCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        workbookID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookID',
            allowNull: false,
            references: {
                model: 'Workbook',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        workbookParameterTypeID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookParameterTypeID',
            allowNull: false,
            references: {
                model: 'WorkbookParameterType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookRuleType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookRuleType = model.WorkbookRuleType;
    var WorkbookRuleOverrideValue = model.WorkbookRuleOverrideValue;
    var WorkbookParameterType = model.WorkbookParameterType;
    var WorkbookRuleCategory = model.WorkbookRuleCategory;
    var Workbook = model.Workbook;
    var PartyRole = model.PartyRole;

    WorkbookRuleType.hasMany(WorkbookRuleOverrideValue, {
        as: 'WorkbookRuleOverrideValueWorkbookruletypeFks',
        foreignKey: 'WorkbookRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleType.belongsTo(WorkbookParameterType, {
        as: 'WorkbookParameterType',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleType.belongsTo(WorkbookRuleCategory, {
        as: 'WorkbookRuleCategory',
        foreignKey: 'WorkbookRuleCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleType.belongsTo(Workbook, {
        as: 'Workbook',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleType.belongsToMany(PartyRole, {
        as: 'WorkbookRuleOverrideValueCreatedByPartyRoles',
        through: WorkbookRuleOverrideValue,
        foreignKey: 'WorkbookRuleTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleType.belongsToMany(PartyRole, {
        as: 'WorkbookRuleOverrideValueLastUpdatedByPartyRoles',
        through: WorkbookRuleOverrideValue,
        foreignKey: 'WorkbookRuleTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
