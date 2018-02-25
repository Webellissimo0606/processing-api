'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryScoreWarning', {
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
        scoringWarningCode: {
            type: DataTypes.STRING(50),
            field: 'ScoringWarningCode',
            allowNull: true
        },
        scoringWarningDescription: {
            type: DataTypes.STRING(500),
            field: 'ScoringWarningDescription',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryScoreWarnings',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryScoreWarning = model.TradingHistoryScoreWarning;
    var CreditReport = model.CreditReport;

    TradingHistoryScoreWarning.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
