'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorScoreContributingFactor', {
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
        scoreFactor: {
            type: DataTypes.STRING(50),
            field: 'ScoreFactor',
            allowNull: true
        },
        scoreImpactor: {
            type: DataTypes.STRING(50),
            field: 'ScoreImpactor',
            allowNull: true
        },
        contributingFactorDescription: {
            type: DataTypes.STRING(500),
            field: 'ContributingFactorDescription',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorScoreContributingFactors',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorScoreContributingFactor = model.TradingHistoryDirectorScoreContributingFactor;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorScoreContributingFactor.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
