'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryLast200PaymentReference', {
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
        period: {
            type: DataTypes.STRING(20),
            field: 'Period',
            allowNull: true
        },
        dataProviderID: {
            type: DataTypes.INTEGER,
            field: 'DataProviderID',
            allowNull: true
        },
        subDivisionDescription: {
            type: DataTypes.STRING(200),
            field: 'SubDivisionDescription',
            allowNull: true
        },
        totalAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'TotalAmount',
            allowNull: true
        },
        currentAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'CurrentAmount',
            allowNull: true
        },
        amountOverdue1To30Days: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'AmountOverdue1To30Days',
            allowNull: true
        },
        amountOverdue31To60Days: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'AmountOverdue31To60Days',
            allowNull: true
        },
        amountOverdue61To90Days: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'AmountOverdue61To90Days',
            allowNull: true
        },
        amountOverdue91PlusDays: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'AmountOverdue91PlusDays',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryLast200PaymentReference',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryLast200PaymentReference = model.TradingHistoryLast200PaymentReference;
    var CreditReport = model.CreditReport;

    TradingHistoryLast200PaymentReference.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
