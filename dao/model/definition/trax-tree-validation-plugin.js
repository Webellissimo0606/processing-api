'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxTreeValidationPlugin', {
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
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(100),
            field: 'Description',
            allowNull: true
        },
        qualifiedName: {
            type: DataTypes.STRING(512),
            field: 'QualifiedName',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        },
        validationFacetID: {
            type: DataTypes.INTEGER,
            field: 'ValidationFacetID',
            allowNull: true,
            references: {
                model: 'TraxTreeValidationFacet',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        validationSourceID: {
            type: DataTypes.INTEGER,
            field: 'ValidationSourceID',
            allowNull: true,
            references: {
                model: 'TraxTreeValidationSource',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'TraxTreeValidationPlugin',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationResult = model.TraxTreeValidationResult;
    var TraxTreeValidationSuitePlugin = model.TraxTreeValidationSuitePlugin;
    var TraxTreeValidationFacet = model.TraxTreeValidationFacet;
    var TraxTreeValidationSource = model.TraxTreeValidationSource;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;
    var TraxTreeValidationOutcome = model.TraxTreeValidationOutcome;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;
    var Trigger = model.Trigger;

    TraxTreeValidationPlugin.hasMany(TraxTreeValidationResult, {
        as: 'TraxTreeValidationResultTraxtreevalidationpluginFks',
        foreignKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.hasMany(TraxTreeValidationSuitePlugin, {
        as: 'TraxTreeValidationSuitePluginValidationpluginFks',
        foreignKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsTo(TraxTreeValidationFacet, {
        as: 'ValidationFacet',
        foreignKey: 'ValidationFacetID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsTo(TraxTreeValidationSource, {
        as: 'ValidationSource',
        foreignKey: 'ValidationSourceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(ApplicationContainer, {
        as: 'TraxTreeValidationResultApplicationContainers',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationPluginID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(ApplicationPartyRole, {
        as: 'TraxTreeValidationResultApplicationPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationPluginID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(ApplicationSecurity, {
        as: 'TraxTreeValidationResultApplicationSecurities',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationPluginID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(PartyRole, {
        as: 'TraxTreeValidationResultCreatedByPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationPluginID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(TraxTreeValidationOutcome, {
        as: 'TraxTreeValidationResultValidationOutcomes',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationPluginID',
        otherKey: 'ValidationOutcomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationResultValidationSuites',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationPluginID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(Trigger, {
        as: 'TraxTreeValidationResultTriggers',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationPluginID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationPlugin.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationSuitePluginValidationSuites',
        through: TraxTreeValidationSuitePlugin,
        foreignKey: 'ValidationPluginID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
