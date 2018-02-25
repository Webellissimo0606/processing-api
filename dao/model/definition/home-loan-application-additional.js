'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('HomeLoanApplicationAdditional', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            primaryKey: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        applicationTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationTypeID',
            allowNull: false
        },
        brokerageRequired: {
            type: DataTypes.BOOLEAN,
            field: 'BrokerageRequired',
            allowNull: false,
            defaultValue: true
        },
        brokerageAmount: {
            type: DataTypes.DECIMAL(10, 2),
            field: 'BrokerageAmount',
            allowNull: true
        },
        applicationPurpose: {
            type: DataTypes.STRING(1024),
            field: 'ApplicationPurpose',
            allowNull: true
        },
        financeRequiredBy: {
            type: DataTypes.DATE,
            field: 'FinanceRequiredBy',
            allowNull: true
        },
        teamName: {
            type: DataTypes.STRING(100),
            field: 'TeamName',
            allowNull: true
        },
        numberOfWaitingApplications: {
            type: DataTypes.INTEGER,
            field: 'NumberOfWaitingApplications',
            allowNull: false
        },
        submissionSourceTypeID: {
            type: DataTypes.INTEGER,
            field: 'SubmissionSourceTypeID',
            allowNull: false
        },
        lixiSender: {
            type: DataTypes.STRING(150),
            field: 'LixiSender',
            allowNull: true
        },
        allowFastRefinance: {
            type: DataTypes.BOOLEAN,
            field: 'AllowFastRefinance',
            allowNull: false,
            defaultValue: true
        },
        stopDuplicateCommunications: {
            type: DataTypes.BOOLEAN,
            field: 'StopDuplicateCommunications',
            allowNull: false,
            defaultValue: false
        },
        sendBrokerDocumentation: {
            type: DataTypes.BOOLEAN,
            field: 'SendBrokerDocumentation',
            allowNull: false,
            defaultValue: false
        },
        totalLoanAmount: {
            type: DataTypes.DECIMAL,
            field: 'TotalLoanAmount',
            allowNull: true
        },
        lVR: {
            type: DataTypes.DECIMAL(12, 4),
            field: 'LVR',
            allowNull: true
        },
        sacrificeSchemeID: {
            type: DataTypes.INTEGER,
            field: 'SacrificeSchemeID',
            allowNull: true
        },
        bonusPercentage: {
            type: DataTypes.DECIMAL(10, 2),
            field: 'BonusPercentage',
            allowNull: true
        },
        applicationFee: {
            type: DataTypes.DECIMAL,
            field: 'ApplicationFee',
            allowNull: true
        },
        applicationFeeRefundTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationFeeRefundTypeID',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: true
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'HomeLoanApplicationAdditional',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var HomeLoanApplicationAdditional = model.HomeLoanApplicationAdditional;

};
