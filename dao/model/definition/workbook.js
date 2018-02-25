'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Workbook', {
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
        ownerPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'OwnerPartyRoleID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        location: {
            type: DataTypes.STRING(256),
            field: 'Location',
            allowNull: false
        },
        effective: {
            type: DataTypes.DATE,
            field: 'Effective',
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
        }
    }, {
        schema: 'public',
        tableName: 'Workbook',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Workbook = model.Workbook;
    var QuoteType = model.QuoteType;
    var ServiceabilityHistory = model.ServiceabilityHistory;
    var WorkbookHistory = model.WorkbookHistory;
    var WorkbookParameter = model.WorkbookParameter;
    var WorkbookRuleCategory = model.WorkbookRuleCategory;
    var WorkbookRuleType = model.WorkbookRuleType;
    var PartyRole = model.PartyRole;
    var ApplicationContainer = model.ApplicationContainer;
    var WorkbookParameterDirectionType = model.WorkbookParameterDirectionType;
    var ServiceabilityValueType = model.ServiceabilityValueType;
    var WorkbookParameterType = model.WorkbookParameterType;

    Workbook.hasMany(QuoteType, {
        as: 'QuoteTypeWorkbookFks',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.hasMany(ServiceabilityHistory, {
        as: 'FKServiceabilityhistoryworkbooks',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.hasMany(WorkbookHistory, {
        as: 'HistoryWorkbookFks',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.hasMany(WorkbookParameter, {
        as: 'ParameterWorkbookFks',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.hasMany(WorkbookRuleCategory, {
        as: 'RuleCategoryWorkbookFks',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.hasMany(WorkbookRuleType, {
        as: 'RuleTypeWorkbookFks',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsTo(PartyRole, {
        as: 'OwnerPartyRole',
        foreignKey: 'OwnerPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(ApplicationContainer, {
        as: 'ServiceabilityHistoryApplicationContainers',
        through: ServiceabilityHistory,
        foreignKey: 'WorkbookID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(PartyRole, {
        as: 'ServiceabilityHistoryExecutedByPartyRoles',
        through: ServiceabilityHistory,
        foreignKey: 'WorkbookID',
        otherKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(ApplicationContainer, {
        as: 'WorkbookHistoryApplicationContainers',
        through: WorkbookHistory,
        foreignKey: 'WorkbookID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(PartyRole, {
        as: 'WorkbookHistoryExecutedByPartyRoles',
        through: WorkbookHistory,
        foreignKey: 'WorkbookID',
        otherKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(WorkbookParameterDirectionType, {
        as: 'WorkbookParameterWorkbookParameterDirectionTypes',
        through: WorkbookParameter,
        foreignKey: 'WorkbookID',
        otherKey: 'WorkbookParameterDirectionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(ServiceabilityValueType, {
        as: 'WorkbookParameterServiceabilityValueTypes',
        through: WorkbookParameter,
        foreignKey: 'WorkbookID',
        otherKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(WorkbookParameterType, {
        as: 'WorkbookParameterWorkbookParameterTypes',
        through: WorkbookParameter,
        foreignKey: 'WorkbookID',
        otherKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(WorkbookParameterType, {
        as: 'WorkbookRuleTypeWorkbookParameterTypes',
        through: WorkbookRuleType,
        foreignKey: 'WorkbookID',
        otherKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Workbook.belongsToMany(WorkbookRuleCategory, {
        as: 'WorkbookRuleTypeWorkbookRuleCategories',
        through: WorkbookRuleType,
        foreignKey: 'WorkbookID',
        otherKey: 'WorkbookRuleCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
