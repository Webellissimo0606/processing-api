'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDeductibleGiftRecipient', {
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
        aBNCode: {
            type: DataTypes.STRING(20),
            field: 'ABNCode',
            allowNull: true
        },
        nINName: {
            type: DataTypes.STRING(200),
            field: 'NINName',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDeductibleGiftRecipients',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDeductibleGiftRecipient = model.TradingHistoryDeductibleGiftRecipient;
    var CreditReport = model.CreditReport;

    TradingHistoryDeductibleGiftRecipient.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
