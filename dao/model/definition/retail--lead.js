'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailLead', {
        leadID: {
            type: DataTypes.INTEGER,
            field: 'LeadID',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: true
        },
        salespersonID: {
            type: DataTypes.INTEGER,
            field: 'SalespersonID',
            allowNull: true
        },
        leadIdentifier: {
            type: DataTypes.STRING(200),
            field: 'LeadIdentifier',
            allowNull: true
        },
        referringEntityID: {
            type: DataTypes.INTEGER,
            field: 'ReferringEntityID',
            allowNull: true
        },
        referralTypeID: {
            type: DataTypes.INTEGER,
            field: 'ReferralTypeID',
            allowNull: true
        },
        leadCreationSourceID: {
            type: DataTypes.INTEGER,
            field: 'LeadCreationSourceID',
            allowNull: true
        },
        salesStatusAsAt: {
            type: DataTypes.DATE,
            field: 'SalesStatusAsAt',
            allowNull: true
        },
        followUpOn: {
            type: DataTypes.DATE,
            field: 'FollowUpOn',
            allowNull: true
        },
        bestTimeToCallTypeID: {
            type: DataTypes.INTEGER,
            field: 'BestTimeToCallTypeID',
            allowNull: true
        },
        productGroupTypeID: {
            type: DataTypes.INTEGER,
            field: 'ProductGroupTypeID',
            allowNull: true
        },
        channelShopReferrerRelationshipID: {
            type: DataTypes.INTEGER,
            field: 'ChannelShopReferrerRelationshipID',
            allowNull: false
        },
        ourCreditTypeID: {
            type: DataTypes.INTEGER,
            field: 'OurCreditTypeID',
            allowNull: true
        },
        errorDescription: {
            type: DataTypes.TEXT,
            field: 'ErrorDescription',
            allowNull: true
        },
        saleCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'SaleCategoryTypeID',
            allowNull: true
        },
        postcode: {
            type: DataTypes.STRING(20),
            field: 'Postcode',
            allowNull: true
        },
        salesSupportID: {
            type: DataTypes.INTEGER,
            field: 'SalesSupportID',
            allowNull: true
        },
        saleAssignedToTypeID: {
            type: DataTypes.INTEGER,
            field: 'SaleAssignedToTypeID',
            allowNull: true
        },
        referringEntityUniqueIdentifier: {
            type: DataTypes.STRING(100),
            field: 'ReferringEntityUniqueIdentifier',
            allowNull: true
        },
        woopraReferringEntityID: {
            type: DataTypes.INTEGER,
            field: 'WoopraReferringEntityID',
            allowNull: true
        },
        woopraFirstReferrerURL: {
            type: DataTypes.TEXT,
            field: 'WoopraFirstReferrerURL',
            allowNull: true
        },
        woopraProcessed: {
            type: DataTypes.INTEGER,
            field: 'WoopraProcessed',
            allowNull: true
        },
        woopraVisitorID: {
            type: DataTypes.STRING(50),
            field: 'WoopraVisitorID',
            allowNull: true
        },
        sessionLandingPageOriginalUrl: {
            type: DataTypes.STRING(2083),
            field: 'SessionLandingPageOriginalUrl',
            allowNull: true
        },
        sessionID: {
            type: DataTypes.STRING(24),
            field: 'SessionID',
            allowNull: true
        },
        sessionHostServer: {
            type: DataTypes.STRING(100),
            field: 'SessionHostServer',
            allowNull: true
        },
        clientIPAddress: {
            type: DataTypes.STRING(15),
            field: 'ClientIPAddress',
            allowNull: true
        },
        clientUserAgent: {
            type: DataTypes.STRING(8000),
            field: 'ClientUserAgent',
            allowNull: true
        },
        woopraSessionID: {
            type: DataTypes.STRING(20),
            field: 'WoopraSessionID',
            allowNull: true
        },
        sessionReferrerUrl: {
            type: DataTypes.STRING(2083),
            field: 'SessionReferrerUrl',
            allowNull: true
        },
        clientJavascriptEnabled: {
            type: DataTypes.BOOLEAN,
            field: 'ClientJavascriptEnabled',
            allowNull: true
        },
        clientCookiesEnabled: {
            type: DataTypes.BOOLEAN,
            field: 'ClientCookiesEnabled',
            allowNull: true
        },
        correlationID: {
            type: DataTypes.UUID,
            field: 'CorrelationID',
            allowNull: true
        },
        leadPotential: {
            type: DataTypes.STRING(50),
            field: 'LeadPotential',
            allowNull: true
        },
        productInterestList: {
            type: DataTypes.STRING(500),
            field: 'ProductInterestList',
            allowNull: true
        },
        priorityLead: {
            type: DataTypes.BOOLEAN,
            field: 'PriorityLead',
            allowNull: true
        },
        crashReasonTypeID: {
            type: DataTypes.INTEGER,
            field: 'CrashReasonTypeID',
            allowNull: true
        },
        crashDate: {
            type: DataTypes.DATE,
            field: 'CrashDate',
            allowNull: true
        },
        hotMessage: {
            type: DataTypes.TEXT,
            field: 'HotMessage',
            allowNull: true
        },
        customerReferrerID: {
            type: DataTypes.INTEGER,
            field: 'CustomerReferrerID',
            allowNull: true
        },
        referrerExternalReference: {
            type: DataTypes.STRING(500),
            field: 'ReferrerExternalReference',
            allowNull: true
        },
        gradeTypeID: {
            type: DataTypes.INTEGER,
            field: 'GradeTypeID',
            allowNull: true
        },
        externalLeadID: {
            type: DataTypes.UUID,
            field: 'ExternalLeadID',
            allowNull: true
        },
        feedbackTypeID: {
            type: DataTypes.INTEGER,
            field: 'FeedbackTypeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'retail_Lead',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailLead = model.RetailLead;

};
