'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxTreeValidationOutcome', {
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
        denotesSuccess: {
            type: DataTypes.BOOLEAN,
            field: 'DenotesSuccess',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'TraxTreeValidationOutcome',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxTreeValidationOutcome = model.TraxTreeValidationOutcome;
    var TraxTreeValidationResult = model.TraxTreeValidationResult;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;
    var Trigger = model.Trigger;

    TraxTreeValidationOutcome.hasMany(TraxTreeValidationResult, {
        as: 'TraxTreeValidationResultTraxtreevalidationoutcomeFks',
        foreignKey: 'ValidationOutcomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationOutcome.belongsToMany(ApplicationContainer, {
        as: 'TraxTreeValidationResultApplicationContainers',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationOutcomeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationOutcome.belongsToMany(ApplicationPartyRole, {
        as: 'TraxTreeValidationResultApplicationPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationOutcomeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationOutcome.belongsToMany(ApplicationSecurity, {
        as: 'TraxTreeValidationResultApplicationSecurities',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationOutcomeID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationOutcome.belongsToMany(PartyRole, {
        as: 'TraxTreeValidationResultCreatedByPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationOutcomeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationOutcome.belongsToMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationResultValidationPlugins',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationOutcomeID',
        otherKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationOutcome.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationResultValidationSuites',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationOutcomeID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationOutcome.belongsToMany(Trigger, {
        as: 'TraxTreeValidationResultTriggers',
        through: TraxTreeValidationResult,
        foreignKey: 'ValidationOutcomeID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
