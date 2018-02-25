'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('HomeLoanSecurity', {
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            references: {
                model: 'Security',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        homeLoanApplicationID: {
            type: DataTypes.INTEGER,
            field: 'HomeLoanApplicationID',
            allowNull: true
        },
        primarySecurity: {
            type: DataTypes.BOOLEAN,
            field: 'PrimarySecurity',
            allowNull: true,
            defaultValue: false
        },
        securityStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'SecurityStatusTypeID',
            allowNull: false
        },
        occupancyTypeID: {
            type: DataTypes.INTEGER,
            field: 'OccupancyTypeID',
            allowNull: false
        },
        mortgageTypeID: {
            type: DataTypes.INTEGER,
            field: 'MortgageTypeID',
            allowNull: false
        },
        homeLoanSecurityTypeID: {
            type: DataTypes.INTEGER,
            field: 'HomeLoanSecurityTypeID',
            allowNull: false
        },
        crumbsAddressID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsAddressID',
            allowNull: true
        },
        estimatedConstructionCompletionDate: {
            type: DataTypes.DATE,
            field: 'EstimatedConstructionCompletionDate',
            allowNull: true
        },
        estimatedValue: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'EstimatedValue',
            allowNull: true
        },
        lotNumber: {
            type: DataTypes.STRING(50),
            field: 'LotNumber',
            allowNull: true
        },
        planNumber: {
            type: DataTypes.STRING(50),
            field: 'PlanNumber',
            allowNull: true
        },
        mortgagors: {
            type: DataTypes.STRING(500),
            field: 'Mortgagors',
            allowNull: true
        },
        vol: {
            type: DataTypes.STRING(50),
            field: 'Vol',
            allowNull: true
        },
        fol: {
            type: DataTypes.STRING(50),
            field: 'Fol',
            allowNull: true
        },
        security3rdParty: {
            type: DataTypes.BOOLEAN,
            field: 'Security3rdParty',
            allowNull: false
        },
        securityTitleTypeID: {
            type: DataTypes.INTEGER,
            field: 'SecurityTitleTypeID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        securityValue: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'SecurityValue',
            allowNull: true
        },
        insuredAmount: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'InsuredAmount',
            allowNull: true
        },
        numberOfBedrooms: {
            type: DataTypes.INTEGER,
            field: 'NumberOfBedrooms',
            allowNull: true
        },
        weeklyRentalAmount: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'WeeklyRentalAmount',
            allowNull: true
        },
        zoningTypeID: {
            type: DataTypes.INTEGER,
            field: 'ZoningTypeID',
            allowNull: true
        },
        hasValidCOS: {
            type: DataTypes.BOOLEAN,
            field: 'HasValidCOS',
            allowNull: false,
            defaultValue: false
        },
        isPurchaseProperty: {
            type: DataTypes.BOOLEAN,
            field: 'IsPurchaseProperty',
            allowNull: false,
            defaultValue: false
        },
        parish: {
            type: DataTypes.STRING(100),
            field: 'Parish',
            allowNull: true
        },
        county: {
            type: DataTypes.STRING(100),
            field: 'County',
            allowNull: true
        },
        dealing: {
            type: DataTypes.STRING(100),
            field: 'Dealing',
            allowNull: true
        },
        titleDescription: {
            type: DataTypes.STRING(2000),
            field: 'TitleDescription',
            allowNull: true
        },
        block: {
            type: DataTypes.STRING(100),
            field: 'Block',
            allowNull: true
        },
        district: {
            type: DataTypes.STRING(100),
            field: 'District',
            allowNull: true
        },
        tenancy: {
            type: DataTypes.STRING(100),
            field: 'Tenancy',
            allowNull: true
        },
        location: {
            type: DataTypes.STRING(100),
            field: 'Location',
            allowNull: true
        },
        titleUnit: {
            type: DataTypes.STRING(100),
            field: 'TitleUnit',
            allowNull: true
        },
        edition: {
            type: DataTypes.STRING(100),
            field: 'Edition',
            allowNull: true
        },
        section: {
            type: DataTypes.STRING(100),
            field: 'Section',
            allowNull: true
        },
        limit: {
            type: DataTypes.STRING(1000),
            field: 'Limit',
            allowNull: true
        },
        lease: {
            type: DataTypes.STRING(100),
            field: 'Lease',
            allowNull: true
        },
        extents: {
            type: DataTypes.STRING(100),
            field: 'Extents',
            allowNull: true
        },
        houseContentsInsurance: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'HouseContentsInsurance',
            allowNull: true
        },
        houseContentsInsurer: {
            type: DataTypes.STRING(500),
            field: 'HouseContentsInsurer',
            allowNull: true
        },
        houseContentsExpire: {
            type: DataTypes.DATE,
            field: 'HouseContentsExpire',
            allowNull: true
        },
        houseContentsPolicy: {
            type: DataTypes.STRING(200),
            field: 'HouseContentsPolicy',
            allowNull: true
        },
        aCTLeaseExpiry: {
            type: DataTypes.DATE,
            field: 'ACTLeaseExpiry',
            allowNull: true
        },
        titleComments: {
            type: DataTypes.STRING(1000),
            field: 'TitleComments',
            allowNull: true
        },
        planTypeID: {
            type: DataTypes.INTEGER,
            field: 'PlanTypeID',
            allowNull: true
        },
        dealingTypeID: {
            type: DataTypes.INTEGER,
            field: 'DealingTypeID',
            allowNull: true
        },
        dealingLine2: {
            type: DataTypes.STRING(100),
            field: 'DealingLine2',
            allowNull: true
        },
        propertyRegistered: {
            type: DataTypes.BOOLEAN,
            field: 'PropertyRegistered',
            allowNull: true
        },
        volumeIssued: {
            type: DataTypes.BOOLEAN,
            field: 'VolumeIssued',
            allowNull: true
        },
        titleIssued: {
            type: DataTypes.BOOLEAN,
            field: 'TitleIssued',
            allowNull: true
        },
        lotTypeID: {
            type: DataTypes.INTEGER,
            field: 'LotTypeID',
            allowNull: true
        },
        fTCheckListComplete: {
            type: DataTypes.BOOLEAN,
            field: 'FTCheckListComplete',
            allowNull: true
        },
        orderNumber: {
            type: DataTypes.STRING(50),
            field: 'OrderNumber',
            allowNull: true
        },
        fMF: {
            type: DataTypes.STRING(50),
            field: 'FMF',
            allowNull: true
        },
        scheduleASent: {
            type: DataTypes.BOOLEAN,
            field: 'ScheduleASent',
            allowNull: true
        },
        scheduleASentDate: {
            type: DataTypes.DATE,
            field: 'ScheduleASentDate',
            allowNull: true
        },
        ultracsSecurityID: {
            type: DataTypes.INTEGER,
            field: 'UltracsSecurityID',
            allowNull: true
        },
        firstAddressNotificationDate: {
            type: DataTypes.DATE,
            field: 'FirstAddressNotificationDate',
            allowNull: true
        },
        lastAddressNotificationDate: {
            type: DataTypes.DATE,
            field: 'LastAddressNotificationDate',
            allowNull: true
        },
        applicationSecurityPurposeTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationSecurityPurposeTypeID',
            allowNull: true,
            references: {
                model: 'ApplicationSecurityPurposeType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        contractDate: {
            type: DataTypes.DATE,
            field: 'ContractDate',
            allowNull: true
        },
        contractSettlementDate: {
            type: DataTypes.DATE,
            field: 'ContractSettlementDate',
            allowNull: true
        },
        crumbsRealEstatePartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsRealEstatePartyRoleID',
            allowNull: true
        },
        titleRegistered: {
            type: DataTypes.DATE,
            field: 'TitleRegistered',
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
        tableName: 'HomeLoanSecurity',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var HomeLoanSecurity = model.HomeLoanSecurity;
    var ApplicationSecurityPurposeType = model.ApplicationSecurityPurposeType;
    var Security = model.Security;

    HomeLoanSecurity.belongsTo(ApplicationSecurityPurposeType, {
        as: 'ApplicationSecurityPurposeType',
        foreignKey: 'ApplicationSecurityPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    HomeLoanSecurity.belongsTo(Security, {
        as: 'Security',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
