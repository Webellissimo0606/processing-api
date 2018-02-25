'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorSummaryEntry', {
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
        bureauReference: {
            type: DataTypes.STRING(20),
            field: 'BureauReference',
            allowNull: true
        },
        summaryName: {
            type: DataTypes.STRING(100),
            field: 'SummaryName',
            allowNull: true
        },
        summaryValue: {
            type: DataTypes.STRING(10),
            field: 'SummaryValue',
            allowNull: true
        },
        summaryType: {
            type: DataTypes.STRING(20),
            field: 'SummaryType',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorSummaryEntries',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorSummaryEntry = model.TradingHistoryDirectorSummaryEntry;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorSummaryEntry.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
