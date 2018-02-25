'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AutoAssessmentProductCategoryPolicyTypeRuleType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        productCategoryID: {
            type: DataTypes.INTEGER,
            field: 'ProductCategoryID',
            allowNull: false,
            references: {
                model: 'ProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        autoAssessmentPolicyTypeID: {
            type: DataTypes.INTEGER,
            field: 'AutoAssessmentPolicyTypeID',
            allowNull: false,
            references: {
                model: 'AutoAssessmentPolicyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        autoAssessmentRuleTypeID: {
            type: DataTypes.INTEGER,
            field: 'AutoAssessmentRuleTypeID',
            allowNull: false,
            references: {
                model: 'AutoAssessmentRuleType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        triggerID: {
            type: DataTypes.INTEGER,
            field: 'TriggerID',
            allowNull: false,
            references: {
                model: 'Trigger',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'AutoAssessmentProductCategoryPolicyTypeRuleType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AutoAssessmentProductCategoryPolicyTypeRuleType = model.AutoAssessmentProductCategoryPolicyTypeRuleType;
    var AutoAssessmentRuleValue = model.AutoAssessmentRuleValue;
    var AutoAssessmentPolicyType = model.AutoAssessmentPolicyType;
    var AutoAssessmentRuleType = model.AutoAssessmentRuleType;
    var ProductCategory = model.ProductCategory;
    var Trigger = model.Trigger;

    AutoAssessmentProductCategoryPolicyTypeRuleType.hasMany(AutoAssessmentRuleValue, {
        as: 'AutoAssessmentRuleValueAutoassessmentproductcategorypolicytypes',
        foreignKey: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentProductCategoryPolicyTypeRuleType.belongsTo(AutoAssessmentPolicyType, {
        as: 'AutoAssessmentPolicyType',
        foreignKey: 'AutoAssessmentPolicyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentProductCategoryPolicyTypeRuleType.belongsTo(AutoAssessmentRuleType, {
        as: 'AutoAssessmentRuleType',
        foreignKey: 'AutoAssessmentRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentProductCategoryPolicyTypeRuleType.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentProductCategoryPolicyTypeRuleType.belongsTo(Trigger, {
        as: 'Trigger',
        foreignKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
