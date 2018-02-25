'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPaymentDefault', {
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
        seq: {
            type: DataTypes.STRING(10),
            field: 'Seq',
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
        roleCode: {
            type: DataTypes.STRING(10),
            field: 'RoleCode',
            allowNull: true
        },
        roleType: {
            type: DataTypes.STRING(50),
            field: 'RoleType',
            allowNull: true
        },
        coBorrower: {
            type: DataTypes.STRING(200),
            field: 'CoBorrower',
            allowNull: true
        },
        amount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Amount',
            allowNull: true
        },
        accountNumber: {
            type: DataTypes.STRING(50),
            field: 'AccountNumber',
            allowNull: true
        },
        provider: {
            type: DataTypes.STRING(200),
            field: 'Provider',
            allowNull: true
        },
        defaultDate: {
            type: DataTypes.DATEONLY,
            field: 'DefaultDate',
            allowNull: true
        },
        responseReasonCode: {
            type: DataTypes.STRING(10),
            field: 'ResponseReasonCode',
            allowNull: true
        },
        responseReasonType: {
            type: DataTypes.STRING(200),
            field: 'ResponseReasonType',
            allowNull: true
        },
        originalProvider: {
            type: DataTypes.STRING(200),
            field: 'OriginalProvider',
            allowNull: true
        },
        originalDefaultDate: {
            type: DataTypes.DATEONLY,
            field: 'OriginalDefaultDate',
            allowNull: true
        },
        originalAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'OriginalAmount',
            allowNull: true
        },
        originalReportReasonCode: {
            type: DataTypes.STRING(10),
            field: 'OriginalReportReasonCode',
            allowNull: true
        },
        originalReportReasonType: {
            type: DataTypes.STRING(50),
            field: 'OriginalReportReasonType',
            allowNull: true
        },
        paymentStatusCode: {
            type: DataTypes.STRING(10),
            field: 'PaymentStatusCode',
            allowNull: true
        },
        paymentStatusType: {
            type: DataTypes.STRING(50),
            field: 'PaymentStatusType',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPaymentDefaults',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPaymentDefault = model.TradingHistoryPaymentDefault;
    var CreditReport = model.CreditReport;

    TradingHistoryPaymentDefault.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
