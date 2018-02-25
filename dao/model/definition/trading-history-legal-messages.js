'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryLegalMessage', {
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
        seq: {
            type: DataTypes.STRING(20),
            field: 'Seq',
            allowNull: true
        },
        narrative: {
            type: DataTypes.STRING(500),
            field: 'Narrative',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryLegalMessages',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryLegalMessage = model.TradingHistoryLegalMessage;
    var CreditReport = model.CreditReport;

    TradingHistoryLegalMessage.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
