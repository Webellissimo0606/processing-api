'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanPurposeType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        loanPurposeGroupID: {
            type: DataTypes.INTEGER,
            field: 'LoanPurposeGroupID',
            allowNull: true,
            references: {
                model: 'LoanPurposeGroup',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            field: 'Description',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
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
        ultracsCode: {
            type: DataTypes.STRING(1),
            field: 'UltracsCode',
            allowNull: false,
            defaultValue: "2"
        },
        pMSID: {
            type: DataTypes.INTEGER,
            field: 'PMSID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'LoanPurposeType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanPurposeType = model.LoanPurposeType;
    var EquipmentFinanceSecurity = model.EquipmentFinanceSecurity;
    var LoanPurpose = model.LoanPurpose;
    var LoanPurposeTypeProductCategory = model.LoanPurposeTypeProductCategory;
    var LoanPurposeTypeTraxJobType = model.LoanPurposeTypeTraxJobType;
    var PersonalLoanApplication = model.PersonalLoanApplication;
    var Quote = model.Quote;
    var LoanPurposeGroup = model.LoanPurposeGroup;
    var FrequencyType = model.FrequencyType;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var Security = model.Security;
    var ProductCategory = model.ProductCategory;
    var ApplicationContainer = model.ApplicationContainer;
    var TermType = model.TermType;
    var WorkbookHistory = model.WorkbookHistory;

    LoanPurposeType.hasMany(EquipmentFinanceSecurity, {
        as: 'EquipmentFinanceSecurityEquipmentfinancesecuritytypeFks',
        foreignKey: 'EquipmentFinanceSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.hasMany(LoanPurpose, {
        as: 'LoanPurposeLoanpurposetypeFks',
        foreignKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.hasMany(LoanPurposeTypeProductCategory, {
        as: 'ProductCategoryLoanpurposetypeFks',
        foreignKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.hasMany(LoanPurposeTypeTraxJobType, {
        as: 'TraxJobTypeLoanpurposetypeFks',
        foreignKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.hasMany(PersonalLoanApplication, {
        as: 'PersonalLoanApplicationLoanpurposetypeFks',
        foreignKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.hasMany(Quote, {
        as: 'QuoteQuotetypeFks',
        foreignKey: 'QuoteTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsTo(LoanPurposeGroup, {
        as: 'LoanPurposeGroup',
        foreignKey: 'LoanPurposeGroupID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(FrequencyType, {
        as: 'EquipmentFinanceSecurityFinanceTermFrequencyTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'EquipmentFinanceSecurityTypeID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecurityLastUpdatedByPartyRoles',
        through: EquipmentFinanceSecurity,
        foreignKey: 'EquipmentFinanceSecurityTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(Loan, {
        as: 'EquipmentFinanceSecurityLoans',
        through: EquipmentFinanceSecurity,
        foreignKey: 'EquipmentFinanceSecurityTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(Security, {
        as: 'EquipmentFinanceSecuritySecurities',
        through: EquipmentFinanceSecurity,
        foreignKey: 'EquipmentFinanceSecurityTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'LoanPurposeCreatedByPartyRoles',
        through: LoanPurpose,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'LoanPurposeLastUpdatedByPartyRoles',
        through: LoanPurpose,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(Loan, {
        as: 'LoanPurposeLoans',
        through: LoanPurpose,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(ProductCategory, {
        as: 'LoanPurposeTypeProductCategoryProductCategories',
        through: LoanPurposeTypeProductCategory,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(ProductCategory, {
        as: 'LoanPurposeTypeTraxJobTypeProductCategories',
        through: LoanPurposeTypeTraxJobType,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(ApplicationContainer, {
        as: 'PersonalLoanApplicationApplicationContainers',
        through: PersonalLoanApplication,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationCreatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationLastUpdatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(Loan, {
        as: 'PersonalLoanApplicationLoans',
        through: PersonalLoanApplication,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(TermType, {
        as: 'PersonalLoanApplicationLoanTermTypes',
        through: PersonalLoanApplication,
        foreignKey: 'LoanPurposeTypeID',
        otherKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'QuoteCreatedByPartyRoles',
        through: Quote,
        foreignKey: 'QuoteTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'QuoteLastUpdatedByPartyRoles',
        through: Quote,
        foreignKey: 'QuoteTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(PartyRole, {
        as: 'QuoteOwnedByPartyRoles',
        through: Quote,
        foreignKey: 'QuoteTypeID',
        otherKey: 'OwnedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeType.belongsToMany(WorkbookHistory, {
        as: 'QuoteWorkBookHistories',
        through: Quote,
        foreignKey: 'QuoteTypeID',
        otherKey: 'WorkBookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
