'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanTrackerConditionDisplayType', {
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
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'LoanTrackerConditionDisplayType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanTrackerConditionDisplayType = model.LoanTrackerConditionDisplayType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionVerificationRelationshipType = model.ConditionVerificationRelationshipType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var ConditionAutoVerificationStatusType = model.ConditionAutoVerificationStatusType;
    var ConditionCategoryType = model.ConditionCategoryType;
    var ConditionDisplayType = model.ConditionDisplayType;
    var ConditionLevelType = model.ConditionLevelType;
    var ApplicationStageType = model.ApplicationStageType;
    var ConditionTypeScannedDocumentAppliesToType = model.ConditionTypeScannedDocumentAppliesToType;
    var ConditionType = model.ConditionType;
    var PartyRole = model.PartyRole;
    var LoanTrackerActionType = model.LoanTrackerActionType;
    var LoanTrackerDocumentRequirementType = model.LoanTrackerDocumentRequirementType;
    var LoanTrackerDocumentUploadType = model.LoanTrackerDocumentUploadType;
    var LoanTrackerForm = model.LoanTrackerForm;
    var LoanTrackerToolTip = model.LoanTrackerToolTip;
    var ProductCategory = model.ProductCategory;
    var SubConditionLevelType = model.SubConditionLevelType;

    LoanTrackerConditionDisplayType.hasMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationLoantrackerconditiondisplaytypeFks',
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationInitialVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionLevelType, {
        as: 'ConditionTypeConfigurationConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ApplicationStageType, {
        as: 'ConditionTypeConfigurationConditionStageTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationCreatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationLastUpdatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(ProductCategory, {
        as: 'ConditionTypeConfigurationProductCategories',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerConditionDisplayType.belongsToMany(SubConditionLevelType, {
        as: 'ConditionTypeConfigurationSubConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        otherKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
