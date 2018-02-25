'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryExternalAdministrator', {
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
        administratorTitle: {
            type: DataTypes.STRING(200),
            field: 'AdministratorTitle',
            allowNull: true
        },
        adminsitratorName: {
            type: DataTypes.STRING(200),
            field: 'AdminsitratorName',
            allowNull: true
        },
        administratorAddress: {
            type: DataTypes.STRING(500),
            field: 'AdministratorAddress',
            allowNull: true
        },
        administratorDocumentNumber: {
            type: DataTypes.STRING(50),
            field: 'AdministratorDocumentNumber',
            allowNull: true
        },
        administratorStartDate: {
            type: DataTypes.DATEONLY,
            field: 'AdministratorStartDate',
            allowNull: true
        },
        administratorEndDate: {
            type: DataTypes.DATEONLY,
            field: 'AdministratorEndDate',
            allowNull: true
        },
        creditor: {
            type: DataTypes.STRING(200),
            field: 'Creditor',
            allowNull: true
        },
        courtNumber: {
            type: DataTypes.STRING(50),
            field: 'CourtNumber',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryExternalAdministrators',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryExternalAdministrator = model.TradingHistoryExternalAdministrator;
    var CreditReport = model.CreditReport;

    TradingHistoryExternalAdministrator.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
