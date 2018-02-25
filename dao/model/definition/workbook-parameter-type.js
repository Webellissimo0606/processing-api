'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookParameterType', {
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookParameterType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookParameterType = model.WorkbookParameterType;
    var WorkbookParameter = model.WorkbookParameter;
    var WorkbookRuleType = model.WorkbookRuleType;
    var WorkbookValueHistory = model.WorkbookValueHistory;
    var WorkbookValueHistoryArchive = model.WorkbookValueHistoryArchive;
    var WorkbookParameterDirectionType = model.WorkbookParameterDirectionType;
    var ServiceabilityValueType = model.ServiceabilityValueType;
    var Workbook = model.Workbook;
    var WorkbookRuleCategory = model.WorkbookRuleCategory;
    var WorkbookHistory = model.WorkbookHistory;

    WorkbookParameterType.hasMany(WorkbookParameter, {
        as: 'WorkbookParameterWorkbookparametertypeFks',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.hasMany(WorkbookRuleType, {
        as: 'WorkbookRuleTypeWorkbookparametertypeFks',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.hasMany(WorkbookValueHistory, {
        as: 'WorkbookValueHistoryWorkbookparametertypeFks',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.hasMany(WorkbookValueHistoryArchive, {
        as: 'WorkbookValueHistoryArchiveWorkbookparametertypeFks',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.belongsToMany(WorkbookParameterDirectionType, {
        as: 'WorkbookParameterWorkbookParameterDirectionTypes',
        through: WorkbookParameter,
        foreignKey: 'WorkbookParameterTypeID',
        otherKey: 'WorkbookParameterDirectionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.belongsToMany(ServiceabilityValueType, {
        as: 'WorkbookParameterServiceabilityValueTypes',
        through: WorkbookParameter,
        foreignKey: 'WorkbookParameterTypeID',
        otherKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.belongsToMany(Workbook, {
        as: 'WorkbookParameterWorkbooks',
        through: WorkbookParameter,
        foreignKey: 'WorkbookParameterTypeID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.belongsToMany(WorkbookRuleCategory, {
        as: 'WorkbookRuleTypeWorkbookRuleCategories',
        through: WorkbookRuleType,
        foreignKey: 'WorkbookParameterTypeID',
        otherKey: 'WorkbookRuleCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.belongsToMany(Workbook, {
        as: 'WorkbookRuleTypeWorkbooks',
        through: WorkbookRuleType,
        foreignKey: 'WorkbookParameterTypeID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.belongsToMany(WorkbookHistory, {
        as: 'WorkbookValueHistoryWorkbookHistories',
        through: WorkbookValueHistory,
        foreignKey: 'WorkbookParameterTypeID',
        otherKey: 'WorkbookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterType.belongsToMany(WorkbookHistory, {
        as: 'WorkbookValueHistoryArchiveWorkbookHistories',
        through: WorkbookValueHistoryArchive,
        foreignKey: 'WorkbookParameterTypeID',
        otherKey: 'WorkbookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
