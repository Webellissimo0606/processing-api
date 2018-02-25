'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionTypeConfiguration', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        productCategoryID: {
            type: DataTypes.INTEGER,
            field: 'ProductCategoryID',
            allowNull: false,
            references: {
                model: 'ProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionTypeID',
            allowNull: false,
            references: {
                model: 'ConditionType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionCategoryTypeID',
            allowNull: true,
            references: {
                model: 'ConditionCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionStageTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionStageTypeID',
            allowNull: false,
            references: {
                model: 'ApplicationStageType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionLevelTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionLevelTypeID',
            allowNull: false,
            references: {
                model: 'ConditionLevelType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        subConditionLevelTypeID: {
            type: DataTypes.INTEGER,
            field: 'SubConditionLevelTypeID',
            allowNull: true,
            references: {
                model: 'SubConditionLevelType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionDisplayTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionDisplayTypeID',
            allowNull: false,
            references: {
                model: 'ConditionDisplayType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanTrackerConditionDisplayTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerConditionDisplayTypeID',
            allowNull: true,
            references: {
                model: 'LoanTrackerConditionDisplayType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        scannedDocumentCode: {
            type: DataTypes.STRING(15),
            field: 'ScannedDocumentCode',
            allowNull: true
        },
        loanTrackerActionTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerActionTypeID',
            allowNull: true,
            references: {
                model: 'LoanTrackerActionType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanTrackerFormID: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerFormID',
            allowNull: true,
            references: {
                model: 'LoanTrackerForm',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanTrackerDocumentUploadTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerDocumentUploadTypeID',
            allowNull: true,
            references: {
                model: 'LoanTrackerDocumentUploadType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanTrackerToolTipID: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerToolTipID',
            allowNull: true,
            references: {
                model: 'LoanTrackerToolTip',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionAutoVerificationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionAutoVerificationStatusTypeID',
            allowNull: true,
            references: {
                model: 'ConditionAutoVerificationStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        appliesToPrimaryEntityOnly: {
            type: DataTypes.BOOLEAN,
            field: 'AppliesToPrimaryEntityOnly',
            allowNull: true
        },
        scannedDocumentCodeExtension: {
            type: DataTypes.STRING(100),
            field: 'ScannedDocumentCodeExtension',
            allowNull: true
        },
        conditionTypeScannedDocumentAppliesToTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionTypeScannedDocumentAppliesToTypeID',
            allowNull: true,
            references: {
                model: 'ConditionTypeScannedDocumentAppliesToType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
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
        },
        loanTrackerDocumentRequirementTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerDocumentRequirementTypeID',
            allowNull: true,
            references: {
                model: 'LoanTrackerDocumentRequirementType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanTrackerDisplayOrder: {
            type: DataTypes.INTEGER,
            field: 'LoanTrackerDisplayOrder',
            allowNull: true
        },
        loanTrackerUploadDescription: {
            type: DataTypes.STRING(50),
            field: 'LoanTrackerUploadDescription',
            allowNull: true
        },
        overrideRegardlessOfLatestUser: {
            type: DataTypes.BOOLEAN,
            field: 'OverrideRegardlessOfLatestUser',
            allowNull: true
        },
        thirdPartyAvailability: {
            type: DataTypes.BOOLEAN,
            field: 'ThirdPartyAvailability',
            allowNull: true
        },
        initialVerificationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'InitialVerificationStatusTypeID',
            allowNull: true,
            references: {
                model: 'ConditionVerificationStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionVerificationRelationshipTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionVerificationRelationshipTypeID',
            allowNull: true,
            references: {
                model: 'ConditionVerificationRelationshipType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ConditionTypeConfiguration',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ApplicationCondition = model.ApplicationCondition;
    var ConditionTypeConfigurationApplicationStatusType = model.ConditionTypeConfigurationApplicationStatusType;
    var ConditionTypeConfigurationRelationship = model.ConditionTypeConfigurationRelationship;
    var ConditionTypeConfigurationTraxJobType = model.ConditionTypeConfigurationTraxJobType;
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
    var SubConditionLevelType = model.SubConditionLevelType;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationStatusType = model.ApplicationStatusType;
    var Loan = model.Loan;
    var ConditionTypeRelationshipType = model.ConditionTypeRelationshipType;

    ConditionTypeConfiguration.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionConditiontypeconfigurationFks',
        foreignKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.hasMany(ConditionTypeConfigurationApplicationStatusType, {
        as: 'ApplicationStatusTypeConditiontypecos',
        foreignKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.hasMany(ConditionTypeConfigurationRelationship, {
        as: 'ConditionTypeRelationshipTypeChildconditionconfigurationtypeids',
        foreignKey: 'ChildConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.hasMany(ConditionTypeConfigurationRelationship, {
        as: 'ConditionTypeRelationshipTypeParentconditionconfigurationtypeis',
        foreignKey: 'ParentConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.hasMany(ConditionTypeConfigurationTraxJobType, {
        as: 'TraxJobTypeConditiontypeconfiguratios',
        foreignKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionVerificationRelationshipType, {
        as: 'ConditionVerificationRelationshipType',
        foreignKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionVerificationStatusType, {
        as: 'InitialVerificationStatusType',
        foreignKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionAutoVerificationStatusType, {
        as: 'ConditionAutoVerificationStatusType',
        foreignKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionCategoryType, {
        as: 'ConditionCategoryType',
        foreignKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionDisplayType, {
        as: 'ConditionDisplayType',
        foreignKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionLevelType, {
        as: 'ConditionLevelType',
        foreignKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ApplicationStageType, {
        as: 'ConditionStageType',
        foreignKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeScannedDocumentAppliesToType',
        foreignKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ConditionType, {
        as: 'ConditionType',
        foreignKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(LoanTrackerActionType, {
        as: 'LoanTrackerActionType',
        foreignKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(LoanTrackerConditionDisplayType, {
        as: 'LoanTrackerConditionDisplayType',
        foreignKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(LoanTrackerDocumentRequirementType, {
        as: 'LoanTrackerDocumentRequirementType',
        foreignKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(LoanTrackerDocumentUploadType, {
        as: 'LoanTrackerDocumentUploadType',
        foreignKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(LoanTrackerForm, {
        as: 'LoanTrackerForm',
        foreignKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(LoanTrackerToolTip, {
        as: 'LoanTrackerToolTip',
        foreignKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsTo(SubConditionLevelType, {
        as: 'SubConditionLevelType',
        foreignKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ApplicationStatusType, {
        as: 'ConditionTypeConfigurationApplicationStatusTypeApplicationStatusTypes',
        through: ConditionTypeConfigurationApplicationStatusType,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ConditionTypeRelationshipType, {
        as: 'ConditionTypeConfigurationRelationshipConditionTypeRelationshipTypes',
        through: ConditionTypeConfigurationRelationship,
        foreignKey: 'ChildConditionTypeConfigurationID',
        otherKey: 'ConditionTypeRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationRelationshipParentConditionTypeConfigurations',
        through: ConditionTypeConfigurationRelationship,
        foreignKey: 'ChildConditionTypeConfigurationID',
        otherKey: 'ParentConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationRelationshipChildConditionTypeConfigurations',
        through: ConditionTypeConfigurationRelationship,
        foreignKey: 'ParentConditionTypeConfigurationID',
        otherKey: 'ChildConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ConditionTypeRelationshipType, {
        as: 'ConditionTypeConfigurationRelationshipConditionTypeRelationshipTypes',
        through: ConditionTypeConfigurationRelationship,
        foreignKey: 'ParentConditionTypeConfigurationID',
        otherKey: 'ConditionTypeRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfiguration.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationTraxJobTypeConditionVerificationStatusTypes',
        through: ConditionTypeConfigurationTraxJobType,
        foreignKey: 'ConditionTypeConfigurationID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
