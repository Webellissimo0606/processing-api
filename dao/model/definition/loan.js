'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Loan', {
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
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'Loan',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Loan = model.Loan;
    var ApplicationCondition = model.ApplicationCondition;
    var Deposit = model.Deposit;
    var DirectDebit = model.DirectDebit;
    var EquipmentFinanceLoanApplication = model.EquipmentFinanceLoanApplication;
    var EquipmentFinanceLoanApplicationInvoice = model.EquipmentFinanceLoanApplicationInvoice;
    var EquipmentFinanceSecurity = model.EquipmentFinanceSecurity;
    var LoanPurpose = model.LoanPurpose;
    var LoanXrefHistory = model.LoanXrefHistory;
    var MotorVehicleLoanApplication = model.MotorVehicleLoanApplication;
    var MotorVehicleRateAdjustmentHistory = model.MotorVehicleRateAdjustmentHistory;
    var MotorVehicleSecurity = model.MotorVehicleSecurity;
    var PersonalLoanApplication = model.PersonalLoanApplication;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionType = model.ConditionType;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;
    var DepositType = model.DepositType;
    var FrequencyType = model.FrequencyType;
    var RepaymentAmountType = model.RepaymentAmountType;
    var TermType = model.TermType;
    var Invoice = model.Invoice;
    var LoanPurposeType = model.LoanPurposeType;
    var Security = model.Security;
    var RateAdjustmentReasonType = model.RateAdjustmentReasonType;
    var MotorVehicleSecurityType = model.MotorVehicleSecurityType;

    Loan.hasMany(ApplicationCondition, {
        as: 'ApplicationConditionLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(Deposit, {
        as: 'DepositLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(DirectDebit, {
        as: 'DirectDebitLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(EquipmentFinanceLoanApplication, {
        as: 'EquipmentFinanceLoanApplicationLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(EquipmentFinanceLoanApplicationInvoice, {
        as: 'EquipmentFinanceLoanApplicationInvoiceEquipmentfinanceloanappls',
        foreignKey: 'EquipmentFinanceLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(EquipmentFinanceSecurity, {
        as: 'EquipmentFinanceSecurityLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(LoanPurpose, {
        as: 'PurposeLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(LoanXrefHistory, {
        as: 'XrefHistoryLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(MotorVehicleLoanApplication, {
        as: 'MotorVehicleLoanApplicationLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(MotorVehicleRateAdjustmentHistory, {
        as: 'MotorVehicleRateAdjustmentHistoryLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(MotorVehicleSecurity, {
        as: 'MotorVehicleSecurityLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.hasMany(PersonalLoanApplication, {
        as: 'PersonalLoanApplicationLoanFks',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationContainer, {
        as: 'ApplicationConditionApplicationContainers',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationConditionApplicationPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationSecurity, {
        as: 'ApplicationConditionApplicationSecurities',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationConditionApplicationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'ApplicationConditionApprovalToPublishByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ApprovalToPublishByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ConditionTypeConfiguration, {
        as: 'ApplicationConditionConditionTypeConfigurations',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ConditionType, {
        as: 'ApplicationConditionConditionTypes',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ConditionVerificationStatusType, {
        as: 'ApplicationConditionConditionVerificationStatusTypes',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'ApplicationConditionCreatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'ApplicationConditionLastUpdatedByPartyRoles',
        through: ApplicationCondition,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'DepositCreatedByPartyRoles',
        through: Deposit,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(DepositType, {
        as: 'DepositDepositTypes',
        through: Deposit,
        foreignKey: 'LoanID',
        otherKey: 'DepositTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'DepositLastUpdatedByPartyRoles',
        through: Deposit,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationContainer, {
        as: 'DirectDebitApplicationContainers',
        through: DirectDebit,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'DirectDebitCreatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(FrequencyType, {
        as: 'DirectDebitFrequencyTypes',
        through: DirectDebit,
        foreignKey: 'LoanID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'DirectDebitLastUpdatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(RepaymentAmountType, {
        as: 'DirectDebitRepaymentAmountTypes',
        through: DirectDebit,
        foreignKey: 'LoanID',
        otherKey: 'RepaymentAmountTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationContainer, {
        as: 'EquipmentFinanceLoanApplicationApplicationContainers',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationCreatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationLastUpdatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(TermType, {
        as: 'EquipmentFinanceLoanApplicationLoanTermTypes',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(Invoice, {
        as: 'EquipmentFinanceLoanApplicationInvoiceInvoices',
        through: EquipmentFinanceLoanApplicationInvoice,
        foreignKey: 'EquipmentFinanceLoanApplicationID',
        otherKey: 'InvoiceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(LoanPurposeType, {
        as: 'EquipmentFinanceSecurityEquipmentFinanceSecurityTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LoanID',
        otherKey: 'EquipmentFinanceSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(FrequencyType, {
        as: 'EquipmentFinanceSecurityFinanceTermFrequencyTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LoanID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecurityLastUpdatedByPartyRoles',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(Security, {
        as: 'EquipmentFinanceSecuritySecurities',
        through: EquipmentFinanceSecurity,
        foreignKey: 'LoanID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'LoanPurposeCreatedByPartyRoles',
        through: LoanPurpose,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'LoanPurposeLastUpdatedByPartyRoles',
        through: LoanPurpose,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(LoanPurposeType, {
        as: 'LoanPurposeLoanPurposeTypes',
        through: LoanPurpose,
        foreignKey: 'LoanID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'LoanXrefHistoryCreatedByPartyRoles',
        through: LoanXrefHistory,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'LoanXrefHistoryLastUpdatedByPartyRoles',
        through: LoanXrefHistory,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationContainer, {
        as: 'MotorVehicleLoanApplicationApplicationContainers',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationCreatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationLastUpdatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(TermType, {
        as: 'MotorVehicleLoanApplicationLoanTermTypes',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationContainer, {
        as: 'MotorVehicleRateAdjustmentHistoryApplicationContainers',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'MotorVehicleRateAdjustmentHistoryCreatedByPartyRoles',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(RateAdjustmentReasonType, {
        as: 'MotorVehicleRateAdjustmentHistoryReasonTypes',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'LoanID',
        otherKey: 'ReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(FrequencyType, {
        as: 'MotorVehicleSecurityFinanceTermFrequencyTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'LoanID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'MotorVehicleSecurityLastUpdatedByPartyRoles',
        through: MotorVehicleSecurity,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(MotorVehicleSecurityType, {
        as: 'MotorVehicleSecurityMotorVehicleSecurityTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'LoanID',
        otherKey: 'MotorVehicleSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(Security, {
        as: 'MotorVehicleSecuritySecurities',
        through: MotorVehicleSecurity,
        foreignKey: 'LoanID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(ApplicationContainer, {
        as: 'PersonalLoanApplicationApplicationContainers',
        through: PersonalLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationCreatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationLastUpdatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(LoanPurposeType, {
        as: 'PersonalLoanApplicationLoanPurposeTypes',
        through: PersonalLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Loan.belongsToMany(TermType, {
        as: 'PersonalLoanApplicationLoanTermTypes',
        through: PersonalLoanApplication,
        foreignKey: 'LoanID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
