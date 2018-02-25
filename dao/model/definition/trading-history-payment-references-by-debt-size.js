'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPaymentReferencesByDebtSize', {
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
        rowNumber: {
            type: DataTypes.INTEGER,
            field: 'RowNumber',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(200),
            field: 'Description',
            allowNull: true
        },
        paymentReferenceCount: {
            type: DataTypes.INTEGER,
            field: 'PaymentReferenceCount',
            allowNull: true
        },
        totalOwing: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'TotalOwing',
            allowNull: true
        },
        percentWithinTerms: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'PercentWithinTerms',
            allowNull: true
        },
        percent1To30Days: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Percent1To30Days',
            allowNull: true
        },
        percent31To60Days: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Percent31To60Days',
            allowNull: true
        },
        percent61To90Days: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Percent61To90Days',
            allowNull: true
        },
        percent91PlusDays: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Percent91PlusDays',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPaymentReferencesByDebtSize',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPaymentReferencesByDebtSize = model.TradingHistoryPaymentReferencesByDebtSize;
    var CreditReport = model.CreditReport;

    TradingHistoryPaymentReferencesByDebtSize.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
