'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryCurrentCompanyShare', {
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
        annualGeneralMeetingDate: {
            type: DataTypes.DATEONLY,
            field: 'AnnualGeneralMeetingDate',
            allowNull: true
        },
        lodgeDate: {
            type: DataTypes.DATEONLY,
            field: 'LodgeDate',
            allowNull: true
        },
        documentNumber: {
            type: DataTypes.STRING(200),
            field: 'DocumentNumber',
            allowNull: true
        },
        documentNumberQualifier: {
            type: DataTypes.STRING(200),
            field: 'DocumentNumberQualifier',
            allowNull: true
        },
        historyFlag: {
            type: DataTypes.STRING(20),
            field: 'HistoryFlag',
            allowNull: true
        },
        shareClassCode: {
            type: DataTypes.STRING(20),
            field: 'ShareClassCode',
            allowNull: true
        },
        shareClassTitle: {
            type: DataTypes.STRING(100),
            field: 'ShareClassTitle',
            allowNull: true
        },
        sharesIssued: {
            type: DataTypes.INTEGER,
            field: 'SharesIssued',
            allowNull: true
        },
        paidCapital: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'PaidCapital',
            allowNull: true
        },
        unpaidCapital: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'UnpaidCapital',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryCurrentCompanyShares',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryCurrentCompanyShare = model.TradingHistoryCurrentCompanyShare;
    var CreditReport = model.CreditReport;

    TradingHistoryCurrentCompanyShare.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
