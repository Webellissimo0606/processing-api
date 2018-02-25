'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PartyRole', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        crumbsPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsPartyRoleID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'PartyRole',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PartyRole = model.PartyRole;
    var ApplicationCondition = model.ApplicationCondition;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationContainerFee = model.ApplicationContainerFee;
    var ApplicationHistory = model.ApplicationHistory;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurityOutgoingFinance = model.ApplicationSecurityOutgoingFinance;
    var ApplicationServiceabilityHistory = model.ApplicationServiceabilityHistory;
    var ApplicationStatusHistory = model.ApplicationStatusHistory;
    var Asset = model.Asset;
    var AutoAssessmentPolicyOwner = model.AutoAssessmentPolicyOwner;
    var AutomatedValuationModelDetail = model.AutomatedValuationModelDetail;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var CreditReport = model.CreditReport;
    var Deposit = model.Deposit;
    var DirectDebit = model.DirectDebit;
    var DocumentOrderHistory = model.DocumentOrderHistory;
    var DocumentOrderHistoryApplicationPartyRole = model.DocumentOrderHistoryApplicationPartyRole;
    var DocumentOrderHistoryApplicationPartyRoleStatus = model.DocumentOrderHistoryApplicationPartyRoleStatus;
    var DocumentOrderHistoryApplicationPartyRoleViewer = model.DocumentOrderHistoryApplicationPartyRoleViewer;
    var DocumentOrderHistoryAuditEvent = model.DocumentOrderHistoryAuditEvent;
    var DocumentOrderHistoryAuditEventDatum = model.DocumentOrderHistoryAuditEventDatum;
    var DocumentOrderStatusHistory = model.DocumentOrderStatusHistory;
    var Employment = model.Employment;
    var EquipmentFinanceLoanApplication = model.EquipmentFinanceLoanApplication;
    var EquipmentFinanceSecurity = model.EquipmentFinanceSecurity;
    var EquipmentFinanceSecuritySerialLocation = model.EquipmentFinanceSecuritySerialLocation;
    var FeeTypeProductCategory = model.FeeTypeProductCategory;
    var FinalApprovalProcessHistory = model.FinalApprovalProcessHistory;
    var Income = model.Income;
    var Insurance = model.Insurance;
    var Invoice = model.Invoice;
    var Liability = model.Liability;
    var Loan = model.Loan;
    var LoanPurpose = model.LoanPurpose;
    var LoanXrefHistory = model.LoanXrefHistory;
    var LoanXrefPoolHistory = model.LoanXrefPoolHistory;
    var MotorVehicleLoanApplication = model.MotorVehicleLoanApplication;
    var MotorVehicleRateAdjustmentHistory = model.MotorVehicleRateAdjustmentHistory;
    var MotorVehicleSecurity = model.MotorVehicleSecurity;
    var PersonalLoanApplication = model.PersonalLoanApplication;
    var Pool = model.Pool;
    var Quote = model.Quote;
    var SecurityAccessory = model.SecurityAccessory;
    var SecuritySerialLocation = model.SecuritySerialLocation;
    var ServiceabilityCalculatorVersion = model.ServiceabilityCalculatorVersion;
    var ServiceabilityHistory = model.ServiceabilityHistory;
    var TraxTreeValidationResult = model.TraxTreeValidationResult;
    var Trigger = model.Trigger;
    var Valuation = model.Valuation;
    var ValuationPropertyType = model.ValuationPropertyType;
    var Workbook = model.Workbook;
    var WorkbookHistory = model.WorkbookHistory;
    var WorkbookRuleOverrideValue = model.WorkbookRuleOverrideValue;
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ConditionType = model.ConditionType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var ProductCategory = model.ProductCategory;
    var FeeType = model.FeeType;
    var FrequencyType = model.FrequencyType;
    var ApplicationHistoryPublicationType = model.ApplicationHistoryPublicationType;
    var ApplicationHistoryType = model.ApplicationHistoryType;
    var ApplicationPartyRoleType = model.ApplicationPartyRoleType;
    var CrashReasonType = model.CrashReasonType;
    var AssetType = model.AssetType;
    var Household = model.Household;
    var ConditionVerificationRelationshipType = model.ConditionVerificationRelationshipType;
    var ConditionAutoVerificationStatusType = model.ConditionAutoVerificationStatusType;
    var ConditionCategoryType = model.ConditionCategoryType;
    var ConditionDisplayType = model.ConditionDisplayType;
    var ConditionLevelType = model.ConditionLevelType;
    var ApplicationStageType = model.ApplicationStageType;
    var ConditionTypeScannedDocumentAppliesToType = model.ConditionTypeScannedDocumentAppliesToType;
    var LoanTrackerActionType = model.LoanTrackerActionType;
    var LoanTrackerConditionDisplayType = model.LoanTrackerConditionDisplayType;
    var LoanTrackerDocumentRequirementType = model.LoanTrackerDocumentRequirementType;
    var LoanTrackerDocumentUploadType = model.LoanTrackerDocumentUploadType;
    var LoanTrackerForm = model.LoanTrackerForm;
    var LoanTrackerToolTip = model.LoanTrackerToolTip;
    var SubConditionLevelType = model.SubConditionLevelType;
    var CreditReportType = model.CreditReportType;
    var DepositType = model.DepositType;
    var RepaymentAmountType = model.RepaymentAmountType;
    var DocumentOrderStatusType = model.DocumentOrderStatusType;
    var DocumentOrderHistoryAuditKeyType = model.DocumentOrderHistoryAuditKeyType;
    var CurrencyType = model.CurrencyType;
    var EmploymentBasisType = model.EmploymentBasisType;
    var EmploymentCategoryType = model.EmploymentCategoryType;
    var EmploymentStatusType = model.EmploymentStatusType;
    var TermType = model.TermType;
    var LoanPurposeType = model.LoanPurposeType;
    var Security = model.Security;
    var PremisesLocationType = model.PremisesLocationType;
    var FinalApprovalProcessType = model.FinalApprovalProcessType;
    var IncomeSourceType = model.IncomeSourceType;
    var InsuranceType = model.InsuranceType;
    var LiabilityType = model.LiabilityType;
    var RateAdjustmentReasonType = model.RateAdjustmentReasonType;
    var MotorVehicleSecurityType = model.MotorVehicleSecurityType;
    var AccessoryCategoryType = model.AccessoryCategoryType;
    var AccessoryType = model.AccessoryType;
    var TraxTreeValidationOutcome = model.TraxTreeValidationOutcome;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;
    var TriggerAction = model.TriggerAction;
    var TriggerPoint = model.TriggerPoint;
    var ValuationType = model.ValuationType;
    var WorkbookRuleType = model.WorkbookRuleType;

    PartyRole.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionApprovaltopublishbypartyroleFks',
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationContainer, {
        as: 'ApplicationContainerCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationContainerFee, {
        as: 'ApplicationContainerFeeCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationContainerFee, {
        as: 'ApplicationContainerFeeLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationHistory, {
        as: 'ApplicationHistoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationHistory, {
        as: 'ApplicationHistoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRolePartyroleFks',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationSecurityOutgoingFinance, {
        as: 'ApplicationSecurityOutgoingFinanceCreatedpartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationSecurityOutgoingFinance, {
        as: 'ApplicationSecurityOutgoingFinanceLastupdatedpartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationServiceabilityHistory, {
        as: 'ApplicationServiceabilityHistoryExecutedbypartyroleFks',
        foreignKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationServiceabilityHistory, {
        as: 'ApplicationServiceabilityHistoryPartyroleFks',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationStatusHistory, {
        as: 'ApplicationStatusHistoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ApplicationStatusHistory, {
        as: 'ApplicationStatusHistoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Asset, {
        as: 'AssetCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Asset, {
        as: 'AssetLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(AutoAssessmentPolicyOwner, {
        as: 'AutoAssessmentPolicyOwnerPartyroleFks',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(AutomatedValuationModelDetail, {
        as: 'AutomatedValuationModelDetailCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(AutomatedValuationModelDetail, {
        as: 'AutomatedValuationModelDetailUpdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(CreditReport, {
        as: 'CreditReportCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(CreditReport, {
        as: 'CreditReportLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Deposit, {
        as: 'DepositCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Deposit, {
        as: 'DepositLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DirectDebit, {
        as: 'DirectDebitCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DirectDebit, {
        as: 'DirectDebitLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistory, {
        as: 'DocumentOrderHistoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistory, {
        as: 'DocumentOrderHistoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DOHApplicationPartyRoleCreatedpartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DOHApplicationPartyRoleLastupdatedpartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryApplicationPartyRoleStatus, {
        as: 'DOApplicationPartyRoleStatusCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryApplicationPartyRoleStatus, {
        as: 'DOHApplicationPartyRoleStatusLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryApplicationPartyRoleViewer, {
        as: 'DOHApplicationPartyRoleViewerCreatedpartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryApplicationPartyRoleViewer, {
        as: 'DOHApplicationPartyRoleViewerLastupdatedpartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryAuditEvent, {
        as: 'DocumentOrderHistoryAuditCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderHistoryAuditEventDatum, {
        as: 'DOHAEventDataCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderStatusHistory, {
        as: 'DocumentOrderStatusHistoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(DocumentOrderStatusHistory, {
        as: 'DocumentOrderStatusHistoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Employment, {
        as: 'EmploymentCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Employment, {
        as: 'EmploymentLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(EquipmentFinanceLoanApplication, {
        as: 'EquipmentFinanceLoanApplicationCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(EquipmentFinanceLoanApplication, {
        as: 'EquipmentFinanceLoanApplicationLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(EquipmentFinanceSecurity, {
        as: 'EquipmentFinanceSecurityLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(EquipmentFinanceSecuritySerialLocation, {
        as: 'EquipmentFinanceSecuritySerialLocationCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(EquipmentFinanceSecuritySerialLocation, {
        as: 'EquipmentFinanceSecuritySerialLocationLastupdatedbypartyroleFs',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(FeeTypeProductCategory, {
        as: 'FeeTypeProductCategoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(FeeTypeProductCategory, {
        as: 'FeeTypeProductCategoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(FinalApprovalProcessHistory, {
        as: 'FinalApprovalProcessHistoryCompletedpartyroles',
        foreignKey: 'CompletedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(FinalApprovalProcessHistory, {
        as: 'FinalApprovalProcessHistoryCreatedpartyroles',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Income, {
        as: 'IncomeCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Income, {
        as: 'IncomeLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Insurance, {
        as: 'InsuranceCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Insurance, {
        as: 'InsuranceLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Invoice, {
        as: 'InvoiceCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Invoice, {
        as: 'InvoiceLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Liability, {
        as: 'LiabilityCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Liability, {
        as: 'LiabilityCreditproviderFks',
        foreignKey: 'CreditProviderID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Liability, {
        as: 'LiabilityLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Loan, {
        as: 'LoanCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(LoanPurpose, {
        as: 'LoanPurposeCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(LoanPurpose, {
        as: 'LoanPurposeLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(LoanXrefHistory, {
        as: 'LoanXrefHistoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(LoanXrefHistory, {
        as: 'LoanXrefHistoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(LoanXrefPoolHistory, {
        as: 'LoanXrefPoolHistoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(LoanXrefPoolHistory, {
        as: 'LoanXrefPoolHistoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(MotorVehicleLoanApplication, {
        as: 'MotorVehicleLoanApplicationCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(MotorVehicleLoanApplication, {
        as: 'MotorVehicleLoanApplicationLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(MotorVehicleRateAdjustmentHistory, {
        as: 'MotorVehicleRateAdjustmentHistoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(MotorVehicleSecurity, {
        as: 'MotorVehicleSecurityLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(PersonalLoanApplication, {
        as: 'PersonalLoanApplicationCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(PersonalLoanApplication, {
        as: 'PersonalLoanApplicationLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Pool, {
        as: 'PoolCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Pool, {
        as: 'PoolLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Quote, {
        as: 'QuoteCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Quote, {
        as: 'QuoteLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Quote, {
        as: 'QuoteOwnedbypartyroleFks',
        foreignKey: 'OwnedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(SecurityAccessory, {
        as: 'SecurityAccessoryCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(SecurityAccessory, {
        as: 'SecurityAccessoryLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(SecuritySerialLocation, {
        as: 'SecuritySerialLocationCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(SecuritySerialLocation, {
        as: 'SecuritySerialLocationLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ServiceabilityCalculatorVersion, {
        as: 'ServiceabilityCalculatorVersionCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ServiceabilityCalculatorVersion, {
        as: 'ServiceabilityCalculatorVersionLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ServiceabilityCalculatorVersion, {
        as: 'ServiceabilityCalculatorVersionPartyroleFks',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ServiceabilityHistory, {
        as: 'FKServiceabilityhistorypartyroles',
        foreignKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(TraxTreeValidationResult, {
        as: 'TraxTreeValidationResultCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Trigger, {
        as: 'TriggerCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Trigger, {
        as: 'TriggerLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Valuation, {
        as: 'ValuationCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Valuation, {
        as: 'ValuationLastupdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ValuationPropertyType, {
        as: 'ValuationPropertyTypeCreatedbypartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(ValuationPropertyType, {
        as: 'ValuationPropertyTypeUpdatedbypartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Workbook, {
        as: 'WorkbookCreatedpartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(Workbook, {
        as: 'WorkbookOwnerpartyroleFks',
        foreignKey: 'OwnerPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(WorkbookHistory, {
        as: 'WorkbookHistoryExecutedpartyroleFks',
        foreignKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(WorkbookRuleOverrideValue, {
        as: 'WorkbookRuleOverrideValueCreatedpartyroleFks',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.hasMany(WorkbookRuleOverrideValue, {
        as: 'WorkbookRuleOverrideValueLastupdatedpartyroleFks',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'ApprovalToPublishByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ProductCategory, {
        as: 'ApplicationContainerProductCategories',
        through: ApplicationContainer,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationContainerFeeApplicationContainers',
        through: ApplicationContainerFee,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FeeType, {
        as: 'ApplicationContainerFeeFeeTypes',
        through: ApplicationContainerFee,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'ApplicationContainerFeeFrequencyTypes',
        through: ApplicationContainerFee,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeLastUpdatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationContainerFeeApplicationContainers',
        through: ApplicationContainerFee,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeCreatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FeeType, {
        as: 'ApplicationContainerFeeFeeTypes',
        through: ApplicationContainerFee,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'ApplicationContainerFeeFrequencyTypes',
        through: ApplicationContainerFee,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationHistoryApplicationContainers',
        through: ApplicationHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationHistoryPublicationType, {
        as: 'ApplicationHistoryApplicationHistoryPublicationTypes',
        through: ApplicationHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationHistoryPublicationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationHistoryType, {
        as: 'ApplicationHistoryApplicationHistoryTypes',
        through: ApplicationHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationHistoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryLastUpdatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationHistoryApplicationContainers',
        through: ApplicationHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationHistoryPublicationType, {
        as: 'ApplicationHistoryApplicationHistoryPublicationTypes',
        through: ApplicationHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationHistoryPublicationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationHistoryType, {
        as: 'ApplicationHistoryApplicationHistoryTypes',
        through: ApplicationHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationHistoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryCreatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationPartyRoleApplicationContainers',
        through: ApplicationPartyRole,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRoleType, {
        as: 'ApplicationPartyRoleApplicationPartyRoleTypes',
        through: ApplicationPartyRole,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleLastUpdatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRolePartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationPartyRoleApplicationContainers',
        through: ApplicationPartyRole,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRoleType, {
        as: 'ApplicationPartyRoleApplicationPartyRoleTypes',
        through: ApplicationPartyRole,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleCreatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRolePartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationPartyRoleApplicationContainers',
        through: ApplicationPartyRole,
        foreignKey: 'PartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRoleType, {
        as: 'ApplicationPartyRoleApplicationPartyRoleTypes',
        through: ApplicationPartyRole,
        foreignKey: 'PartyRoleID',
        otherKey: 'ApplicationPartyRoleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleCreatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'PartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleLastUpdatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'PartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceApplicationPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationSecurityOutgoingFinanceApplicationSecurities',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceLastUpdatedByPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceApplicationPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationSecurityOutgoingFinanceApplicationSecurities',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationSecurityOutgoingFinanceCreatedByPartyRoles',
        through: ApplicationSecurityOutgoingFinance,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationServiceabilityHistoryApplicationContainers',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ExecutedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationServiceabilityHistoryPartyRoles',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ExecutedByPartyRoleID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ServiceabilityCalculatorVersion, {
        as: 'ApplicationServiceabilityHistoryServiceabilityCalculatorVersions',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ExecutedByPartyRoleID',
        otherKey: 'ServiceabilityCalculatorVersionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationServiceabilityHistoryApplicationContainers',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'PartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationServiceabilityHistoryExecutedByPartyRoles',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'PartyRoleID',
        otherKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ServiceabilityCalculatorVersion, {
        as: 'ApplicationServiceabilityHistoryServiceabilityCalculatorVersions',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'PartyRoleID',
        otherKey: 'ServiceabilityCalculatorVersionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationStatusHistoryApplicationContainers',
        through: ApplicationStatusHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusHistoryApplicationStatusTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CrashReasonType, {
        as: 'ApplicationStatusHistoryCrashReasonTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryLastUpdatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ApplicationStatusHistoryApplicationContainers',
        through: ApplicationStatusHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusHistoryApplicationStatusTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CrashReasonType, {
        as: 'ApplicationStatusHistoryCrashReasonTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryCreatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(AssetType, {
        as: 'AssetAssetTypes',
        through: Asset,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'AssetTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Household, {
        as: 'AssetHouseholds',
        through: Asset,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'AssetLastUpdatedByPartyRoles',
        through: Asset,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(AssetType, {
        as: 'AssetAssetTypes',
        through: Asset,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'AssetTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'AssetCreatedByPartyRoles',
        through: Asset,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Household, {
        as: 'AssetHouseholds',
        through: Asset,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ValuationPropertyType, {
        as: 'AutomatedValuationModelDetailPropertyTypes',
        through: AutomatedValuationModelDetail,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'PropertyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'AutomatedValuationModelDetailLastUpdatedByPartyRoles',
        through: AutomatedValuationModelDetail,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'AutomatedValuationModelDetailCreatedByPartyRoles',
        through: AutomatedValuationModelDetail,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ValuationPropertyType, {
        as: 'AutomatedValuationModelDetailPropertyTypes',
        through: AutomatedValuationModelDetail,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'PropertyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationInitialVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionLevelType, {
        as: 'ConditionTypeConfigurationConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationStageType, {
        as: 'ConditionTypeConfigurationConditionStageTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationLastUpdatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerConditionDisplayType, {
        as: 'ConditionTypeConfigurationLoanTrackerConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ProductCategory, {
        as: 'ConditionTypeConfigurationProductCategories',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(SubConditionLevelType, {
        as: 'ConditionTypeConfigurationSubConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionVerificationRelationshipType, {
        as: 'ConditionTypeConfigurationConditionVerificationRelationshipTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionVerificationRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionVerificationStatusType, {
        as: 'ConditionTypeConfigurationInitialVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'InitialVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionAutoVerificationStatusType, {
        as: 'ConditionTypeConfigurationConditionAutoVerificationStatusTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionAutoVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionCategoryType, {
        as: 'ConditionTypeConfigurationConditionCategoryTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionDisplayType, {
        as: 'ConditionTypeConfigurationConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionLevelType, {
        as: 'ConditionTypeConfigurationConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationStageType, {
        as: 'ConditionTypeConfigurationConditionStageTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionTypeScannedDocumentAppliesToType, {
        as: 'ConditionTypeConfigurationConditionTypeScannedDocumentAppliesToTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionTypeScannedDocumentAppliesToTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ConditionType, {
        as: 'ConditionTypeConfigurationConditionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ConditionTypeConfigurationCreatedByPartyRoles',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerActionType, {
        as: 'ConditionTypeConfigurationLoanTrackerActionTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTrackerActionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerConditionDisplayType, {
        as: 'ConditionTypeConfigurationLoanTrackerConditionDisplayTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTrackerConditionDisplayTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerDocumentRequirementType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentRequirementTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTrackerDocumentRequirementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerDocumentUploadType, {
        as: 'ConditionTypeConfigurationLoanTrackerDocumentUploadTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTrackerDocumentUploadTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerForm, {
        as: 'ConditionTypeConfigurationLoanTrackerForms',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTrackerFormID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanTrackerToolTip, {
        as: 'ConditionTypeConfigurationLoanTrackerToolTips',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTrackerToolTipID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ProductCategory, {
        as: 'ConditionTypeConfigurationProductCategories',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(SubConditionLevelType, {
        as: 'ConditionTypeConfigurationSubConditionLevelTypes',
        through: ConditionTypeConfiguration,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'SubConditionLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'CreditReportApplicationPartyRoles',
        through: CreditReport,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CreditReportType, {
        as: 'CreditReportCreditReportTypes',
        through: CreditReport,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CreditReportTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'CreditReportLastUpdatedByPartyRoles',
        through: CreditReport,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'CreditReportApplicationPartyRoles',
        through: CreditReport,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'CreditReportCreatedByPartyRoles',
        through: CreditReport,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CreditReportType, {
        as: 'CreditReportCreditReportTypes',
        through: CreditReport,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreditReportTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DepositType, {
        as: 'DepositDepositTypes',
        through: Deposit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DepositTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DepositLastUpdatedByPartyRoles',
        through: Deposit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'DepositLoans',
        through: Deposit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DepositCreatedByPartyRoles',
        through: Deposit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DepositType, {
        as: 'DepositDepositTypes',
        through: Deposit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'DepositTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'DepositLoans',
        through: Deposit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'DirectDebitApplicationContainers',
        through: DirectDebit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'DirectDebitFrequencyTypes',
        through: DirectDebit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DirectDebitLastUpdatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'DirectDebitLoans',
        through: DirectDebit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(RepaymentAmountType, {
        as: 'DirectDebitRepaymentAmountTypes',
        through: DirectDebit,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'RepaymentAmountTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'DirectDebitApplicationContainers',
        through: DirectDebit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DirectDebitCreatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'DirectDebitFrequencyTypes',
        through: DirectDebit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'DirectDebitLoans',
        through: DirectDebit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(RepaymentAmountType, {
        as: 'DirectDebitRepaymentAmountTypes',
        through: DirectDebit,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'RepaymentAmountTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'DocumentOrderHistoryApplicationContainers',
        through: DocumentOrderHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryLastUpdatedByPartyRoles',
        through: DocumentOrderHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'DocumentOrderHistoryApplicationContainers',
        through: DocumentOrderHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryCreatedByPartyRoles',
        through: DocumentOrderHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistory, {
        as: 'DocumentOrderHistoryApplicationPartyRoleDocumentOrderHistories',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistory, {
        as: 'DocumentOrderHistoryApplicationPartyRoleDocumentOrderHistories',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusDocumentOrderHistoryApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderStatusType, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusDocumentOrderStatusTypes',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusDocumentOrderHistoryApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderStatusType, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusDocumentOrderStatusTypes',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleViewerDocumentOrderHistoryApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleViewer,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleViewerLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleViewer,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleViewerCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleViewer,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleViewerDocumentOrderHistoryApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleViewer,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistory, {
        as: 'DocumentOrderHistoryAuditEventDocumentOrderHistories',
        through: DocumentOrderHistoryAuditEvent,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistoryAuditEvent, {
        as: 'DocumentOrderHistoryAuditEventDatumDocumentOrderHistoryAuditEvents',
        through: DocumentOrderHistoryAuditEventDatum,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryAuditEventID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistoryAuditKeyType, {
        as: 'DocumentOrderHistoryAuditEventDatumDocumentOrderHistoryAuditKeyTypes',
        through: DocumentOrderHistoryAuditEventDatum,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryAuditKeyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistory, {
        as: 'DocumentOrderStatusHistoryDocumentOrderHistories',
        through: DocumentOrderStatusHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderStatusType, {
        as: 'DocumentOrderStatusHistoryDocumentOrderStatusTypes',
        through: DocumentOrderStatusHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderStatusHistoryLastUpdatedByPartyRoles',
        through: DocumentOrderStatusHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderStatusHistoryCreatedByPartyRoles',
        through: DocumentOrderStatusHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderHistory, {
        as: 'DocumentOrderStatusHistoryDocumentOrderHistories',
        through: DocumentOrderStatusHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(DocumentOrderStatusType, {
        as: 'DocumentOrderStatusHistoryDocumentOrderStatusTypes',
        through: DocumentOrderStatusHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'EmploymentApplicationPartyRoles',
        through: Employment,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CurrencyType, {
        as: 'EmploymentCurrencyTypes',
        through: Employment,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(EmploymentBasisType, {
        as: 'EmploymentBasisTypes',
        through: Employment,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(EmploymentCategoryType, {
        as: 'EmploymentCategoryTypes',
        through: Employment,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(EmploymentStatusType, {
        as: 'EmploymentStatusTypes',
        through: Employment,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'EmploymentLastUpdatedByPartyRoles',
        through: Employment,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'EmploymentApplicationPartyRoles',
        through: Employment,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'EmploymentCreatedByPartyRoles',
        through: Employment,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CurrencyType, {
        as: 'EmploymentCurrencyTypes',
        through: Employment,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(EmploymentBasisType, {
        as: 'EmploymentBasisTypes',
        through: Employment,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(EmploymentCategoryType, {
        as: 'EmploymentCategoryTypes',
        through: Employment,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(EmploymentStatusType, {
        as: 'EmploymentStatusTypes',
        through: Employment,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'EquipmentFinanceLoanApplicationApplicationContainers',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationLastUpdatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TermType, {
        as: 'EquipmentFinanceLoanApplicationLoanTermTypes',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'EquipmentFinanceLoanApplicationLoans',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'EquipmentFinanceLoanApplicationApplicationContainers',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationCreatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TermType, {
        as: 'EquipmentFinanceLoanApplicationLoanTermTypes',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'EquipmentFinanceLoanApplicationLoans',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'EquipmentFinanceSecurityEquipmentFinanceSecurityTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'EquipmentFinanceSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'EquipmentFinanceSecurityFinanceTermFrequencyTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'EquipmentFinanceSecurityLoans',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Security, {
        as: 'EquipmentFinanceSecuritySecurities',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'EquipmentFinanceSecuritySerialLocationApplicationSecurities',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecuritySerialLocationLastUpdatedByPartyRoles',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PremisesLocationType, {
        as: 'EquipmentFinanceSecuritySerialLocationPremisesLocationTypes',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'EquipmentFinanceSecuritySerialLocationApplicationSecurities',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecuritySerialLocationCreatedByPartyRoles',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PremisesLocationType, {
        as: 'EquipmentFinanceSecuritySerialLocationPremisesLocationTypes',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FeeType, {
        as: 'FeeTypeProductCategoryFeeTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'FeeTypeProductCategoryFrequencyTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryLastUpdatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ProductCategory, {
        as: 'FeeTypeProductCategoryProductCategories',
        through: FeeTypeProductCategory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryCreatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FeeType, {
        as: 'FeeTypeProductCategoryFeeTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'FeeTypeProductCategoryFrequencyTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ProductCategory, {
        as: 'FeeTypeProductCategoryProductCategories',
        through: FeeTypeProductCategory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'FinalApprovalProcessHistoryApplicationContainers',
        through: FinalApprovalProcessHistory,
        foreignKey: 'CompletedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'FinalApprovalProcessHistoryCreatedByPartyRoles',
        through: FinalApprovalProcessHistory,
        foreignKey: 'CompletedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FinalApprovalProcessType, {
        as: 'FinalApprovalProcessHistoryFinalApprovalProcessTypes',
        through: FinalApprovalProcessHistory,
        foreignKey: 'CompletedByPartyRoleID',
        otherKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'FinalApprovalProcessHistoryApplicationContainers',
        through: FinalApprovalProcessHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'FinalApprovalProcessHistoryCompletedByPartyRoles',
        through: FinalApprovalProcessHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CompletedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FinalApprovalProcessType, {
        as: 'FinalApprovalProcessHistoryFinalApprovalProcessTypes',
        through: FinalApprovalProcessHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'IncomeApplicationPartyRoles',
        through: Income,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CurrencyType, {
        as: 'IncomeCurrencyTypes',
        through: Income,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'IncomeFrequencyTypes',
        through: Income,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'IncomeLastUpdatedByPartyRoles',
        through: Income,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(IncomeSourceType, {
        as: 'IncomeSourceTypes',
        through: Income,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'SourceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'IncomeApplicationPartyRoles',
        through: Income,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'IncomeCreatedByPartyRoles',
        through: Income,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CurrencyType, {
        as: 'IncomeCurrencyTypes',
        through: Income,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'IncomeFrequencyTypes',
        through: Income,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(IncomeSourceType, {
        as: 'IncomeSourceTypes',
        through: Income,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'SourceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'InsuranceApplicationSecurities',
        through: Insurance,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(InsuranceType, {
        as: 'InsuranceInsuranceTypes',
        through: Insurance,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'InsuranceLastUpdatedByPartyRoles',
        through: Insurance,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'InsuranceApplicationSecurities',
        through: Insurance,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'InsuranceCreatedByPartyRoles',
        through: Insurance,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(InsuranceType, {
        as: 'InsuranceInsuranceTypes',
        through: Insurance,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'InvoiceLastUpdatedByPartyRoles',
        through: Invoice,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'InvoiceCreatedByPartyRoles',
        through: Invoice,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LiabilityCreditProviders',
        through: Liability,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CreditProviderID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Household, {
        as: 'LiabilityHouseholds',
        through: Liability,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LiabilityLastUpdatedByPartyRoles',
        through: Liability,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LiabilityType, {
        as: 'LiabilityLiabilityTypes',
        through: Liability,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LiabilityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'LiabilityRepaymentFrequencyTypes',
        through: Liability,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'RepaymentFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LiabilityCreatedByPartyRoles',
        through: Liability,
        foreignKey: 'CreditProviderID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Household, {
        as: 'LiabilityHouseholds',
        through: Liability,
        foreignKey: 'CreditProviderID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LiabilityLastUpdatedByPartyRoles',
        through: Liability,
        foreignKey: 'CreditProviderID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LiabilityType, {
        as: 'LiabilityLiabilityTypes',
        through: Liability,
        foreignKey: 'CreditProviderID',
        otherKey: 'LiabilityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'LiabilityRepaymentFrequencyTypes',
        through: Liability,
        foreignKey: 'CreditProviderID',
        otherKey: 'RepaymentFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LiabilityCreatedByPartyRoles',
        through: Liability,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LiabilityCreditProviders',
        through: Liability,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreditProviderID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Household, {
        as: 'LiabilityHouseholds',
        through: Liability,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LiabilityType, {
        as: 'LiabilityLiabilityTypes',
        through: Liability,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LiabilityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'LiabilityRepaymentFrequencyTypes',
        through: Liability,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'RepaymentFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'LoanApplicationContainers',
        through: Loan,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LoanPurposeLastUpdatedByPartyRoles',
        through: LoanPurpose,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'LoanPurposeLoanPurposeTypes',
        through: LoanPurpose,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'LoanPurposeLoans',
        through: LoanPurpose,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LoanPurposeCreatedByPartyRoles',
        through: LoanPurpose,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'LoanPurposeLoanPurposeTypes',
        through: LoanPurpose,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'LoanPurposeLoans',
        through: LoanPurpose,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LoanXrefHistoryLastUpdatedByPartyRoles',
        through: LoanXrefHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'LoanXrefHistoryLoans',
        through: LoanXrefHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LoanXrefHistoryCreatedByPartyRoles',
        through: LoanXrefHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'LoanXrefHistoryLoans',
        through: LoanXrefHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LoanXrefPoolHistoryLastUpdatedByPartyRoles',
        through: LoanXrefPoolHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanXrefHistory, {
        as: 'LoanXrefPoolHistoryLoanXrefHistories',
        through: LoanXrefPoolHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanXrefHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Pool, {
        as: 'LoanXrefPoolHistoryPools',
        through: LoanXrefPoolHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'PoolID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'LoanXrefPoolHistoryCreatedByPartyRoles',
        through: LoanXrefPoolHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanXrefHistory, {
        as: 'LoanXrefPoolHistoryLoanXrefHistories',
        through: LoanXrefPoolHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanXrefHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Pool, {
        as: 'LoanXrefPoolHistoryPools',
        through: LoanXrefPoolHistory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'PoolID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'MotorVehicleLoanApplicationApplicationContainers',
        through: MotorVehicleLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationLastUpdatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TermType, {
        as: 'MotorVehicleLoanApplicationLoanTermTypes',
        through: MotorVehicleLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'MotorVehicleLoanApplicationLoans',
        through: MotorVehicleLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'MotorVehicleLoanApplicationApplicationContainers',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationCreatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TermType, {
        as: 'MotorVehicleLoanApplicationLoanTermTypes',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'MotorVehicleLoanApplicationLoans',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'MotorVehicleRateAdjustmentHistoryApplicationContainers',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'MotorVehicleRateAdjustmentHistoryLoans',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(RateAdjustmentReasonType, {
        as: 'MotorVehicleRateAdjustmentHistoryReasonTypes',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(FrequencyType, {
        as: 'MotorVehicleSecurityFinanceTermFrequencyTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'MotorVehicleSecurityLoans',
        through: MotorVehicleSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(MotorVehicleSecurityType, {
        as: 'MotorVehicleSecurityMotorVehicleSecurityTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'MotorVehicleSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Security, {
        as: 'MotorVehicleSecuritySecurities',
        through: MotorVehicleSecurity,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'PersonalLoanApplicationApplicationContainers',
        through: PersonalLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationLastUpdatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'PersonalLoanApplicationLoanPurposeTypes',
        through: PersonalLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'PersonalLoanApplicationLoans',
        through: PersonalLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TermType, {
        as: 'PersonalLoanApplicationLoanTermTypes',
        through: PersonalLoanApplication,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'PersonalLoanApplicationApplicationContainers',
        through: PersonalLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationCreatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'PersonalLoanApplicationLoanPurposeTypes',
        through: PersonalLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Loan, {
        as: 'PersonalLoanApplicationLoans',
        through: PersonalLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TermType, {
        as: 'PersonalLoanApplicationLoanTermTypes',
        through: PersonalLoanApplication,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'PoolLastUpdatedByPartyRoles',
        through: Pool,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'PoolCreatedByPartyRoles',
        through: Pool,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'QuoteLastUpdatedByPartyRoles',
        through: Quote,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'QuoteOwnedByPartyRoles',
        through: Quote,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'OwnedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'QuoteQuoteTypes',
        through: Quote,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'QuoteTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(WorkbookHistory, {
        as: 'QuoteWorkBookHistories',
        through: Quote,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'WorkBookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'QuoteCreatedByPartyRoles',
        through: Quote,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'QuoteOwnedByPartyRoles',
        through: Quote,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'OwnedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'QuoteQuoteTypes',
        through: Quote,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'QuoteTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(WorkbookHistory, {
        as: 'QuoteWorkBookHistories',
        through: Quote,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'WorkBookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'QuoteCreatedByPartyRoles',
        through: Quote,
        foreignKey: 'OwnedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'QuoteLastUpdatedByPartyRoles',
        through: Quote,
        foreignKey: 'OwnedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(LoanPurposeType, {
        as: 'QuoteQuoteTypes',
        through: Quote,
        foreignKey: 'OwnedByPartyRoleID',
        otherKey: 'QuoteTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(WorkbookHistory, {
        as: 'QuoteWorkBookHistories',
        through: Quote,
        foreignKey: 'OwnedByPartyRoleID',
        otherKey: 'WorkBookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(AccessoryCategoryType, {
        as: 'SecurityAccessoryAccessoryCategories',
        through: SecurityAccessory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'AccessoryCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(AccessoryType, {
        as: 'SecurityAccessoryAccessoryTypes',
        through: SecurityAccessory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'AccessoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryLastUpdatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Security, {
        as: 'SecurityAccessorySecurities',
        through: SecurityAccessory,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(AccessoryCategoryType, {
        as: 'SecurityAccessoryAccessoryCategories',
        through: SecurityAccessory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'AccessoryCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(AccessoryType, {
        as: 'SecurityAccessoryAccessoryTypes',
        through: SecurityAccessory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'AccessoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryCreatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Security, {
        as: 'SecurityAccessorySecurities',
        through: SecurityAccessory,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'SecuritySerialLocationApplicationSecurities',
        through: SecuritySerialLocation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'SecuritySerialLocationLastUpdatedByPartyRoles',
        through: SecuritySerialLocation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PremisesLocationType, {
        as: 'SecuritySerialLocationPremisesLocationTypes',
        through: SecuritySerialLocation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'SecuritySerialLocationApplicationSecurities',
        through: SecuritySerialLocation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'SecuritySerialLocationCreatedByPartyRoles',
        through: SecuritySerialLocation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PremisesLocationType, {
        as: 'SecuritySerialLocationPremisesLocationTypes',
        through: SecuritySerialLocation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ServiceabilityCalculatorVersionLastUpdatedByPartyRoles',
        through: ServiceabilityCalculatorVersion,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ServiceabilityCalculatorVersionPartyRoles',
        through: ServiceabilityCalculatorVersion,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ServiceabilityCalculatorVersionCreatedByPartyRoles',
        through: ServiceabilityCalculatorVersion,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ServiceabilityCalculatorVersionPartyRoles',
        through: ServiceabilityCalculatorVersion,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ServiceabilityCalculatorVersionCreatedByPartyRoles',
        through: ServiceabilityCalculatorVersion,
        foreignKey: 'PartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ServiceabilityCalculatorVersionLastUpdatedByPartyRoles',
        through: ServiceabilityCalculatorVersion,
        foreignKey: 'PartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'ServiceabilityHistoryApplicationContainers',
        through: ServiceabilityHistory,
        foreignKey: 'ExecutedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Workbook, {
        as: 'ServiceabilityHistoryWorkbooks',
        through: ServiceabilityHistory,
        foreignKey: 'ExecutedByPartyRoleID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'TraxTreeValidationResultApplicationContainers',
        through: TraxTreeValidationResult,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationPartyRole, {
        as: 'TraxTreeValidationResultApplicationPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'TraxTreeValidationResultApplicationSecurities',
        through: TraxTreeValidationResult,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TraxTreeValidationOutcome, {
        as: 'TraxTreeValidationResultValidationOutcomes',
        through: TraxTreeValidationResult,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ValidationOutcomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationResultValidationPlugins',
        through: TraxTreeValidationResult,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationResultValidationSuites',
        through: TraxTreeValidationResult,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Trigger, {
        as: 'TraxTreeValidationResultTriggers',
        through: TraxTreeValidationResult,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CurrencyType, {
        as: 'TriggerCurrencyTypes',
        through: Trigger,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'TriggerLastUpdatedByPartyRoles',
        through: Trigger,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Trigger, {
        as: 'TriggerNextTriggers',
        through: Trigger,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'NextTriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TriggerAction, {
        as: 'TriggerTriggerActions',
        through: Trigger,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TriggerPoint, {
        as: 'TriggerTriggerPoints',
        through: Trigger,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'TriggerCreatedByPartyRoles',
        through: Trigger,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(CurrencyType, {
        as: 'TriggerCurrencyTypes',
        through: Trigger,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Trigger, {
        as: 'TriggerNextTriggers',
        through: Trigger,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'NextTriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TriggerAction, {
        as: 'TriggerTriggerActions',
        through: Trigger,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(TriggerPoint, {
        as: 'TriggerTriggerPoints',
        through: Trigger,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ValuationApplicationSecurities',
        through: Valuation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ValuationLastUpdatedByPartyRoles',
        through: Valuation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ValuationType, {
        as: 'ValuationValuationTypes',
        through: Valuation,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'ValuationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationSecurity, {
        as: 'ValuationApplicationSecurities',
        through: Valuation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ValuationCreatedByPartyRoles',
        through: Valuation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ValuationType, {
        as: 'ValuationValuationTypes',
        through: Valuation,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'ValuationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ValuationPropertyTypeLastUpdatedByPartyRoles',
        through: ValuationPropertyType,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'ValuationPropertyTypeCreatedByPartyRoles',
        through: ValuationPropertyType,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'WorkbookOwnerPartyRoles',
        through: Workbook,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'OwnerPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'WorkbookCreatedByPartyRoles',
        through: Workbook,
        foreignKey: 'OwnerPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(ApplicationContainer, {
        as: 'WorkbookHistoryApplicationContainers',
        through: WorkbookHistory,
        foreignKey: 'ExecutedByPartyRoleID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(Workbook, {
        as: 'WorkbookHistoryWorkbooks',
        through: WorkbookHistory,
        foreignKey: 'ExecutedByPartyRoleID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'WorkbookRuleOverrideValueLastUpdatedByPartyRoles',
        through: WorkbookRuleOverrideValue,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(WorkbookRuleType, {
        as: 'WorkbookRuleOverrideValueWorkbookRuleTypes',
        through: WorkbookRuleOverrideValue,
        foreignKey: 'CreatedByPartyRoleID',
        otherKey: 'WorkbookRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(PartyRole, {
        as: 'WorkbookRuleOverrideValueCreatedByPartyRoles',
        through: WorkbookRuleOverrideValue,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PartyRole.belongsToMany(WorkbookRuleType, {
        as: 'WorkbookRuleOverrideValueWorkbookRuleTypes',
        through: WorkbookRuleOverrideValue,
        foreignKey: 'LastUpdatedByPartyRoleID',
        otherKey: 'WorkbookRuleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
