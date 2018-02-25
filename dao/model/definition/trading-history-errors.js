'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryError', {
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
        faultCode: {
            type: DataTypes.STRING(200),
            field: 'FaultCode',
            allowNull: true
        },
        faultString: {
            type: DataTypes.STRING(500),
            field: 'FaultString',
            allowNull: true
        },
        faultActor: {
            type: DataTypes.STRING(200),
            field: 'FaultActor',
            allowNull: true
        },
        detail: {
            type: DataTypes.STRING(500),
            field: 'Detail',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryErrors',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryError = model.TradingHistoryError;
    var CreditReport = model.CreditReport;

    TradingHistoryError.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
