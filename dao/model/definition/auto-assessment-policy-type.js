'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AutoAssessmentPolicyType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            field: 'Description',
            allowNull: false
        },
        autoAssessmentPolicyOwnerID: {
            type: DataTypes.INTEGER,
            field: 'AutoAssessmentPolicyOwnerID',
            allowNull: false,
            references: {
                model: 'AutoAssessmentPolicyOwner',
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
        tableName: 'AutoAssessmentPolicyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AutoAssessmentPolicyType = model.AutoAssessmentPolicyType;
    var AutoAssessmentProductCategoryPolicyTypeRuleType = model.AutoAssessmentProductCategoryPolicyTypeRuleType;
    var AutoAssessmentPolicyOwner = model.AutoAssessmentPolicyOwner;
    var AutoAssessmentRuleType = model.AutoAssessmentRuleType;
    var ProductCategory = model.ProductCategory;
    var Trigger = model.Trigger;

    AutoAssessmentPolicyType.hasMany(AutoAssessmentProductCategoryPolicyTypeRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoassessmentps',
        foreignKey: 'AutoAssessmentPolicyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentPolicyType.belongsTo(AutoAssessmentPolicyOwner, {
        as: 'AutoAssessmentPolicyOwner',
        foreignKey: 'AutoAssessmentPolicyOwnerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentPolicyType.belongsToMany(AutoAssessmentRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoAssessmentRuleTypes',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'AutoAssessmentPolicyTypeID',
        otherKey: 'AutoAssessmentRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentPolicyType.belongsToMany(ProductCategory, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeProductCategories',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'AutoAssessmentPolicyTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentPolicyType.belongsToMany(Trigger, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeTriggers',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'AutoAssessmentPolicyTypeID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
