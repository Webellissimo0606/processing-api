'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AutoAssessmentRuleType', {
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
        description: {
            type: DataTypes.STRING(150),
            field: 'Description',
            allowNull: false
        },
        storedProcedure: {
            type: DataTypes.STRING(200),
            field: 'StoredProcedure',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'AutoAssessmentRuleType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AutoAssessmentRuleType = model.AutoAssessmentRuleType;
    var AutoAssessmentProductCategoryPolicyTypeRuleType = model.AutoAssessmentProductCategoryPolicyTypeRuleType;
    var AutoAssessmentPolicyType = model.AutoAssessmentPolicyType;
    var ProductCategory = model.ProductCategory;
    var Trigger = model.Trigger;

    AutoAssessmentRuleType.hasMany(AutoAssessmentProductCategoryPolicyTypeRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoassessmentrs',
        foreignKey: 'AutoAssessmentRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentRuleType.belongsToMany(AutoAssessmentPolicyType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoAssessmentPolicyTypes',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'AutoAssessmentRuleTypeID',
        otherKey: 'AutoAssessmentPolicyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentRuleType.belongsToMany(ProductCategory, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeProductCategories',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'AutoAssessmentRuleTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentRuleType.belongsToMany(Trigger, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeTriggers',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'AutoAssessmentRuleTypeID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
