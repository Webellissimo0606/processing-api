'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPreASICDocument', {
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
        state: {
            type: DataTypes.STRING(20),
            field: 'State',
            allowNull: true
        },
        receivedDate: {
            type: DataTypes.DATEONLY,
            field: 'ReceivedDate',
            allowNull: true
        },
        formCode: {
            type: DataTypes.STRING(20),
            field: 'FormCode',
            allowNull: true
        },
        documentStatus: {
            type: DataTypes.STRING(100),
            field: 'DocumentStatus',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPreASICDocuments',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPreASICDocument = model.TradingHistoryPreASICDocument;
    var CreditReport = model.CreditReport;

    TradingHistoryPreASICDocument.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
