'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStatusType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationStatusCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationStatusCategoryTypeID',
            allowNull: false,
            references: {
                model: 'ApplicationStatusCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        quickDisplayCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'QuickDisplayCategoryTypeID',
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            field: 'Description',
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
        },
        retailDescription: {
            type: DataTypes.STRING(500),
            field: 'RetailDescription',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStatusType = model.ApplicationStatusType;
    var ApplicationCondition = model.ApplicationCondition;
    var ApplicationStageTypeApplicationStatusType = model.ApplicationStageTypeApplicationStatusType;
    var ApplicationStatusHistory = model.ApplicationStatusHistory;
    var ApplicationStatusRollbackJobType = model.ApplicationStatusRollbackJobType;
    var ApplicationStatusTraxJob = model.ApplicationStatusTraxJob;
    var ApplicationStatusTypeProductCategory = model.ApplicationStatusTypeProductCategory;
    var ApplicationStatusTypeProductCategoryLinkOrder = model.ApplicationStatusTypeProductCategoryLinkOrder;
    var ConditionTypeConfigurationApplicationStatusType = model.ConditionTypeConfigurationApplicationStatusType;
    var LoanTrackerApplicationStatusAllowableDocument = model.LoanTrackerApplicationStatusAllowableDocument;
    var ApplicationStatusCategoryType = model.ApplicationStatusCategoryType;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionType = model.ConditionType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var Loan = model.Loan;
    var ApplicationStageType = model.ApplicationStageType;
    var CrashReasonType = model.CrashReasonType;
    var ProductCategory = model.ProductCategory;

    ApplicationStatusType.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionApplicationstatustypeFks',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ApplicationStageTypeApplicationStatusType, {
        as: 'ApplicationStageTypeApplicationStatusTypeApplicationstatustypes',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ApplicationStatusHistory, {
        as: 'ApplicationStatusHistoryApplicationstatustypeFks',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ApplicationStatusRollbackJobType, {
        as: 'ApplicationStatusRollbackJobTypeApplicationstatustypeids',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ApplicationStatusTraxJob, {
        as: 'ApplicationStatusTraxJobApplicationstatustypeFks',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ApplicationStatusTypeProductCategory, {
        as: 'ProductCategoryApplicationstatustypeFks',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ApplicationStatusTypeProductCategoryLinkOrder, {
        as: 'ProductCategoryLinkOrderApplicationstatuses',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ApplicationStatusTypeProductCategoryLinkOrder, {
        as: 'ProductCategoryLinkOrderNextapplicationsts',
        foreignKey: 'NextApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(ConditionTypeConfigurationApplicationStatusType, {
        as: 'ConditionTypeConfigurationApplicationStatusTypeApplicationstats',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.hasMany(LoanTrackerApplicationStatusAllowableDocument, {
        as: 'LTApplicationStatusAllowableDocumentsApplicationstatuses',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsTo(ApplicationStatusCategoryType, {
        as: 'ApplicationStatusCategoryType',
        foreignKey: 'ApplicationStatusCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ApplicationStageType, {
        as: 'ApplicationStageTypeApplicationStatusTypeApplicationStageTypes',
        through: ApplicationStageTypeApplicationStatusType,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ApplicationStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationStatusHistoryApplicationContainers',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(CrashReasonType, {
        as: 'ApplicationStatusHistoryCrashReasonTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryCreatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryLastUpdatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusRollbackJobTypeProductCategories',
        through: ApplicationStatusRollbackJobType,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusRollbackJobTypeSubProductCategories',
        through: ApplicationStatusRollbackJobType,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusTraxJobProductCategories',
        through: ApplicationStatusTraxJob,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusTraxJobSubProductCategories',
        through: ApplicationStatusTraxJob,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusTypeProductCategoryProductCategories',
        through: ApplicationStatusTypeProductCategory,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusTypeProductCategoryLinkOrderNextApplicationStatusTypes',
        through: ApplicationStatusTypeProductCategoryLinkOrder,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'NextApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusTypeProductCategoryLinkOrderProductCategories',
        through: ApplicationStatusTypeProductCategoryLinkOrder,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusTypeProductCategoryLinkOrderApplicationStatusTypes',
        through: ApplicationStatusTypeProductCategoryLinkOrder,
        foreignKey: 'NextApplicationStatusTypeID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'ApplicationStatusTypeProductCategoryLinkOrderProductCategories',
        through: ApplicationStatusTypeProductCategoryLinkOrder,
        foreignKey: 'NextApplicationStatusTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationApplicationStatusTypeConditionTypeConfigurations',
        through: ConditionTypeConfigurationApplicationStatusType,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusType.belongsToMany(ProductCategory, {
        as: 'LoanTrackerApplicationStatusAllowableDocumentProductCategories',
        through: LoanTrackerApplicationStatusAllowableDocument,
        foreignKey: 'ApplicationStatusTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
