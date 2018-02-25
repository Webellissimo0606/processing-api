'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionLevelType', {
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
        tableName: 'ConditionLevelType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionLevelType = model.ConditionLevelType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionVerificationRelationshipType = model.ConditionVerificationRelationshipType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var ConditionAutoVerificationStatusType = model.ConditionAutoVerificationStatusType;
    var ConditionCategoryType = model.ConditionCategoryType;
    var ConditionDisplayType = model.ConditionDisplayType;
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
    var SubConditionLevelType = model.SubConditionLevelType;

    ConditionLevelType.hasMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationConditionleveltypeFks',
        foreignKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationInitialVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ApplicationStageType, {
        as: 'ConditionTypeConfigurationConditionStageTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationCreatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationLastUpdatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(LoanTrackerConditionDisplayType, {
        as: 'ConditionTypeConfigurationLoanTrackerConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(ProductCategory, {
        as: 'ConditionTypeConfigurationProductCategories',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionLevelType.belongsToMany(SubConditionLevelType, {
        as: 'ConditionTypeConfigurationSubConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'ConditionLevelTypeID',
        otherKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
