'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryFinancialReport', {
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
        balanceDate: {
            type: DataTypes.DATEONLY,
            field: 'BalanceDate',
            allowNull: true
        },
        reportDueDate: {
            type: DataTypes.DATEONLY,
            field: 'ReportDueDate',
            allowNull: true
        },
        annualGeneralMeetingDueDate: {
            type: DataTypes.DATEONLY,
            field: 'AnnualGeneralMeetingDueDate',
            allowNull: true
        },
        extendedAnnualGeneralMeetingDueDate: {
            type: DataTypes.DATEONLY,
            field: 'ExtendedAnnualGeneralMeetingDueDate',
            allowNull: true
        },
        annualGeneralMeetingHeldDate: {
            type: DataTypes.DATEONLY,
            field: 'AnnualGeneralMeetingHeldDate',
            allowNull: true
        },
        outstanding: {
            type: DataTypes.STRING(20),
            field: 'Outstanding',
            allowNull: true
        },
        documentNumber: {
            type: DataTypes.STRING(50),
            field: 'DocumentNumber',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryFinancialReports',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryFinancialReport = model.TradingHistoryFinancialReport;
    var CreditReport = model.CreditReport;

    TradingHistoryFinancialReport.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
