'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryMain', {
        creditReportID: {
            type: DataTypes.INTEGER,
            field: 'CreditReportID',
            allowNull: false,
            references: {
                model: 'CreditReport',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        memberCode: {
            type: DataTypes.STRING(50),
            field: 'MemberCode',
            allowNull: true
        },
        branchCode: {
            type: DataTypes.STRING(50),
            field: 'BranchCode',
            allowNull: true
        },
        channelCode: {
            type: DataTypes.STRING(50),
            field: 'ChannelCode',
            allowNull: true
        },
        chargeBackCode: {
            type: DataTypes.STRING(50),
            field: 'ChargeBackCode',
            allowNull: true
        },
        reportCreateDate: {
            type: DataTypes.DATE,
            field: 'ReportCreateDate',
            allowNull: true
        },
        pDFLink: {
            type: DataTypes.STRING(50),
            field: 'PDFLink',
            allowNull: true
        },
        withLinks: {
            type: DataTypes.STRING(50),
            field: 'WithLinks',
            allowNull: true
        },
        tradePaymentsRequired: {
            type: DataTypes.STRING(50),
            field: 'TradePaymentsRequired',
            allowNull: true
        },
        aSICExtractDate: {
            type: DataTypes.DATEONLY,
            field: 'ASICExtractDate',
            allowNull: true
        },
        organisationName: {
            type: DataTypes.STRING(200),
            field: 'OrganisationName',
            allowNull: true
        },
        currentLatePaymentDays: {
            type: DataTypes.INTEGER,
            field: 'CurrentLatePaymentDays',
            allowNull: true
        },
        currentUniverseLatePaymentDays: {
            type: DataTypes.INTEGER,
            field: 'CurrentUniverseLatePaymentDays',
            allowNull: true
        },
        latePaymentTrend: {
            type: DataTypes.INTEGER,
            field: 'LatePaymentTrend',
            allowNull: true
        },
        companyEntityBureauReference: {
            type: DataTypes.STRING(200),
            field: 'CompanyEntityBureauReference',
            allowNull: true
        },
        companyEntityFileCreationDate: {
            type: DataTypes.DATEONLY,
            field: 'CompanyEntityFileCreationDate',
            allowNull: true
        },
        companyEntityOrganisationName: {
            type: DataTypes.STRING(200),
            field: 'CompanyEntityOrganisationName',
            allowNull: true
        },
        companyEntityOrganisationType: {
            type: DataTypes.STRING(20),
            field: 'CompanyEntityOrganisationType',
            allowNull: true
        },
        companyEntityOrganisationStatusCode: {
            type: DataTypes.STRING(20),
            field: 'CompanyEntityOrganisationStatusCode',
            allowNull: true
        },
        companyEntityOrganisationStatusType: {
            type: DataTypes.STRING(50),
            field: 'CompanyEntityOrganisationStatusType',
            allowNull: true
        },
        companyEntityOrganisationNameStartDate: {
            type: DataTypes.DATEONLY,
            field: 'CompanyEntityOrganisationNameStartDate',
            allowNull: true
        },
        companyEntityAustralianBusinessNumber: {
            type: DataTypes.STRING(20),
            field: 'CompanyEntityAustralianBusinessNumber',
            allowNull: true
        },
        companyEntityNatureOfBusiness: {
            type: DataTypes.STRING(50),
            field: 'CompanyEntityNatureOfBusiness',
            allowNull: true
        },
        companyEntityRenewalDate: {
            type: DataTypes.DATEONLY,
            field: 'CompanyEntityRenewalDate',
            allowNull: true
        },
        companyEntityLastSearchDate: {
            type: DataTypes.DATEONLY,
            field: 'CompanyEntityLastSearchDate',
            allowNull: true
        },
        companyEntityAustralianCompanyNumber: {
            type: DataTypes.STRING(50),
            field: 'CompanyEntityAustralianCompanyNumber',
            allowNull: true
        },
        companyEntityIncorporationDate: {
            type: DataTypes.DATEONLY,
            field: 'CompanyEntityIncorporationDate',
            allowNull: true
        },
        companyEntityIncorporationState: {
            type: DataTypes.STRING(20),
            field: 'CompanyEntityIncorporationState',
            allowNull: true
        },
        principalPlaceOfBusinessFirstReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'PrincipalPlaceOfBusinessFirstReportedDate',
            allowNull: true
        },
        principalPlaceOfBusinessCareOf: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessCareOf',
            allowNull: true
        },
        principalPlaceOfBusinessAddressPrefix: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessAddressPrefix',
            allowNull: true
        },
        principalPlaceOfBusinessStreetDetails: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessStreetDetails',
            allowNull: true
        },
        principalPlaceOfBusinessLocalityDetails: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessLocalityDetails',
            allowNull: true
        },
        principalPlaceOfBusinessState: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessState',
            allowNull: true
        },
        principalPlaceOfBusinessPostcode: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessPostcode',
            allowNull: true
        },
        principalPlaceOfBusinessCountry: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessCountry',
            allowNull: true
        },
        principalPlaceOfBusinessDocumentNumber: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessDocumentNumber',
            allowNull: true
        },
        principalPlaceOfBusinessDocumentNumberQualifier: {
            type: DataTypes.STRING(200),
            field: 'PrincipalPlaceOfBusinessDocumentNumberQualifier',
            allowNull: true
        },
        registeredOfficeFirstReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'RegisteredOfficeFirstReportedDate',
            allowNull: true
        },
        registeredOfficeCareOf: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeCareOf',
            allowNull: true
        },
        registeredOfficeAddressPrefix: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeAddressPrefix',
            allowNull: true
        },
        registeredOfficeStreetDetails: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeStreetDetails',
            allowNull: true
        },
        registeredOfficeLocalityDetails: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeLocalityDetails',
            allowNull: true
        },
        registeredOfficeState: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeState',
            allowNull: true
        },
        registeredOfficePostcode: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficePostcode',
            allowNull: true
        },
        registeredOfficeCountry: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeCountry',
            allowNull: true
        },
        registeredOfficeDocumentNumber: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeDocumentNumber',
            allowNull: true
        },
        registeredOfficeDocumentNumberQualifier: {
            type: DataTypes.STRING(200),
            field: 'RegisteredOfficeDocumentNumberQualifier',
            allowNull: true
        },
        asicPreviousStateNumber: {
            type: DataTypes.STRING(50),
            field: 'AsicPreviousStateNumber',
            allowNull: true
        },
        asicAustralianCompanyNumberReviewDate: {
            type: DataTypes.DATEONLY,
            field: 'AsicAustralianCompanyNumberReviewDate',
            allowNull: true
        },
        asicOrganisationClass: {
            type: DataTypes.STRING(50),
            field: 'AsicOrganisationClass',
            allowNull: true
        },
        asicOrganisationSubClass: {
            type: DataTypes.STRING(50),
            field: 'AsicOrganisationSubClass',
            allowNull: true
        },
        asicDocumentNumber: {
            type: DataTypes.STRING(50),
            field: 'AsicDocumentNumber',
            allowNull: true
        },
        asicDocumentNumberQualifier: {
            type: DataTypes.STRING(50),
            field: 'AsicDocumentNumberQualifier',
            allowNull: true
        },
        probabilityAdverse: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'ProbabilityAdverse',
            allowNull: true
        },
        probabilityFailure: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'ProbabilityFailure',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryMain',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryMain = model.TradingHistoryMain;
    var CreditReport = model.CreditReport;

    TradingHistoryMain.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
