'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionVerificationStatusType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        loanTrackerConditionVerificationStageID: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerConditionVerificationStageID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ConditionVerificationStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var ApplicationCondition = model.ApplicationCondition;
    var ConditionAutoVerificationStatusType = model.ConditionAutoVerificationStatusType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionTypeConfigurationTraxJobType = model.ConditionTypeConfigurationTraxJobType;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationStatusType = model.ApplicationStatusType;
    var PartyRole = model.PartyRole;
    var ConditionType = model.ConditionType;
    var Loan = model.Loan;
    var ConditionVerificationRelationshipType = model.ConditionVerificationRelationshipType;
    var ConditionCategoryType = model.ConditionCategoryType;
    var ConditionDisplayType = model.ConditionDisplayType;
    var ConditionLevelType = model.ConditionLevelType;
    var ApplicationStageType = model.ApplicationStageType;
    var ConditionTypeScannedDocumentAppliesToType = model.ConditionTypeScannedDocumentAppliesToType;
    var LoanTrackerActionType = model.LoanTrackerActionType;
    var LoanTrackerConditionDisplayType = model.LoanTrackerConditionDisplayType;
    var LoanTrackerDocumentRequirementType = model.LoanTrackerDocumentRequirementType;
    var LoanTrackerDocumentUploadType = model.LoanTrackerDocumentUploadType;
    var LoanTrackerForm = model.LoanTrackerForm;
    var LoanTrackerToolTip = model.LoanTrackerToolTip;
    var ProductCategory = model.ProductCategory;
    var SubConditionLevelType = model.SubConditionLevelType;

    ConditionVerificationStatusType.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionConditionverificationstatustypeFks',
        foreignKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.hasMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionAutoVerificationStatusTypeConditionverificationstatuses',
        foreignKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.hasMany(ConditionTypeConfiguration, {
        as: 'CTCInitialverificationstatustypeFks',
        foreignKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.hasMany(ConditionTypeConfigurationTraxJobType, {
        as: 'ConditionTypeConfigurationTraxJobTypeConditionverificationstats',
        foreignKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionLevelType, {
        as: 'ConditionTypeConfigurationConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ApplicationStageType, {
        as: 'ConditionTypeConfigurationConditionStageTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationCreatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationLastUpdatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(LoanTrackerConditionDisplayType, {
        as: 'ConditionTypeConfigurationLoanTrackerConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ProductCategory, {
        as: 'ConditionTypeConfigurationProductCategories',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(SubConditionLevelType, {
        as: 'ConditionTypeConfigurationSubConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'InitialVerificationStatusTypeID',
        otherKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionVerificationStatusType.belongsToMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationTraxJobTypeConditionTypeConfigurations',
        through: ConditionTypeConfigurationTraxJobType,
        foreignKey: 'ConditionVerificationStatusTypeID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
