'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SubConditionLevelType', {
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
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'SubConditionLevelType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SubConditionLevelType = model.SubConditionLevelType;
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
    var LoanTrackerConditionDisplayType = model.LoanTrackerConditionDisplayType;
    var LoanTrackerDocumentRequirementType = model.LoanTrackerDocumentRequirementType;
    var LoanTrackerDocumentUploadType = model.LoanTrackerDocumentUploadType;
    var LoanTrackerForm = model.LoanTrackerForm;
    var LoanTrackerToolTip = model.LoanTrackerToolTip;
    var ProductCategory = model.ProductCategory;

    SubConditionLevelType.hasMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationSubconditionleveltypeFks',
        foreignKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationInitialVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionLevelType, {
        as: 'ConditionTypeConfigurationConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ApplicationStageType, {
        as: 'ConditionTypeConfigurationConditionStageTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationCreatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationLastUpdatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(LoanTrackerConditionDisplayType, {
        as: 'ConditionTypeConfigurationLoanTrackerConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SubConditionLevelType.belongsToMany(ProductCategory, {
        as: 'ConditionTypeConfigurationProductCategories',
        through: ConditionTypeConfiguration,
        foreignKey: 'SubConditionLevelTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
