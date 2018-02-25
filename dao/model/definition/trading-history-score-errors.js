'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryScoreError', {
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
        scoringErrorCode: {
            type: DataTypes.STRING(50),
            field: 'ScoringErrorCode',
            allowNull: true
        },
        scoringErrorDescription: {
            type: DataTypes.STRING(500),
            field: 'ScoringErrorDescription',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryScoreErrors',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryScoreError = model.TradingHistoryScoreError;
    var CreditReport = model.CreditReport;

    TradingHistoryScoreError.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
