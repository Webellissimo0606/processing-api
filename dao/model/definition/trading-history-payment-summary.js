'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPaymentSummary', {
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
        tradeReferences: {
            type: DataTypes.INTEGER,
            field: 'TradeReferences',
            allowNull: true
        },
        totalOwing: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'TotalOwing',
            allowNull: true
        },
        totalPastDue: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'TotalPastDue',
            allowNull: true
        },
        withinTerms: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'WithinTerms',
            allowNull: true
        },
        owing1To30: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Owing1To30',
            allowNull: true
        },
        owing31To60: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Owing31To60',
            allowNull: true
        },
        owing61To90: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Owing61To90',
            allowNull: true
        },
        owing91Plus: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Owing91Plus',
            allowNull: true
        },
        averageOwed: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'AverageOwed',
            allowNull: true
        },
        percentageDebt31Plus: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'PercentageDebt31Plus',
            allowNull: true
        },
        percentageDebt61Plus: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'PercentageDebt61Plus',
            allowNull: true
        },
        percentageDebt91Plus: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'PercentageDebt91Plus',
            allowNull: true
        },
        maximumDebt31Plus: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'MaximumDebt31Plus',
            allowNull: true
        },
        maximumDebt61Plus: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'MaximumDebt61Plus',
            allowNull: true
        },
        maximumDebt91Plus: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'MaximumDebt91Plus',
            allowNull: true
        },
        maximumNowOwing: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'MaximumNowOwing',
            allowNull: true
        },
        maximumNowPastDue: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'MaximumNowPastDue',
            allowNull: true
        },
        withinTermsPercentage: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'WithinTermsPercentage',
            allowNull: true
        },
        owing1To30Percent: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Owing1To30Percent',
            allowNull: true
        },
        owing31To60Percent: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Owing31To60Percent',
            allowNull: true
        },
        owing61To90Percent: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Owing61To90Percent',
            allowNull: true
        },
        owing91PlusPercent: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Owing91PlusPercent',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPaymentSummary',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPaymentSummary = model.TradingHistoryPaymentSummary;
    var CreditReport = model.CreditReport;

    TradingHistoryPaymentSummary.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
