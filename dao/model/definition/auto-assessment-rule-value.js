'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AutoAssessmentRuleValue', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        autoAssessmentProductCategoryPolicyTypeRuleTypeID: {
            type: DataTypes.INTEGER,
            field: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeID',
            allowNull: false,
            references: {
                model: 'AutoAssessmentProductCategoryPolicyTypeRuleType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        valueName: {
            type: DataTypes.STRING(100),
            field: 'ValueName',
            allowNull: false
        },
        value: {
            type: DataTypes.STRING(100),
            field: 'Value',
            allowNull: false
        },
        valueType: {
            type: DataTypes.STRING(150),
            field: 'ValueType',
            allowNull: false
        },
        effectiveDate: {
            type: DataTypes.DATEONLY,
            field: 'EffectiveDate',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'AutoAssessmentRuleValue',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AutoAssessmentRuleValue = model.AutoAssessmentRuleValue;
    var AutoAssessmentProductCategoryPolicyTypeRuleType = model.AutoAssessmentProductCategoryPolicyTypeRuleType;

    AutoAssessmentRuleValue.belongsTo(AutoAssessmentProductCategoryPolicyTypeRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleType',
        foreignKey: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
