'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookRuleCategory', {
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
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookRuleCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookRuleCategory = model.WorkbookRuleCategory;
    var WorkbookRuleType = model.WorkbookRuleType;
    var Workbook = model.Workbook;
    var WorkbookParameterType = model.WorkbookParameterType;

    WorkbookRuleCategory.hasMany(WorkbookRuleType, {
        as: 'WorkbookRuleTypeWorkbookrulecategoryFks',
        foreignKey: 'WorkbookRuleCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleCategory.belongsTo(Workbook, {
        as: 'Workbook',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleCategory.belongsToMany(WorkbookParameterType, {
        as: 'WorkbookRuleTypeWorkbookParameterTypes',
        through: WorkbookRuleType,
        foreignKey: 'WorkbookRuleCategoryID',
        otherKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookRuleCategory.belongsToMany(Workbook, {
        as: 'WorkbookRuleTypeWorkbooks',
        through: WorkbookRuleType,
        foreignKey: 'WorkbookRuleCategoryID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
