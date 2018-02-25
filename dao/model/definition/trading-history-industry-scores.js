'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryIndustryScore', {
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
        rank: {
            type: DataTypes.INTEGER,
            field: 'Rank',
            allowNull: true
        },
        value: {
            type: DataTypes.INTEGER,
            field: 'Value',
            allowNull: true
        },
        xPoint: {
            type: DataTypes.STRING(100),
            field: 'XPoint',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryIndustryScores',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryIndustryScore = model.TradingHistoryIndustryScore;
    var CreditReport = model.CreditReport;

    TradingHistoryIndustryScore.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
