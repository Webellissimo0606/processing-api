'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Trigger', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        triggerPointID: {
            type: DataTypes.INTEGER,
            field: 'TriggerPointID',
            allowNull: false,
            references: {
                model: 'TriggerPoint',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        currencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'CurrencyTypeID',
            allowNull: false,
            references: {
                model: 'CurrencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        triggerActionID: {
            type: DataTypes.INTEGER,
            field: 'TriggerActionID',
            allowNull: false,
            references: {
                model: 'TriggerAction',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        asynchronous: {
            type: DataTypes.BOOLEAN,
            field: 'Asynchronous',
            allowNull: false
        },
        terminateOnFail: {
            type: DataTypes.BOOLEAN,
            field: 'TerminateOnFail',
            allowNull: false
        },
        nextTriggerID: {
            type: DataTypes.INTEGER,
            field: 'NextTriggerID',
            allowNull: true,
            references: {
                model: 'Trigger',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'Trigger',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Trigger = model.Trigger;
    var AutoAssessmentProductCategoryPolicyTypeRuleType = model.AutoAssessmentProductCategoryPolicyTypeRuleType;
    var TraxTreeTriggerValidationSuite = model.TraxTreeTriggerValidationSuite;
    var TraxTreeValidationResult = model.TraxTreeValidationResult;
    var TriggerParameter = model.TriggerParameter;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var TriggerAction = model.TriggerAction;
    var TriggerPoint = model.TriggerPoint;
    var AutoAssessmentPolicyType = model.AutoAssessmentPolicyType;
    var AutoAssessmentRuleType = model.AutoAssessmentRuleType;
    var ProductCategory = model.ProductCategory;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var TraxTreeValidationOutcome = model.TraxTreeValidationOutcome;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;

    Trigger.hasMany(AutoAssessmentProductCategoryPolicyTypeRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeTriggerFks',
        foreignKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.hasMany(TraxTreeTriggerValidationSuite, {
        as: 'TraxTreeTriggerValidationSuiteTriggerFks',
        foreignKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.hasMany(TraxTreeValidationResult, {
        as: 'TraxTreeValidationResultTriggerFks',
        foreignKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.hasMany(Trigger, {
        as: 'NextTriggerFks',
        foreignKey: 'NextTriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.hasMany(TriggerParameter, {
        as: 'ParameterTriggerFks',
        foreignKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsTo(CurrencyType, {
        as: 'CurrencyType',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsTo(Trigger, {
        as: 'NextTrigger',
        foreignKey: 'NextTriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsTo(TriggerAction, {
        as: 'TriggerAction',
        foreignKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsTo(TriggerPoint, {
        as: 'TriggerPoint',
        foreignKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(AutoAssessmentPolicyType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoAssessmentPolicyTypes',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'TriggerID',
        otherKey: 'AutoAssessmentPolicyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(AutoAssessmentRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoAssessmentRuleTypes',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'TriggerID',
        otherKey: 'AutoAssessmentRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(ProductCategory, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeProductCategories',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'TriggerID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeTriggerValidationSuiteValidationSuites',
        through: TraxTreeTriggerValidationSuite,
        foreignKey: 'TriggerID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(ApplicationContainer, {
        as: 'TraxTreeValidationResultApplicationContainers',
        through: TraxTreeValidationResult,
        foreignKey: 'TriggerID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(ApplicationPartyRole, {
        as: 'TraxTreeValidationResultApplicationPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'TriggerID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(ApplicationSecurity, {
        as: 'TraxTreeValidationResultApplicationSecurities',
        through: TraxTreeValidationResult,
        foreignKey: 'TriggerID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(PartyRole, {
        as: 'TraxTreeValidationResultCreatedByPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'TriggerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(TraxTreeValidationOutcome, {
        as: 'TraxTreeValidationResultValidationOutcomes',
        through: TraxTreeValidationResult,
        foreignKey: 'TriggerID',
        otherKey: 'ValidationOutcomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationResultValidationPlugins',
        through: TraxTreeValidationResult,
        foreignKey: 'TriggerID',
        otherKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationResultValidationSuites',
        through: TraxTreeValidationResult,
        foreignKey: 'TriggerID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(PartyRole, {
        as: 'TriggerCreatedByPartyRoles',
        through: Trigger,
        foreignKey: 'NextTriggerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(CurrencyType, {
        as: 'TriggerCurrencyTypes',
        through: Trigger,
        foreignKey: 'NextTriggerID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(PartyRole, {
        as: 'TriggerLastUpdatedByPartyRoles',
        through: Trigger,
        foreignKey: 'NextTriggerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(TriggerAction, {
        as: 'TriggerTriggerActions',
        through: Trigger,
        foreignKey: 'NextTriggerID',
        otherKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Trigger.belongsToMany(TriggerPoint, {
        as: 'TriggerTriggerPoints',
        through: Trigger,
        foreignKey: 'NextTriggerID',
        otherKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
