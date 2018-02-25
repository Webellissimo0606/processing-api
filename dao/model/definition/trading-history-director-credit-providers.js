'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorCreditProvider', {
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
        seq: {
            type: DataTypes.STRING(20),
            field: 'Seq',
            allowNull: true
        },
        creditProvider: {
            type: DataTypes.STRING(200),
            field: 'CreditProvider',
            allowNull: true
        },
        creditProviderDate: {
            type: DataTypes.DATEONLY,
            field: 'CreditProviderDate',
            allowNull: true
        },
        accountNumber: {
            type: DataTypes.STRING(50),
            field: 'AccountNumber',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorCreditProviders',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorCreditProvider = model.TradingHistoryDirectorCreditProvider;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorCreditProvider.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
