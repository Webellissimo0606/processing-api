'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationContainer', {
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
        isStaffApplication: {
            type: DataTypes.BOOLEAN,
            field: 'IsStaffApplication',
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
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationContainer',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationCondition = model.ApplicationCondition;
    var ApplicationContainerFee = model.ApplicationContainerFee;
    var ApplicationHistory = model.ApplicationHistory;
    var ApplicationLVR = model.ApplicationLVR;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationServiceabilityHistory = model.ApplicationServiceabilityHistory;
    var ApplicationStatusHistory = model.ApplicationStatusHistory;
    var DirectDebit = model.DirectDebit;
    var DocumentOrderHistory = model.DocumentOrderHistory;
    var EquipmentFinanceLoanApplication = model.EquipmentFinanceLoanApplication;
    var FinalApprovalProcessHistory = model.FinalApprovalProcessHistory;
    var Loan = model.Loan;
    var MotorVehicleLoanApplication = model.MotorVehicleLoanApplication;
    var MotorVehicleRateAdjustmentHistory = model.MotorVehicleRateAdjustmentHistory;
    var PersonalLoanApplication = model.PersonalLoanApplication;
    var ServiceabilityHistory = model.ServiceabilityHistory;
    var TraxDocumentGeneration = model.TraxDocumentGeneration;
    var TraxTreeValidationResult = model.TraxTreeValidationResult;
    var WorkbookHistory = model.WorkbookHistory;
    var PartyRole = model.PartyRole;
    var ProductCategory = model.ProductCategory;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionType = model.ConditionType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var FeeType = model.FeeType;
    var FrequencyType = model.FrequencyType;
    var ApplicationHistoryPublicationType = model.ApplicationHistoryPublicationType;
    var ApplicationHistoryType = model.ApplicationHistoryType;
    var ApplicationPartyRoleType = model.ApplicationPartyRoleType;
    var Security = model.Security;
    var ServiceabilityCalculatorVersion = model.ServiceabilityCalculatorVersion;
    var CrashReasonType = model.CrashReasonType;
    var RepaymentAmountType = model.RepaymentAmountType;
    var TermType = model.TermType;
    var FinalApprovalProcessType = model.FinalApprovalProcessType;
    var RateAdjustmentReasonType = model.RateAdjustmentReasonType;
    var LoanPurposeType = model.LoanPurposeType;
    var Workbook = model.Workbook;
    var TraxTreeValidationOutcome = model.TraxTreeValidationOutcome;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;
    var Trigger = model.Trigger;

    ApplicationContainer.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ApplicationContainerFee, {
        as: 'FeeApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ApplicationHistory, {
        as: 'ApplicationHistoryApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ApplicationLVR, {
        as: 'ApplicationLVRApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ApplicationSecurity, {
        as: 'ApplicationSecurityApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ApplicationServiceabilityHistory, {
        as: 'ApplicationServiceabilityHistoryApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ApplicationStatusHistory, {
        as: 'ApplicationStatusHistoryApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(DirectDebit, {
        as: 'DirectDebitApplicationcontaineridFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(DocumentOrderHistory, {
        as: 'DocumentOrderHistoryApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(EquipmentFinanceLoanApplication, {
        as: 'EquipmentFinanceLoanApplicationApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(FinalApprovalProcessHistory, {
        as: 'FinalApprovalProcessHistoryApplicationcontainers',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(Loan, {
        as: 'LoanApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(MotorVehicleLoanApplication, {
        as: 'MotorVehicleLoanApplicationApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(MotorVehicleRateAdjustmentHistory, {
        as: 'MotorVehicleRateAdjustmentHistoryApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(PersonalLoanApplication, {
        as: 'PersonalLoanApplicationApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(ServiceabilityHistory, {
        as: 'FKServiceabilityhistoryapplicationcontainers',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(TraxDocumentGeneration, {
        as: 'TraxDocumentGenerationApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(TraxTreeValidationResult, {
        as: 'TraxTreeValidationResultApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.hasMany(WorkbookHistory, {
        as: 'WorkbookHistoryApplicationcontainerFks',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Loan, {
        as: 'ApplicationConditionLoans',
        through: ApplicationCondition,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeCreatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(FeeType, {
        as: 'ApplicationContainerFeeFeeTypes',
        through: ApplicationContainerFee,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(FrequencyType, {
        as: 'ApplicationContainerFeeFrequencyTypes',
        through: ApplicationContainerFee,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeLastUpdatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationHistoryPublicationType, {
        as: 'ApplicationHistoryApplicationHistoryPublicationTypes',
        through: ApplicationHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationHistoryPublicationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationHistoryType, {
        as: 'ApplicationHistoryApplicationHistoryTypes',
        through: ApplicationHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationHistoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryCreatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryLastUpdatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationPartyRoleType, {
        as: 'ApplicationPartyRoleApplicationPartyRoleTypes',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationPartyRoleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleCreatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleLastUpdatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRolePartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Security, {
        as: 'ApplicationSecuritySecurities',
        through: ApplicationSecurity,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationServiceabilityHistoryExecutedByPartyRoles',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationServiceabilityHistoryPartyRoles',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ServiceabilityCalculatorVersion, {
        as: 'ApplicationServiceabilityHistoryServiceabilityCalculatorVersions',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ServiceabilityCalculatorVersionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusHistoryApplicationStatusTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(CrashReasonType, {
        as: 'ApplicationStatusHistoryCrashReasonTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryCreatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryLastUpdatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'DirectDebitCreatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(FrequencyType, {
        as: 'DirectDebitFrequencyTypes',
        through: DirectDebit,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'DirectDebitLastUpdatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Loan, {
        as: 'DirectDebitLoans',
        through: DirectDebit,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(RepaymentAmountType, {
        as: 'DirectDebitRepaymentAmountTypes',
        through: DirectDebit,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'RepaymentAmountTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryCreatedByPartyRoles',
        through: DocumentOrderHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryLastUpdatedByPartyRoles',
        through: DocumentOrderHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationCreatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationLastUpdatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(TermType, {
        as: 'EquipmentFinanceLoanApplicationLoanTermTypes',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Loan, {
        as: 'EquipmentFinanceLoanApplicationLoans',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'FinalApprovalProcessHistoryCompletedByPartyRoles',
        through: FinalApprovalProcessHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CompletedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'FinalApprovalProcessHistoryCreatedByPartyRoles',
        through: FinalApprovalProcessHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(FinalApprovalProcessType, {
        as: 'FinalApprovalProcessHistoryFinalApprovalProcessTypes',
        through: FinalApprovalProcessHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'LoanCreatedByPartyRoles',
        through: Loan,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationCreatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationLastUpdatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(TermType, {
        as: 'MotorVehicleLoanApplicationLoanTermTypes',
        through: MotorVehicleLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Loan, {
        as: 'MotorVehicleLoanApplicationLoans',
        through: MotorVehicleLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'MotorVehicleRateAdjustmentHistoryCreatedByPartyRoles',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Loan, {
        as: 'MotorVehicleRateAdjustmentHistoryLoans',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(RateAdjustmentReasonType, {
        as: 'MotorVehicleRateAdjustmentHistoryReasonTypes',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationCreatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationLastUpdatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(LoanPurposeType, {
        as: 'PersonalLoanApplicationLoanPurposeTypes',
        through: PersonalLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Loan, {
        as: 'PersonalLoanApplicationLoans',
        through: PersonalLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(TermType, {
        as: 'PersonalLoanApplicationLoanTermTypes',
        through: PersonalLoanApplication,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'ServiceabilityHistoryExecutedByPartyRoles',
        through: ServiceabilityHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Workbook, {
        as: 'ServiceabilityHistoryWorkbooks',
        through: ServiceabilityHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationPartyRole, {
        as: 'TraxDocumentGenerationApplicationPartyRoles',
        through: TraxDocumentGeneration,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationSecurity, {
        as: 'TraxDocumentGenerationApplicationSecurities',
        through: TraxDocumentGeneration,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationPartyRole, {
        as: 'TraxTreeValidationResultApplicationPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(ApplicationSecurity, {
        as: 'TraxTreeValidationResultApplicationSecurities',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'TraxTreeValidationResultCreatedByPartyRoles',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(TraxTreeValidationOutcome, {
        as: 'TraxTreeValidationResultValidationOutcomes',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ValidationOutcomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationResultValidationPlugins',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(TraxTreeValidationSuite, {
        as: 'TraxTreeValidationResultValidationSuites',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Trigger, {
        as: 'TraxTreeValidationResultTriggers',
        through: TraxTreeValidationResult,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(PartyRole, {
        as: 'WorkbookHistoryExecutedByPartyRoles',
        through: WorkbookHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationContainer.belongsToMany(Workbook, {
        as: 'WorkbookHistoryWorkbooks',
        through: WorkbookHistory,
        foreignKey: 'ApplicationContainerID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
