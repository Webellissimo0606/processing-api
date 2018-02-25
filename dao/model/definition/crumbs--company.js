'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsCompany', {
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        companyTypeID: {
            type: DataTypes.INTEGER,
            field: 'CompanyTypeID',
            allowNull: true
        },
        companyName: {
            type: DataTypes.STRING(150),
            field: 'CompanyName',
            allowNull: false
        },
        preferredName: {
            type: DataTypes.STRING(150),
            field: 'PreferredName',
            allowNull: true
        },
        shortName: {
            type: DataTypes.STRING(50),
            field: 'ShortName',
            allowNull: true
        },
        aCN: {
            type: DataTypes.STRING(15),
            field: 'ACN',
            allowNull: true
        },
        aBN: {
            type: DataTypes.STRING(15),
            field: 'ABN',
            allowNull: true
        },
        aBNHeldForMoreThan3Years: {
            type: DataTypes.BOOLEAN,
            field: 'ABNHeldForMoreThan3Years',
            allowNull: true
        },
        aBNHeldForMonths: {
            type: DataTypes.INTEGER,
            field: 'ABNHeldForMonths',
            allowNull: true
        },
        aBNHeldForYears: {
            type: DataTypes.INTEGER,
            field: 'ABNHeldForYears',
            allowNull: true
        },
        aBNRegistered: {
            type: DataTypes.DATEONLY,
            field: 'ABNRegistered',
            allowNull: true
        },
        aBRN: {
            type: DataTypes.STRING(20),
            field: 'ABRN',
            allowNull: true
        },
        registeredInStateID: {
            type: DataTypes.INTEGER,
            field: 'RegisteredInStateID',
            allowNull: true
        },
        aBNVerified: {
            type: DataTypes.BOOLEAN,
            field: 'ABNVerified',
            allowNull: true
        },
        numberOfDirectors: {
            type: DataTypes.INTEGER,
            field: 'NumberOfDirectors',
            allowNull: true
        },
        numberOfShareholders: {
            type: DataTypes.INTEGER,
            field: 'NumberOfShareholders',
            allowNull: true
        },
        numberOfPartners: {
            type: DataTypes.INTEGER,
            field: 'NumberOfPartners',
            allowNull: true
        },
        accountantPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'AccountantPartyRoleID',
            allowNull: true
        },
        accountantContactName: {
            type: DataTypes.STRING(150),
            field: 'AccountantContactName',
            allowNull: true
        },
        industryTypeID: {
            type: DataTypes.INTEGER,
            field: 'IndustryTypeID',
            allowNull: true
        },
        mainBusinessActivityID: {
            type: DataTypes.INTEGER,
            field: 'MainBusinessActivityID',
            allowNull: true
        },
        commissionPayable: {
            type: DataTypes.BOOLEAN,
            field: 'CommissionPayable',
            allowNull: true
        },
        accreditationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'AccreditationStatusTypeID',
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
            allowNull: false
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        aCNRegistered: {
            type: DataTypes.DATEONLY,
            field: 'ACNRegistered',
            allowNull: true
        },
        contactName: {
            type: DataTypes.STRING(200),
            field: 'ContactName',
            allowNull: true
        },
        accountRankingTypeID: {
            type: DataTypes.INTEGER,
            field: 'AccountRankingTypeID',
            allowNull: true
        },
        declarationConfirmed: {
            type: DataTypes.BOOLEAN,
            field: 'DeclarationConfirmed',
            allowNull: true
        },
        prospectSource: {
            type: DataTypes.STRING(200),
            field: 'ProspectSource',
            allowNull: true
        },
        equipmentFinanceProductCategoryID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceProductCategoryID',
            allowNull: true
        },
        alternateDisplayName: {
            type: DataTypes.STRING(150),
            field: 'AlternateDisplayName',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Company',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsCompany = model.CrumbsCompany;

};
