'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorWarningMetaDatum', {
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
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: true
        },
        value: {
            type: DataTypes.STRING(200),
            field: 'Value',
            allowNull: true
        },
        type: {
            type: DataTypes.STRING(200),
            field: 'Type',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorWarningMetaData',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorWarningMetaDatum = model.TradingHistoryDirectorWarningMetaDatum;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorWarningMetaDatum.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
