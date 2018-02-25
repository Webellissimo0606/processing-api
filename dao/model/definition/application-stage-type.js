'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStageType', {
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        conditionStageCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionStageCategoryTypeID',
            allowNull: true,
            references: {
                model: 'ConditionStageCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationStageType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStageType = model.ApplicationStageType;
    var ApplicationStageTypeApplicationStatusType = model.ApplicationStageTypeApplicationStatusType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var TriggerPointConditionStageType = model.TriggerPointConditionStageType;
    var ConditionStageCategoryType = model.ConditionStageCategoryType;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ConditionVerificationRelationshipType = model.ConditionVerificationRelationshipType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var ConditionAutoVerificationStatusType = model.ConditionAutoVerificationStatusType;
    var ConditionCategoryType = model.ConditionCategoryType;
    var ConditionDisplayType = model.ConditionDisplayType;
    var ConditionLevelType = model.ConditionLevelType;
    var ConditionTypeScannedDocumentAppliesToType = model.ConditionTypeScannedDocumentAppliesToType;
    var ConditionType = model.ConditionType;
    var PartyRole = model.PartyRole;
    var LoanTrackerActionType = model.LoanTrackerActionType;
    var LoanTrackerConditionDisplayType = model.LoanTrackerConditionDisplayType;
    var LoanTrackerDocumentRequirementType = model.LoanTrackerDocumentRequirementType;
    var LoanTrackerDocumentUploadType = model.LoanTrackerDocumentUploadType;
    var LoanTrackerForm = model.LoanTrackerForm;
    var LoanTrackerToolTip = model.LoanTrackerToolTip;
    var ProductCategory = model.ProductCategory;
    var SubConditionLevelType = model.SubConditionLevelType;
    var TriggerPoint = model.TriggerPoint;

    ApplicationStageType.hasMany(ApplicationStageTypeApplicationStatusType, {
        as: 'ApplicationStatusTypeApplicationstages',
        foreignKey: 'ApplicationStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.hasMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationConditionstagetypeFks',
        foreignKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.hasMany(TriggerPointConditionStageType, {
        as: 'TriggerPointConditionStageTypeConditionstagetypeFks',
        foreignKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsTo(ConditionStageCategoryType, {
        as: 'ConditionStageCategoryType',
        foreignKey: 'ConditionStageCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStageTypeApplicationStatusTypeApplicationStatusTypes',
        through: ApplicationStageTypeApplicationStatusType,
        foreignKey: 'ApplicationStageTypeID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationInitialVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionLevelType, {
        as: 'ConditionTypeConfigurationConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationCreatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationLastUpdatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(LoanTrackerConditionDisplayType, {
        as: 'ConditionTypeConfigurationLoanTrackerConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(ProductCategory, {
        as: 'ConditionTypeConfigurationProductCategories',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(SubConditionLevelType, {
        as: 'ConditionTypeConfigurationSubConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageType.belongsToMany(TriggerPoint, {
        as: 'TriggerPointConditionStageTypeTriggerPoints',
        through: TriggerPointConditionStageType,
        foreignKey: 'ConditionStageTypeID',
        otherKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
