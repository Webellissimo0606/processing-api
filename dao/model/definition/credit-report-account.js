'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportAccount', {
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
        iDIndex: {
            type: DataTypes.STRING(10),
            field: 'IDIndex',
            allowNull: true
        },
        latestUpdateDate: {
            type: DataTypes.DATEONLY,
            field: 'LatestUpdateDate',
            allowNull: true
        },
        accountDataLevel: {
            type: DataTypes.INTEGER,
            field: 'AccountDataLevel',
            allowNull: true
        },
        accountID: {
            type: DataTypes.STRING(50),
            field: 'AccountID',
            allowNull: true
        },
        originalCreditProvider: {
            type: DataTypes.STRING(200),
            field: 'OriginalCreditProvider',
            allowNull: true
        },
        originalCreditProviderIsLicensee: {
            type: DataTypes.STRING(10),
            field: 'OriginalCreditProviderIsLicensee',
            allowNull: true
        },
        latestCreditProvider: {
            type: DataTypes.STRING(200),
            field: 'LatestCreditProvider',
            allowNull: true
        },
        latestCreditProviderIsLicensee: {
            type: DataTypes.STRING(200),
            field: 'LatestCreditProviderIsLicensee',
            allowNull: true
        },
        transferDate: {
            type: DataTypes.DATEONLY,
            field: 'TransferDate',
            allowNull: true
        },
        accountTypeCode: {
            type: DataTypes.STRING(10),
            field: 'AccountTypeCode',
            allowNull: true
        },
        accountType: {
            type: DataTypes.STRING(50),
            field: 'AccountType',
            allowNull: true
        },
        relationshipCode: {
            type: DataTypes.STRING(10),
            field: 'RelationshipCode',
            allowNull: true
        },
        relationship: {
            type: DataTypes.STRING(50),
            field: 'Relationship',
            allowNull: true
        },
        accountHolderCount: {
            type: DataTypes.INTEGER,
            field: 'AccountHolderCount',
            allowNull: true
        },
        accountOpenDate: {
            type: DataTypes.DATEONLY,
            field: 'AccountOpenDate',
            allowNull: true
        },
        accountClosedDate: {
            type: DataTypes.DATEONLY,
            field: 'AccountClosedDate',
            allowNull: true
        },
        accountReopenDate: {
            type: DataTypes.DATEONLY,
            field: 'AccountReopenDate',
            allowNull: true
        },
        loanPaymentMethodCode: {
            type: DataTypes.STRING(10),
            field: 'LoanPaymentMethodCode',
            allowNull: true
        },
        loanPaymentMethod: {
            type: DataTypes.STRING(50),
            field: 'LoanPaymentMethod',
            allowNull: true
        },
        termTypeCode: {
            type: DataTypes.STRING(10),
            field: 'TermTypeCode',
            allowNull: true
        },
        termType: {
            type: DataTypes.STRING(50),
            field: 'TermType',
            allowNull: true
        },
        securedCreditCode: {
            type: DataTypes.STRING(10),
            field: 'SecuredCreditCode',
            allowNull: true
        },
        securedCredit: {
            type: DataTypes.STRING(50),
            field: 'SecuredCredit',
            allowNull: true
        },
        termOfLoan: {
            type: DataTypes.STRING(200),
            field: 'TermOfLoan',
            allowNull: true
        },
        originalMaximumAmountOfCredit: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'OriginalMaximumAmountOfCredit',
            allowNull: true
        },
        originalCurrencyCode: {
            type: DataTypes.STRING(10),
            field: 'OriginalCurrencyCode',
            allowNull: true
        },
        latestMaximumAmountOfCredit: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'LatestMaximumAmountOfCredit',
            allowNull: true
        },
        latestCurrencyCode: {
            type: DataTypes.STRING(10),
            field: 'LatestCurrencyCode',
            allowNull: true
        },
        dateLastChanged: {
            type: DataTypes.DATEONLY,
            field: 'DateLastChanged',
            allowNull: true
        },
        isUnlimitedCredit: {
            type: DataTypes.STRING(10),
            field: 'IsUnlimitedCredit',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportAccount',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportAccount = model.CreditReportAccount;
    var CreditReport = model.CreditReport;

    CreditReportAccount.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
