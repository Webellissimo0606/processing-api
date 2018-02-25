'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FrequencyType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        annualConversion: {
            type: DataTypes.INTEGER,
            field: 'AnnualConversion',
            allowNull: true
        },
        weeklyConversion: {
            type: DataTypes.INTEGER,
            field: 'WeeklyConversion',
            allowNull: true
        },
        monthlyConversion: {
            type: DataTypes.DECIMAL(7, 4),
            field: 'MonthlyConversion',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        retailID: {
            type: DataTypes.INTEGER,
            field: 'RetailID',
            allowNull: true
        },
        pMSID: {
            type: DataTypes.INTEGER,
            field: 'PMSID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        ultracsCode: {
            type: DataTypes.STRING,
            field: 'UltracsCode',
            allowNull: true
        },
        ultracsServiceID: {
            type: DataTypes.INTEGER,
            field: 'UltracsServiceID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'FrequencyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var FrequencyType = model.FrequencyType;
    var ApplicationContainerFee = model.ApplicationContainerFee;
    var DirectDebit = model.DirectDebit;
    var EquipmentFinanceSecurity = model.EquipmentFinanceSecurity;
    var FeeTypeProductCategory = model.FeeTypeProductCategory;
    var Income = model.Income;
    var Liability = model.Liability;
    var MotorVehicleSecurity = model.MotorVehicleSecurity;
    var TermType = model.TermType;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var FeeType = model.FeeType;
    var Loan = model.Loan;
    var RepaymentAmountType = model.RepaymentAmountType;
    var LoanPurposeType = model.LoanPurposeType;
    var Security = model.Security;
    var ProductCategory = model.ProductCategory;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var CurrencyType = model.CurrencyType;
    var IncomeSourceType = model.IncomeSourceType;
    var Household = model.Household;
    var LiabilityType = model.LiabilityType;
    var MotorVehicleSecurityType = model.MotorVehicleSecurityType;
    var TermCategory = model.TermCategory;

    FrequencyType.hasMany(ApplicationContainerFee, {
        as: 'ApplicationContainerFeeFrequencytypeFks',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.hasMany(DirectDebit, {
        as: 'DirectDebitFrequencytypeFks',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.hasMany(EquipmentFinanceSecurity, {
        as: 'EquipmentFinanceSecurityFinancetermfrequencytypeFks',
        foreignKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.hasMany(FeeTypeProductCategory, {
        as: 'FeeTypeProductCategoryFrequencytypeFks',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.hasMany(Income, {
        as: 'IncomeFrequencytypeFks',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.hasMany(Liability, {
        as: 'LiabilityRepaymentfrequencytypeFks',
        foreignKey: 'RepaymentFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.hasMany(MotorVehicleSecurity, {
        as: 'MotorVehicleSecurityFinancetermfrequencytypeFks',
        foreignKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.hasMany(TermType, {
        as: 'TermTypeFrequencytypeFks',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationContainerFeeApplicationContainers',
        through: ApplicationContainerFee,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeCreatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(FeeType, {
        as: 'ApplicationContainerFeeFeeTypes',
        through: ApplicationContainerFee,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeLastUpdatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(ApplicationContainer, {
        as: 'DirectDebitApplicationContainers',
        through: DirectDebit,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'DirectDebitCreatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'DirectDebitLastUpdatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(Loan, {
        as: 'DirectDebitLoans',
        through: DirectDebit,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(RepaymentAmountType, {
        as: 'DirectDebitRepaymentAmountTypes',
        through: DirectDebit,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'RepaymentAmountTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(LoanPurposeType, {
        as: 'EquipmentFinanceSecurityEquipmentFinanceSecurityTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'EquipmentFinanceSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecurityLastUpdatedByPartyRoles',
        through: EquipmentFinanceSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(Loan, {
        as: 'EquipmentFinanceSecurityLoans',
        through: EquipmentFinanceSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(Security, {
        as: 'EquipmentFinanceSecuritySecurities',
        through: EquipmentFinanceSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryCreatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(FeeType, {
        as: 'FeeTypeProductCategoryFeeTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryLastUpdatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(ProductCategory, {
        as: 'FeeTypeProductCategoryProductCategories',
        through: FeeTypeProductCategory,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(ApplicationPartyRole, {
        as: 'IncomeApplicationPartyRoles',
        through: Income,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'IncomeCreatedByPartyRoles',
        through: Income,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(CurrencyType, {
        as: 'IncomeCurrencyTypes',
        through: Income,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'IncomeLastUpdatedByPartyRoles',
        through: Income,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(IncomeSourceType, {
        as: 'IncomeSourceTypes',
        through: Income,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'SourceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'LiabilityCreatedByPartyRoles',
        through: Liability,
        foreignKey: 'RepaymentFrequencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'LiabilityCreditProviders',
        through: Liability,
        foreignKey: 'RepaymentFrequencyTypeID',
        otherKey: 'CreditProviderID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(Household, {
        as: 'LiabilityHouseholds',
        through: Liability,
        foreignKey: 'RepaymentFrequencyTypeID',
        otherKey: 'HouseholdID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'LiabilityLastUpdatedByPartyRoles',
        through: Liability,
        foreignKey: 'RepaymentFrequencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(LiabilityType, {
        as: 'LiabilityLiabilityTypes',
        through: Liability,
        foreignKey: 'RepaymentFrequencyTypeID',
        otherKey: 'LiabilityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(PartyRole, {
        as: 'MotorVehicleSecurityLastUpdatedByPartyRoles',
        through: MotorVehicleSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(Loan, {
        as: 'MotorVehicleSecurityLoans',
        through: MotorVehicleSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(MotorVehicleSecurityType, {
        as: 'MotorVehicleSecurityMotorVehicleSecurityTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'MotorVehicleSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(Security, {
        as: 'MotorVehicleSecuritySecurities',
        through: MotorVehicleSecurity,
        foreignKey: 'FinanceTermFrequencyTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FrequencyType.belongsToMany(TermCategory, {
        as: 'TermTypeTermCategories',
        through: TermType,
        foreignKey: 'FrequencyTypeID',
        otherKey: 'TermCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
