'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationSecurity', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false,
            references: {
                model: 'Security',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationSecurity',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationCondition = model.ApplicationCondition;
    var ApplicationSecurityOutgoingFinance = model.ApplicationSecurityOutgoingFinance;
    var EquipmentFinanceSecuritySerialLocation = model.EquipmentFinanceSecuritySerialLocation;
    var Insurance = model.Insurance;
    var SecuritySerialLocation = model.SecuritySerialLocation;
    var TraxDocumentGeneration = model.TraxDocumentGeneration;
    var TraxTreeValidationResult = model.TraxTreeValidationResult;
    var Valuation = model.Valuation;
    var ApplicationContainer = model.ApplicationContainer;
    var Security = model.Security;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationStatusType = model.ApplicationStatusType;
    var PartyRole = model.PartyRole;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionType = model.ConditionType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var Loan = model.Loan;
    var PremisesLocationType = model.PremisesLocationType;
    var InsuranceType = model.InsuranceType;
    var TraxTreeValidationOutcome = model.TraxTreeValidationOutcome;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;
    var Trigger = model.Trigger;
    var ValuationType = model.ValuationType;

    ApplicationSecurity.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.hasMany(ApplicationSecurityOutgoingFinance, {
        as: 'OutgoingFinanceApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.hasMany(EquipmentFinanceSecuritySerialLocation, {
        as: 'EquipmentFinanceSecuritySerialLocationApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.hasMany(Insurance, {
        as: 'InsuranceApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.hasMany(SecuritySerialLocation, {
        as: 'SecuritySerialLocationApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.hasMany(TraxDocumentGeneration, {
        as: 'TraxDocumentGenerationApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.hasMany(TraxTreeValidationResult, {
        as: 'TraxTreeValidationResultApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.hasMany(Valuation, {
        as: 'ValuationApplicationsecurityFks',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsTo(Security, {
        as: 'Security',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceApplicationPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceCreatedByPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceLastUpdatedByPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecuritySerialLocationCreatedByPartyRoles',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecuritySerialLocationLastUpdatedByPartyRoles',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PremisesLocationType, {
        as: 'EquipmentFinanceSecuritySerialLocationPremisesLocationTypes',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'InsuranceCreatedByPartyRoles',
        through: Insurance,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(InsuranceType, {
        as: 'InsuranceInsuranceTypes',
        through: Insurance,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'InsuranceLastUpdatedByPartyRoles',
        through: Insurance,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'SecuritySerialLocationCreatedByPartyRoles',
        through: SecuritySerialLocation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'SecuritySerialLocationLastUpdatedByPartyRoles',
        through: SecuritySerialLocation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PremisesLocationType, {
        as: 'SecuritySerialLocationPremisesLocationTypes',
        through: SecuritySerialLocation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationContainer, {
        as: 'TraxDocumentGenerationApplicationContainers',
        through: TraxDocumentGeneration,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationPartyRole, {
        as: 'TraxDocumentGenerationApplicationPartyRoles',
        through: TraxDocumentGeneration,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationContainer, {
        as: 'TraxTreeValidationResultApplicationContainers',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ApplicationPartyRole, {
        as: 'TraxTreeValidationResultApplicationPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'TraxTreeValidationResultCreatedByPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(TraxTreeValidationOutcome, {
        as: 'TraxTreeValidationResultValidationOutcomes',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ValidationOutcomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationResultValidationPlugins',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationResultValidationSuites',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(Trigger, {
        as: 'TraxTreeValidationResultTriggers',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'ValuationCreatedByPartyRoles',
        through: Valuation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(PartyRole, {
        as: 'ValuationLastUpdatedByPartyRoles',
        through: Valuation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurity.belongsToMany(ValuationType, {
        as: 'ValuationValuationTypes',
        through: Valuation,
        foreignKey: 'ApplicationSecurityID',
        otherKey: 'ValuationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
