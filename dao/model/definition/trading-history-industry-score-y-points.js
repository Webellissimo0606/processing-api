'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryIndustryScoreYPoint', {
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
        industryReference: {
            type: DataTypes.STRING(50),
            field: 'IndustryReference',
            allowNull: true
        },
        yPoint: {
            type: DataTypes.INTEGER,
            field: 'YPoint',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryIndustryScoreYPoints',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryIndustryScoreYPoint = model.TradingHistoryIndustryScoreYPoint;
    var CreditReport = model.CreditReport;

    TradingHistoryIndustryScoreYPoint.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
