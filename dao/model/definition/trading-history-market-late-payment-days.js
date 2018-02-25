'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryMarketLatePaymentDay', {
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
            type: DataTypes.STRING(10),
            field: 'Period',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        marketLatePaymentDays: {
            type: DataTypes.INTEGER,
            field: 'MarketLatePaymentDays',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryMarketLatePaymentDays',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryMarketLatePaymentDay = model.TradingHistoryMarketLatePaymentDay;
    var CreditReport = model.CreditReport;

    TradingHistoryMarketLatePaymentDay.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
