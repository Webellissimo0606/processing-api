'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ProductCategory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        productContainerID: {
            type: DataTypes.INTEGER,
            field: 'ProductContainerID',
            allowNull: false,
            references: {
                model: 'ProductContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        alternateDisplayName: {
            type: DataTypes.STRING(100),
            field: 'AlternateDisplayName',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ProductCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ProductCategory = model.ProductCategory;
    var AccessoryCategoryTypeProductCategory = model.AccessoryCategoryTypeProductCategory;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationStatusRollbackJobType = model.ApplicationStatusRollbackJobType;
    var ApplicationStatusTraxJob = model.ApplicationStatusTraxJob;
    var ApplicationStatusTypeProductCategory = model.ApplicationStatusTypeProductCategory;
    var ApplicationStatusTypeProductCategoryLinkOrder = model.ApplicationStatusTypeProductCategoryLinkOrder;
    var AutoAssessmentProductCategoryPolicyTypeRuleType = model.AutoAssessmentProductCategoryPolicyTypeRuleType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionTypeProductCategory = model.ConditionTypeProductCategory;
    var FeeTypeProductCategory = model.FeeTypeProductCategory;
    var FinalApprovalProcessTypeProductCategoryType = model.FinalApprovalProcessTypeProductCategoryType;
    var InsuranceTypeProductCategory = model.InsuranceTypeProductCategory;
    var LoanPurposeTypeProductCategory = model.LoanPurposeTypeProductCategory;
    var LoanPurposeTypeTraxJobType = model.LoanPurposeTypeTraxJobType;
    var LoanTrackerApplicationStatusAllowableDocument = model.LoanTrackerApplicationStatusAllowableDocument;
    var ProductContainer = model.ProductContainer;
    var AccessoryCategoryType = model.AccessoryCategoryType;
    var PartyRole = model.PartyRole;
    var ApplicationStatusType = model.ApplicationStatusType;
    var AutoAssessmentPolicyType = model.AutoAssessmentPolicyType;
    var AutoAssessmentRuleType = model.AutoAssessmentRuleType;
    var Trigger = model.Trigger;
    var ConditionVerificationRelationshipType = model.ConditionVerificationRelationshipType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var ConditionAutoVerificationStatusType = model.ConditionAutoVerificationStatusType;
    var ConditionCategoryType = model.ConditionCategoryType;
    var ConditionDisplayType = model.ConditionDisplayType;
    var ConditionLevelType = model.ConditionLevelType;
    var ApplicationStageType = model.ApplicationStageType;
    var ConditionTypeScannedDocumentAppliesToType = model.ConditionTypeScannedDocumentAppliesToType;
    var ConditionType = model.ConditionType;
    var LoanTrackerActionType = model.LoanTrackerActionType;
    var LoanTrackerConditionDisplayType = model.LoanTrackerConditionDisplayType;
    var LoanTrackerDocumentRequirementType = model.LoanTrackerDocumentRequirementType;
    var LoanTrackerDocumentUploadType = model.LoanTrackerDocumentUploadType;
    var LoanTrackerForm = model.LoanTrackerForm;
    var LoanTrackerToolTip = model.LoanTrackerToolTip;
    var SubConditionLevelType = model.SubConditionLevelType;
    var FeeType = model.FeeType;
    var FrequencyType = model.FrequencyType;
    var FinalApprovalProcessType = model.FinalApprovalProcessType;
    var InsuranceType = model.InsuranceType;
    var LoanPurposeType = model.LoanPurposeType;

    ProductCategory.hasMany(AccessoryCategoryTypeProductCategory, {
        as: 'AccessoryCategoryTypeProductCategoryProductcategoryFks',
        foreignKey: 'ProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ApplicationContainer, {
        as: 'ApplicationContainerProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ApplicationStatusRollbackJobType, {
        as: 'ApplicationStatusRollbackJobTypeProductcategories',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ApplicationStatusRollbackJobType, {
        as: 'ApplicationStatusRollbackJobTypeSubproductcategories',
        foreignKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ApplicationStatusTraxJob, {
        as: 'ApplicationStatusTraxJobProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ApplicationStatusTraxJob, {
        as: 'ApplicationStatusTraxJobSubproductcategoryFks',
        foreignKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ApplicationStatusTypeProductCategory, {
        as: 'ApplicationStatusTypeProductCategoryProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ApplicationStatusTypeProductCategoryLinkOrder, {
        as: 'ApplicationStatusTypeProductCategoryLinkOrderProductcategoryFs',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(AutoAssessmentProductCategoryPolicyTypeRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeProductcategories',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(ConditionTypeProductCategory, {
        as: 'ConditionTypeProductCategoryProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(FeeTypeProductCategory, {
        as: 'FeeTypeProductCategoryProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(FinalApprovalProcessTypeProductCategoryType, {
        as: 'FinalApprovalProcessTypeProductCategoryTypePcFks',
        foreignKey: 'ProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(FinalApprovalProcessTypeProductCategoryType, {
        as: 'FinalApprovalProcessTypeProductCategoryTypeSpcFks',
        foreignKey: 'SubProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(InsuranceTypeProductCategory, {
        as: 'InsuranceTypeProductCategoryProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(InsuranceTypeProductCategory, {
        as: 'InsuranceTypeProductCategorySubproductcategoryFks',
        foreignKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(LoanPurposeTypeProductCategory, {
        as: 'LoanPurposeTypeProductCategoryProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(LoanPurposeTypeTraxJobType, {
        as: 'LoanPurposeTypeTraxJobTypeProductcategoryFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.hasMany(LoanTrackerApplicationStatusAllowableDocument, {
        as: 'LTApplicationStatusAllowableDocumentsPcFks',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsTo(ProductContainer, {
        as: 'ProductContainer',
        foreignKey: 'ProductContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(AccessoryCategoryType, {
        as: 'AccessoryCategoryTypeProductCategoryAccessoryCategoryTypes',
        through: AccessoryCategoryTypeProductCategory,
        foreignKey: 'ProductCategoryTypeID',
        otherKey: 'AccessoryCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(PartyRole, {
        as: 'ApplicationContainerCreatedByPartyRoles',
        through: ApplicationContainer,
        foreignKey: 'ProductCategoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusRollbackJobTypeApplicationStatusTypes',
        through: ApplicationStatusRollbackJobType,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusRollbackJobTypeSubProductCategories',
        through: ApplicationStatusRollbackJobType,
        foreignKey: 'ProductCategoryID',
        otherKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusRollbackJobTypeApplicationStatusTypes',
        through: ApplicationStatusRollbackJobType,
        foreignKey: 'SubProductCategoryID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusRollbackJobTypeProductCategories',
        through: ApplicationStatusRollbackJobType,
        foreignKey: 'SubProductCategoryID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusTraxJobApplicationStatusTypes',
        through: ApplicationStatusTraxJob,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusTraxJobSubProductCategories',
        through: ApplicationStatusTraxJob,
        foreignKey: 'ProductCategoryID',
        otherKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusTraxJobApplicationStatusTypes',
        through: ApplicationStatusTraxJob,
        foreignKey: 'SubProductCategoryID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusTraxJobProductCategories',
        through: ApplicationStatusTraxJob,
        foreignKey: 'SubProductCategoryID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusTypeProductCategoryApplicationStatusTypes',
        through: ApplicationStatusTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusTypeProductCategoryLinkOrderApplicationStatusTypes',
        through: ApplicationStatusTypeProductCategoryLinkOrder,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusTypeProductCategoryLinkOrderNextApplicationStatusTypes',
        through: ApplicationStatusTypeProductCategoryLinkOrder,
        foreignKey: 'ProductCategoryID',
        otherKey: 'NextApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(AutoAssessmentPolicyType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoAssessmentPolicyTypes',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'ProductCategoryID',
        otherKey: 'AutoAssessmentPolicyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(AutoAssessmentRuleType, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeAutoAssessmentRuleTypes',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'ProductCategoryID',
        otherKey: 'AutoAssessmentRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(Trigger, {
        as: 'AutoAssessmentProductCategoryPolicyTypeRuleTypeTriggers',
        through: AutoAssessmentProductCategoryPolicyTypeRuleType,
        foreignKey: 'ProductCategoryID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationInitialVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionLevelType, {
        as: 'ConditionTypeConfigurationConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStageType, {
        as: 'ConditionTypeConfigurationConditionStageTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationCreatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationLastUpdatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanTrackerConditionDisplayType, {
        as: 'ConditionTypeConfigurationLoanTrackerConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(SubConditionLevelType, {
        as: 'ConditionTypeConfigurationSubConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ProductCategoryID',
        otherKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ConditionType, {
        as: 'ConditionTypeProductCategoryConditionTypes',
        through: ConditionTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryCreatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(FeeType, {
        as: 'FeeTypeProductCategoryFeeTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(FrequencyType, {
        as: 'FeeTypeProductCategoryFrequencyTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryLastUpdatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(FinalApprovalProcessType, {
        as: 'FinalApprovalProcessTypeProductCategoryTypeFinalApprovalProcessTypes',
        through: FinalApprovalProcessTypeProductCategoryType,
        foreignKey: 'ProductCategoryTypeID',
        otherKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'FinalApprovalProcessTypeProductCategoryTypeSubProductCategoryTypes',
        through: FinalApprovalProcessTypeProductCategoryType,
        foreignKey: 'ProductCategoryTypeID',
        otherKey: 'SubProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(FinalApprovalProcessType, {
        as: 'FinalApprovalProcessTypeProductCategoryTypeFinalApprovalProcessTypes',
        through: FinalApprovalProcessTypeProductCategoryType,
        foreignKey: 'SubProductCategoryTypeID',
        otherKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'FinalApprovalProcessTypeProductCategoryTypeProductCategoryTypes',
        through: FinalApprovalProcessTypeProductCategoryType,
        foreignKey: 'SubProductCategoryTypeID',
        otherKey: 'ProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(InsuranceType, {
        as: 'InsuranceTypeProductCategoryInsuranceTypes',
        through: InsuranceTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'InsuranceTypeProductCategorySubProductCategories',
        through: InsuranceTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(InsuranceType, {
        as: 'InsuranceTypeProductCategoryInsuranceTypes',
        through: InsuranceTypeProductCategory,
        foreignKey: 'SubProductCategoryID',
        otherKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ProductCategory, {
        as: 'InsuranceTypeProductCategoryProductCategories',
        through: InsuranceTypeProductCategory,
        foreignKey: 'SubProductCategoryID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanPurposeType, {
        as: 'LoanPurposeTypeProductCategoryLoanPurposeTypes',
        through: LoanPurposeTypeProductCategory,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(LoanPurposeType, {
        as: 'LoanPurposeTypeTraxJobTypeLoanPurposeTypes',
        through: LoanPurposeTypeTraxJobType,
        foreignKey: 'ProductCategoryID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ProductCategory.belongsToMany(ApplicationStatusType, {
        as: 'LoanTrackerApplicationStatusAllowableDocumentApplicationStatusTypes',
        through: LoanTrackerApplicationStatusAllowableDocument,
        foreignKey: 'ProductCategoryID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
