'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationChange', {
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
        changeNumber: {
            type: DataTypes.STRING(20),
            field: 'ChangeNumber',
            allowNull: true
        },
        changeType: {
            type: DataTypes.STRING(50),
            field: 'ChangeType',
            allowNull: true
        },
        changeDate: {
            type: DataTypes.DATEONLY,
            field: 'ChangeDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRRegistrationChanges',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationChange = model.TradingHistoryPPSRRegistrationChange;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationChange.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
