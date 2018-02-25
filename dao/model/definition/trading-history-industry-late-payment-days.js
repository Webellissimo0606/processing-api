'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryIndustryLatePaymentDay', {
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
        subDivisionCode: {
            type: DataTypes.STRING(10),
            field: 'SubDivisionCode',
            allowNull: true
        },
        subDivisionDescription: {
            type: DataTypes.STRING(200),
            field: 'SubDivisionDescription',
            allowNull: true
        },
        averageLatePaymentDays: {
            type: DataTypes.INTEGER,
            field: 'AverageLatePaymentDays',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryIndustryLatePaymentDays',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryIndustryLatePaymentDay = model.TradingHistoryIndustryLatePaymentDay;
    var CreditReport = model.CreditReport;

    TradingHistoryIndustryLatePaymentDay.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
