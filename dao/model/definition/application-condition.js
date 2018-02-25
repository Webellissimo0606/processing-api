'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationCondition', {
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
            allowNull: true,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionTypeConfigurationID: {
            type: DataTypes.INTEGER,
            field: 'ConditionTypeConfigurationID',
            allowNull: true,
            references: {
                model: 'ConditionTypeConfiguration',
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
        conditionVerificationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionVerificationStatusTypeID',
            allowNull: false,
            references: {
                model: 'ConditionVerificationStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionComments: {
            type: DataTypes.STRING(1000),
            field: 'ConditionComments',
            allowNull: true
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: true,
            references: {
                model: 'Loan',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: true,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationSecurityID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationSecurityID',
            allowNull: true,
            references: {
                model: 'ApplicationSecurity',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        valuationReportID: {
            type: DataTypes.INTEGER,
            field: 'ValuationReportID',
            allowNull: true
        },
        applicationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationStatusTypeID',
            allowNull: true,
            references: {
                model: 'ApplicationStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        approvalToPublish: {
            type: DataTypes.DATE,
            field: 'ApprovalToPublish',
            allowNull: true
        },
        approvalToPublishByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApprovalToPublishByPartyRoleID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationCondition',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationCondition = model.ApplicationCondition;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationStatusType = model.ApplicationStatusType;
    var PartyRole = model.PartyRole;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionType = model.ConditionType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var Loan = model.Loan;

    ApplicationCondition.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(ApplicationSecurity, {
        as: 'ApplicationSecurity',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(PartyRole, {
        as: 'ApprovalToPublishByPartyRole',
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfiguration',
        foreignKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(ConditionType, {
        as: 'ConditionType',
        foreignKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(ConditionVerificationStatusType, {
        as: 'ConditionVerificationStatusType',
        foreignKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationCondition.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
