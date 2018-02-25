'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReport', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        creditReportTypeID: {
            type: DataTypes.INTEGER,
            field: 'CreditReportTypeID',
            allowNull: false,
            references: {
                model: 'CreditReportType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        crumbsPartyID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsPartyID',
            allowNull: false
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
        bureauReference: {
            type: DataTypes.STRING(50),
            field: 'BureauReference',
            allowNull: true
        },
        enquiryID: {
            type: DataTypes.STRING(50),
            field: 'EnquiryID',
            allowNull: true
        },
        clientReference: {
            type: DataTypes.STRING(50),
            field: 'ClientReference',
            allowNull: true
        },
        operatorID: {
            type: DataTypes.STRING(50),
            field: 'OperatorID',
            allowNull: true
        },
        operatorName: {
            type: DataTypes.STRING(50),
            field: 'OperatorName',
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
        traxRequestFileID: {
            type: DataTypes.STRING(32),
            field: 'TraxRequestFileID',
            allowNull: true
        },
        traxResponseFileID: {
            type: DataTypes.STRING(32),
            field: 'TraxResponseFileID',
            allowNull: true
        },
        traxPDFFileID: {
            type: DataTypes.STRING(32),
            field: 'TraxPDFFileID',
            allowNull: true
        },
        bureauScoreOLD: {
            type: DataTypes.STRING(20),
            field: 'BureauScoreOLD',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReport',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReport = model.CreditReport;
    var CreditReportAccount = model.CreditReportAccount;
    var CreditReportAddress = model.CreditReportAddress;
    var CreditReportAssociation = model.CreditReportAssociation;
    var CreditReportBusinessName = model.CreditReportBusinessName;
    var CreditReportCourtAction = model.CreditReportCourtAction;
    var CreditReportCreditEnquiry = model.CreditReportCreditEnquiry;
    var CreditReportDefault = model.CreditReportDefault;
    var CreditReportDirectorship = model.CreditReportDirectorship;
    var CreditReportDisqualifiedDirectorship = model.CreditReportDisqualifiedDirectorship;
    var CreditReportEmployment = model.CreditReportEmployment;
    var CreditReportFileNote = model.CreditReportFileNote;
    var CreditReportIdentity = model.CreditReportIdentity;
    var CreditReportMain = model.CreditReportMain;
    var CreditReportMessage = model.CreditReportMessage;
    var CreditReportPersonalInsolvency = model.CreditReportPersonalInsolvency;
    var CreditReportRepaymentHistory = model.CreditReportRepaymentHistory;
    var CreditReportScoreDataContributingFactor = model.CreditReportScoreDataContributingFactor;
    var CreditReportSummaryDatum = model.CreditReportSummaryDatum;
    var TradingHistoryAggregatedPaymentReference = model.TradingHistoryAggregatedPaymentReference;
    var TradingHistoryAnnualReturn = model.TradingHistoryAnnualReturn;
    var TradingHistoryASICDocument = model.TradingHistoryASICDocument;
    var TradingHistoryBrokerAgentEnquiry = model.TradingHistoryBrokerAgentEnquiry;
    var TradingHistoryClassification = model.TradingHistoryClassification;
    var TradingHistoryCompanyDirectorAddress = model.TradingHistoryCompanyDirectorAddress;
    var TradingHistoryCompanyDirectorEmployment = model.TradingHistoryCompanyDirectorEmployment;
    var TradingHistoryCompanyDirector = model.TradingHistoryCompanyDirector;
    var TradingHistoryCourtJudgement = model.TradingHistoryCourtJudgement;
    var TradingHistoryCourtWrit = model.TradingHistoryCourtWrit;
    var TradingHistoryCreditEnquiry = model.TradingHistoryCreditEnquiry;
    var TradingHistoryCurrentCompanyAddress = model.TradingHistoryCurrentCompanyAddress;
    var TradingHistoryCurrentCompanyShare = model.TradingHistoryCurrentCompanyShare;
    var TradingHistoryDeductibleGiftRecipient = model.TradingHistoryDeductibleGiftRecipient;
    var TradingHistoryDFAddress = model.TradingHistoryDFAddress;
    var TradingHistoryDirectorBankruptcy = model.TradingHistoryDirectorBankruptcy;
    var TradingHistoryDirectorBrokerAgentEnquiry = model.TradingHistoryDirectorBrokerAgentEnquiry;
    var TradingHistoryDirectorCourtJudgement = model.TradingHistoryDirectorCourtJudgement;
    var TradingHistoryDirectorCourtWrit = model.TradingHistoryDirectorCourtWrit;
    var TradingHistoryDirectorCreditEnquiry = model.TradingHistoryDirectorCreditEnquiry;
    var TradingHistoryDirectorCreditProvider = model.TradingHistoryDirectorCreditProvider;
    var TradingHistoryDirectorCrossReference = model.TradingHistoryDirectorCrossReference;
    var TradingHistoryDirectorDirectorshipMessage = model.TradingHistoryDirectorDirectorshipMessage;
    var TradingHistoryDirectorDirectorship = model.TradingHistoryDirectorDirectorship;
    var TradingHistoryDirectorDisqualificationMessage = model.TradingHistoryDirectorDisqualificationMessage;
    var TradingHistoryDirectorDisqualification = model.TradingHistoryDirectorDisqualification;
    var TradingHistoryDirectorFault = model.TradingHistoryDirectorFault;
    var TradingHistoryDirectorFileNote = model.TradingHistoryDirectorFileNote;
    var TradingHistoryDirectorLegalMessage = model.TradingHistoryDirectorLegalMessage;
    var TradingHistoryDirectorPaymentDefault = model.TradingHistoryDirectorPaymentDefault;
    var TradingHistoryDirectorProprietorshipMessage = model.TradingHistoryDirectorProprietorshipMessage;
    var TradingHistoryDirectorProprietorship = model.TradingHistoryDirectorProprietorship;
    var TradingHistoryDirector = model.TradingHistoryDirector;
    var TradingHistoryDirectorScore = model.TradingHistoryDirectorScore;
    var TradingHistoryDirectorScoreContributingFactor = model.TradingHistoryDirectorScoreContributingFactor;
    var TradingHistoryDirectorScoreError = model.TradingHistoryDirectorScoreError;
    var TradingHistoryDirectorScoreWarning = model.TradingHistoryDirectorScoreWarning;
    var TradingHistoryDirectorSummaryEntry = model.TradingHistoryDirectorSummaryEntry;
    var TradingHistoryDirectorWarningMetaDatum = model.TradingHistoryDirectorWarningMetaDatum;
    var TradingHistoryDirectorWarning = model.TradingHistoryDirectorWarning;
    var TradingHistoryError = model.TradingHistoryError;
    var TradingHistoryExternalAdministrator = model.TradingHistoryExternalAdministrator;
    var TradingHistoryFileNote = model.TradingHistoryFileNote;
    var TradingHistoryFinancialReport = model.TradingHistoryFinancialReport;
    var TradingHistoryFutureCompanyAddress = model.TradingHistoryFutureCompanyAddress;
    var TradingHistoryIndividualShareHolder = model.TradingHistoryIndividualShareHolder;
    var TradingHistoryIndustryDaysBeyondTerm = model.TradingHistoryIndustryDaysBeyondTerm;
    var TradingHistoryIndustryLatePaymentDay = model.TradingHistoryIndustryLatePaymentDay;
    var TradingHistoryIndustryScore = model.TradingHistoryIndustryScore;
    var TradingHistoryIndustryScoreYPoint = model.TradingHistoryIndustryScoreYPoint;
    var TradingHistoryLast200PaymentReference = model.TradingHistoryLast200PaymentReference;
    var TradingHistoryLegalMessage = model.TradingHistoryLegalMessage;
    var TradingHistoryMain = model.TradingHistoryMain;
    var TradingHistoryMarketLatePaymentDay = model.TradingHistoryMarketLatePaymentDay;
    var TradingHistoryMercantileEnquiry = model.TradingHistoryMercantileEnquiry;
    var TradingHistoryOrganisationDetail = model.TradingHistoryOrganisationDetail;
    var TradingHistoryOrganisationShareHolder = model.TradingHistoryOrganisationShareHolder;
    var TradingHistoryOtherEntity = model.TradingHistoryOtherEntity;
    var TradingHistoryOtherOfficer = model.TradingHistoryOtherOfficer;
    var TradingHistoryOtherOrganisationOfficer = model.TradingHistoryOtherOrganisationOfficer;
    var TradingHistoryPaymentDefault = model.TradingHistoryPaymentDefault;
    var TradingHistoryPaymentReferencesByDebtSize = model.TradingHistoryPaymentReferencesByDebtSize;
    var TradingHistoryPaymentSummary = model.TradingHistoryPaymentSummary;
    var TradingHistoryPetition = model.TradingHistoryPetition;
    var TradingHistoryPPSRCommercialCollateralClassSummary = model.TradingHistoryPPSRCommercialCollateralClassSummary;
    var TradingHistoryPPSRRegistrationChange = model.TradingHistoryPPSRRegistrationChange;
    var TradingHistoryPPSRRegistrationCollateral = model.TradingHistoryPPSRRegistrationCollateral;
    var TradingHistoryPPSRRegistrationCollateralAttachment = model.TradingHistoryPPSRRegistrationCollateralAttachment;
    var TradingHistoryPPSRRegistrationDetail = model.TradingHistoryPPSRRegistrationDetail;
    var TradingHistoryPPSRRegistrationDetailSecuredParty = model.TradingHistoryPPSRRegistrationDetailSecuredParty;
    var TradingHistoryPPSRRegistrationElement = model.TradingHistoryPPSRRegistrationElement;
    var TradingHistoryPPSRRegistrationElementSecuredParty = model.TradingHistoryPPSRRegistrationElementSecuredParty;
    var TradingHistoryPPSRRegistrationGrantor = model.TradingHistoryPPSRRegistrationGrantor;
    var TradingHistoryPPSRRegistrationReport = model.TradingHistoryPPSRRegistrationReport;
    var TradingHistoryPreASICDocument = model.TradingHistoryPreASICDocument;
    var TradingHistoryPreviousCompanyAddress = model.TradingHistoryPreviousCompanyAddress;
    var TradingHistoryPreviousCompanyShare = model.TradingHistoryPreviousCompanyShare;
    var TradingHistoryPreviousDirectorDirectorshipMessage = model.TradingHistoryPreviousDirectorDirectorshipMessage;
    var TradingHistoryPreviousDirectorDirectorship = model.TradingHistoryPreviousDirectorDirectorship;
    var TradingHistoryPreviousDirector = model.TradingHistoryPreviousDirector;
    var TradingHistoryPreviousIndividualShareHolder = model.TradingHistoryPreviousIndividualShareHolder;
    var TradingHistoryPreviousName = model.TradingHistoryPreviousName;
    var TradingHistoryPreviousOrganisationShareHolder = model.TradingHistoryPreviousOrganisationShareHolder;
    var TradingHistoryPreviousOtherOfficer = model.TradingHistoryPreviousOtherOfficer;
    var TradingHistoryPreviousOtherOrganisationOfficer = model.TradingHistoryPreviousOtherOrganisationOfficer;
    var TradingHistoryPreviousSecretary = model.TradingHistoryPreviousSecretary;
    var TradingHistoryProprietorshipMessage = model.TradingHistoryProprietorshipMessage;
    var TradingHistoryProprietorship = model.TradingHistoryProprietorship;
    var TradingHistoryScoreContributingFactor = model.TradingHistoryScoreContributingFactor;
    var TradingHistoryScoreError = model.TradingHistoryScoreError;
    var TradingHistoryScoreWarning = model.TradingHistoryScoreWarning;
    var TradingHistorySecretary = model.TradingHistorySecretary;
    var TradingHistorySummaryEntry = model.TradingHistorySummaryEntry;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var CreditReportType = model.CreditReportType;

    CreditReport.hasMany(CreditReportAccount, {
        as: 'AccountCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportAddress, {
        as: 'AddressCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportAssociation, {
        as: 'AssociationCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportBusinessName, {
        as: 'BusinessNameCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportCourtAction, {
        as: 'CourtActionCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportCreditEnquiry, {
        as: 'CreditEnquiryCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportDefault, {
        as: 'DefaultCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportDirectorship, {
        as: 'DirectorshipCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportDisqualifiedDirectorship, {
        as: 'DisqualifiedDirectorshipCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportEmployment, {
        as: 'EmploymentCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportFileNote, {
        as: 'FileNoteCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportIdentity, {
        as: 'IdentityCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportMain, {
        as: 'MainCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportMessage, {
        as: 'MessageCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportPersonalInsolvency, {
        as: 'PersonalInsolvencyCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportRepaymentHistory, {
        as: 'RepaymentHistoryCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportScoreDataContributingFactor, {
        as: 'ScoreDataContributingFactorCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(CreditReportSummaryDatum, {
        as: 'SummaryDataCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryAggregatedPaymentReference, {
        as: 'TradingHistoryAggregatedPaymentReferenceCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryAnnualReturn, {
        as: 'TradingHistoryAnnualReturnsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryASICDocument, {
        as: 'TradingHistoryASICDocumentsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryBrokerAgentEnquiry, {
        as: 'TradingHistoryBrokerAgentEnquiriesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryClassification, {
        as: 'TradingHistoryClassificationCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCompanyDirectorAddress, {
        as: 'TradingHistoryCompanyDirectorAddressCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCompanyDirectorEmployment, {
        as: 'TradingHistoryCompanyDirectorEmploymentCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCompanyDirector, {
        as: 'TradingHistoryCompanyDirectorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCourtJudgement, {
        as: 'TradingHistoryCourtJudgementsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCourtWrit, {
        as: 'TradingHistoryCourtWritsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCreditEnquiry, {
        as: 'TradingHistoryCreditEnquiriesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCurrentCompanyAddress, {
        as: 'TradingHistoryCurrentCompanyAddressesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryCurrentCompanyShare, {
        as: 'TradingHistoryCurrentCompanySharesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDeductibleGiftRecipient, {
        as: 'TradingHistoryDeductibleGiftRecipientsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDFAddress, {
        as: 'TradingHistoryDFAddressCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorBankruptcy, {
        as: 'TradingHistoryDirectorBankruptciesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorBrokerAgentEnquiry, {
        as: 'TradingHistoryDirectorBrokerAgentEnquiriesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorCourtJudgement, {
        as: 'TradingHistoryDirectorCourtJudgementsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorCourtWrit, {
        as: 'TradingHistoryDirectorCourtWritsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorCreditEnquiry, {
        as: 'TradingHistoryDirectorCreditEnquiriesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorCreditProvider, {
        as: 'TradingHistoryDirectorCreditProvidersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorCrossReference, {
        as: 'TradingHistoryDirectorCrossReferencesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorDirectorshipMessage, {
        as: 'TradingHistoryDirectorDirectorshipMessagesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorDirectorship, {
        as: 'TradingHistoryDirectorDirectorshipsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorDisqualificationMessage, {
        as: 'TradingHistoryDirectorDisqualificationMessagesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorDisqualification, {
        as: 'TradingHistoryDirectorDisqualificationsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorFault, {
        as: 'TradingHistoryDirectorFaultsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorFileNote, {
        as: 'TradingHistoryDirectorFileNotesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorLegalMessage, {
        as: 'TradingHistoryDirectorLegalMessagesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorPaymentDefault, {
        as: 'TradingHistoryDirectorPaymentDefaultsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorProprietorshipMessage, {
        as: 'TradingHistoryDirectorProprietorshipMessagesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorProprietorship, {
        as: 'TradingHistoryDirectorProprietorshipsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirector, {
        as: 'TradingHistoryDirectorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorScore, {
        as: 'TradingHistoryDirectorScoreCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorScoreContributingFactor, {
        as: 'TradingHistoryDirectorScoreContributingFactorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorScoreError, {
        as: 'TradingHistoryDirectorScoreErrorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorScoreWarning, {
        as: 'TradingHistoryDirectorScoreWarningsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorSummaryEntry, {
        as: 'TradingHistoryDirectorSummaryEntriesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorWarningMetaDatum, {
        as: 'TradingHistoryDirectorWarningMetaDataCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryDirectorWarning, {
        as: 'TradingHistoryDirectorWarningsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryError, {
        as: 'TradingHistoryErrorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryExternalAdministrator, {
        as: 'TradingHistoryExternalAdministratorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryFileNote, {
        as: 'TradingHistoryFileNotesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryFinancialReport, {
        as: 'TradingHistoryFinancialReportsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryFutureCompanyAddress, {
        as: 'TradingHistoryFutureCompanyAddressesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryIndividualShareHolder, {
        as: 'TradingHistoryIndividualShareHoldersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryIndustryDaysBeyondTerm, {
        as: 'TradingHistoryIndustryDaysBeyondTermCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryIndustryLatePaymentDay, {
        as: 'TradingHistoryIndustryLatePaymentDaysCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryIndustryScore, {
        as: 'TradingHistoryIndustryScoresCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryIndustryScoreYPoint, {
        as: 'TradingHistoryIndustryScoreYPointsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryLast200PaymentReference, {
        as: 'TradingHistoryLast200PaymentReferenceCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryLegalMessage, {
        as: 'TradingHistoryLegalMessagesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryMain, {
        as: 'TradingHistoryMainCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryMarketLatePaymentDay, {
        as: 'TradingHistoryMarketLatePaymentDaysCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryMercantileEnquiry, {
        as: 'TradingHistoryMercantileEnquiriesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryOrganisationDetail, {
        as: 'TradingHistoryOrganisationDetailsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryOrganisationShareHolder, {
        as: 'TradingHistoryOrganisationShareHoldersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryOtherEntity, {
        as: 'TradingHistoryOtherEntitiesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryOtherOfficer, {
        as: 'TradingHistoryOtherOfficersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryOtherOrganisationOfficer, {
        as: 'TradingHistoryOtherOrganisationOfficersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPaymentDefault, {
        as: 'TradingHistoryPaymentDefaultsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPaymentReferencesByDebtSize, {
        as: 'TradingHistoryPaymentReferencesByDebtSizeCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPaymentSummary, {
        as: 'TradingHistoryPaymentSummaryCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPetition, {
        as: 'TradingHistoryPetitionsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRCommercialCollateralClassSummary, {
        as: 'TradingHistoryPPSRCommercialCollateralClassSummaryCreditreports',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationChange, {
        as: 'TradingHistoryPPSRRegistrationChangesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationCollateral, {
        as: 'TradingHistoryPPSRRegistrationCollateralCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationCollateralAttachment, {
        as: 'TradingHistoryPPSRRegistrationCollateralAttachmentsCreditrepors',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationDetail, {
        as: 'TradingHistoryPPSRRegistrationDetailsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationDetailSecuredParty, {
        as: 'TradingHistoryPPSRRegistrationDetailSecuredPartiesCreditreports',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationElement, {
        as: 'TradingHistoryPPSRRegistrationElementsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationElementSecuredParty, {
        as: 'TradingHistoryPPSRRegistrationElementSecuredPartiesCreditrepors',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationGrantor, {
        as: 'TradingHistoryPPSRRegistrationGrantorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPPSRRegistrationReport, {
        as: 'TradingHistoryPPSRRegistrationReportsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreASICDocument, {
        as: 'TradingHistoryPreASICDocumentsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousCompanyAddress, {
        as: 'TradingHistoryPreviousCompanyAddressesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousCompanyShare, {
        as: 'TradingHistoryPreviousCompanySharesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousDirectorDirectorshipMessage, {
        as: 'TradingHistoryPreviousDirectorDirectorshipMessagesCreditreports',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousDirectorDirectorship, {
        as: 'TradingHistoryPreviousDirectorDirectorshipsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousDirector, {
        as: 'TradingHistoryPreviousDirectorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousIndividualShareHolder, {
        as: 'TradingHistoryPreviousIndividualShareHoldersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousName, {
        as: 'TradingHistoryPreviousNamesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousOrganisationShareHolder, {
        as: 'TradingHistoryPreviousOrganisationShareHoldersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousOtherOfficer, {
        as: 'TradingHistoryPreviousOtherOfficersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousOtherOrganisationOfficer, {
        as: 'TradingHistoryPreviousOtherOrganisationOfficersCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryPreviousSecretary, {
        as: 'TradingHistoryPreviousSecretariesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryProprietorshipMessage, {
        as: 'TradingHistoryProprietorshipMessagesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryProprietorship, {
        as: 'TradingHistoryProprietorshipsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryScoreContributingFactor, {
        as: 'TradingHistoryScoreContributingFactorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryScoreError, {
        as: 'TradingHistoryScoreErrorsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistoryScoreWarning, {
        as: 'TradingHistoryScoreWarningsCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistorySecretary, {
        as: 'TradingHistorySecretariesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.hasMany(TradingHistorySummaryEntry, {
        as: 'TradingHistorySummaryEntriesCreditreportFks',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.belongsTo(CreditReportType, {
        as: 'CreditReportType',
        foreignKey: 'CreditReportTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReport.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
