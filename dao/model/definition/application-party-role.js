'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRole', {
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
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationPartyRoleTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleTypeID',
            allowNull: true,
            references: {
                model: 'ApplicationPartyRoleType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        nominatedBorrower: {
            type: DataTypes.BOOLEAN,
            field: 'NominatedBorrower',
            allowNull: true,
            defaultValue: false
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
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRole',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationCondition = model.ApplicationCondition;
    var ApplicationPartyRoleAncillary = model.ApplicationPartyRoleAncillary;
    var ApplicationPartyRoleHousehold = model.ApplicationPartyRoleHousehold;
    var ApplicationPartyRoleRelationship = model.ApplicationPartyRoleRelationship;
    var ApplicationSecurityOutgoingFinance = model.ApplicationSecurityOutgoingFinance;
    var CreditReport = model.CreditReport;
    var CreditReportRequired = model.CreditReportRequired;
    var DocumentOrderHistoryApplicationPartyRole = model.DocumentOrderHistoryApplicationPartyRole;
    var Employment = model.Employment;
    var Income = model.Income;
    var TraxDocumentGeneration = model.TraxDocumentGeneration;
    var TraxTreeValidationResult = model.TraxTreeValidationResult;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRoleType = model.ApplicationPartyRoleType;
    var PartyRole = model.PartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionType = model.ConditionType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var Loan = model.Loan;
    var Household = model.Household;
    var ApplicationPartyRoleRelationshipType = model.ApplicationPartyRoleRelationshipType;
    var CreditReportType = model.CreditReportType;
    var DocumentOrderHistory = model.DocumentOrderHistory;
    var CurrencyType = model.CurrencyType;
    var EmploymentBasisType = model.EmploymentBasisType;
    var EmploymentCategoryType = model.EmploymentCategoryType;
    var EmploymentStatusType = model.EmploymentStatusType;
    var FrequencyType = model.FrequencyType;
    var IncomeSourceType = model.IncomeSourceType;
    var TraxTreeValidationOutcome = model.TraxTreeValidationOutcome;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;
    var Trigger = model.Trigger;

    ApplicationPartyRole.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(ApplicationPartyRoleAncillary, {
        as: 'AncillaryApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(ApplicationPartyRoleHousehold, {
        as: 'HouseholdApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(ApplicationPartyRoleRelationship, {
        as: 'RelationshipChildapplicationpartyroleFks',
        foreignKey: 'ChildApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(ApplicationPartyRoleRelationship, {
        as: 'RelationshipParentapplicationpartyroleFks',
        foreignKey: 'ParentApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(ApplicationSecurityOutgoingFinance, {
        as: 'ApplicationSecurityOutgoingFinanceApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(CreditReport, {
        as: 'CreditReportApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(CreditReportRequired, {
        as: 'CreditReportRequiredApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DOHApplicationPartyRoleApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(Employment, {
        as: 'EmploymentApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(Income, {
        as: 'IncomeApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(TraxDocumentGeneration, {
        as: 'TraxDocumentGenerationApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.hasMany(TraxTreeValidationResult, {
        as: 'TraxTreeValidationResultApplicationpartyroleFks',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsTo(ApplicationPartyRoleType, {
        as: 'ApplicationPartyRoleType',
        foreignKey: 'ApplicationPartyRoleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsTo(PartyRole, {
        as: 'PartyRole',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(Household, {
        as: 'ApplicationPartyRoleHouseholdHouseholds',
        through: ApplicationPartyRoleHousehold,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationPartyRoleRelationshipType, {
        as: 'ApplicationPartyRoleRelationshipApplicationPartyRoleRelationshipTypes',
        through: ApplicationPartyRoleRelationship,
        foreignKey: 'ChildApplicationPartyRoleID',
        otherKey: 'ApplicationPartyRoleRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleRelationshipParentApplicationPartyRoles',
        through: ApplicationPartyRoleRelationship,
        foreignKey: 'ChildApplicationPartyRoleID',
        otherKey: 'ParentApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationPartyRoleRelationshipType, {
        as: 'ApplicationPartyRoleRelationshipApplicationPartyRoleRelationshipTypes',
        through: ApplicationPartyRoleRelationship,
        foreignKey: 'ParentApplicationPartyRoleID',
        otherKey: 'ApplicationPartyRoleRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleRelationshipChildApplicationPartyRoles',
        through: ApplicationPartyRoleRelationship,
        foreignKey: 'ParentApplicationPartyRoleID',
        otherKey: 'ChildApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationSecurityOutgoingFinanceApplicationSecurities',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceCreatedByPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceLastUpdatedByPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'CreditReportCreatedByPartyRoles',
        through: CreditReport,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(CreditReportType, {
        as: 'CreditReportCreditReportTypes',
        through: CreditReport,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreditReportTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'CreditReportLastUpdatedByPartyRoles',
        through: CreditReport,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(DocumentOrderHistory, {
        as: 'DocumentOrderHistoryApplicationPartyRoleDocumentOrderHistories',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'EmploymentCreatedByPartyRoles',
        through: Employment,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(CurrencyType, {
        as: 'EmploymentCurrencyTypes',
        through: Employment,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(EmploymentBasisType, {
        as: 'EmploymentBasisTypes',
        through: Employment,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(EmploymentCategoryType, {
        as: 'EmploymentCategoryTypes',
        through: Employment,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(EmploymentStatusType, {
        as: 'EmploymentStatusTypes',
        through: Employment,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'EmploymentLastUpdatedByPartyRoles',
        through: Employment,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'IncomeCreatedByPartyRoles',
        through: Income,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(CurrencyType, {
        as: 'IncomeCurrencyTypes',
        through: Income,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(FrequencyType, {
        as: 'IncomeFrequencyTypes',
        through: Income,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'IncomeLastUpdatedByPartyRoles',
        through: Income,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(IncomeSourceType, {
        as: 'IncomeSourceTypes',
        through: Income,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'SourceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationContainer, {
        as: 'TraxDocumentGenerationApplicationContainers',
        through: TraxDocumentGeneration,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationSecurity, {
        as: 'TraxDocumentGenerationApplicationSecurities',
        through: TraxDocumentGeneration,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationContainer, {
        as: 'TraxTreeValidationResultApplicationContainers',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(ApplicationSecurity, {
        as: 'TraxTreeValidationResultApplicationSecurities',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'TraxTreeValidationResultCreatedByPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(TraxTreeValidationOutcome, {
        as: 'TraxTreeValidationResultValidationOutcomes',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ValidationOutcomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationResultValidationPlugins',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationResultValidationSuites',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRole.belongsToMany(Trigger, {
        as: 'TraxTreeValidationResultTriggers',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationPartyRoleID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
