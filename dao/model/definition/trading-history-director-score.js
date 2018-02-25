'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorScore', {
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
        score: {
            type: DataTypes.STRING(10),
            field: 'Score',
            allowNull: true
        },
        probabilityAdverse: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'ProbabilityAdverse',
            allowNull: true
        },
        probabilityFailure: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'ProbabilityFailure',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorScore',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorScore = model.TradingHistoryDirectorScore;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorScore.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
