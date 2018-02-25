'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryASICDocument', {
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
        documentNumber: {
            type: DataTypes.STRING(200),
            field: 'DocumentNumber',
            allowNull: true
        },
        documentNumberQualifier: {
            type: DataTypes.STRING(200),
            field: 'DocumentNumberQualifier',
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
        subFormCode: {
            type: DataTypes.STRING(20),
            field: 'SubFormCode',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: true
        },
        processedDate: {
            type: DataTypes.DATEONLY,
            field: 'ProcessedDate',
            allowNull: true
        },
        pages: {
            type: DataTypes.INTEGER,
            field: 'Pages',
            allowNull: true
        },
        effectiveDate: {
            type: DataTypes.DATEONLY,
            field: 'EffectiveDate',
            allowNull: true
        },
        requisitionFlag: {
            type: DataTypes.STRING(50),
            field: 'RequisitionFlag',
            allowNull: true
        },
        xBRLFlag: {
            type: DataTypes.STRING(50),
            field: 'XBRLFlag',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryASICDocuments',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryASICDocument = model.TradingHistoryASICDocument;
    var CreditReport = model.CreditReport;

    TradingHistoryASICDocument.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
