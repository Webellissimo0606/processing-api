'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryAggregatedPaymentReference', {
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
        totalOwed: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'TotalOwed',
            allowNull: true
        },
        withinTerms: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'WithinTerms',
            allowNull: true
        },
        overdue1To30Days: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Overdue1To30Days',
            allowNull: true
        },
        overdue31To60Days: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Overdue31To60Days',
            allowNull: true
        },
        overdue61To90Days: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Overdue61To90Days',
            allowNull: true
        },
        overdue91PlusDays: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Overdue91PlusDays',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryAggregatedPaymentReference',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryAggregatedPaymentReference = model.TradingHistoryAggregatedPaymentReference;
    var CreditReport = model.CreditReport;

    TradingHistoryAggregatedPaymentReference.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
