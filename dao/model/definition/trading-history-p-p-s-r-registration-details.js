'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationDetail', {
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
        registrationNumber: {
            type: DataTypes.STRING(50),
            field: 'RegistrationNumber',
            allowNull: true
        },
        registrationStartDate: {
            type: DataTypes.DATEONLY,
            field: 'RegistrationStartDate',
            allowNull: true
        },
        registrationEndDate: {
            type: DataTypes.DATEONLY,
            field: 'RegistrationEndDate',
            allowNull: true
        },
        migratedFlag: {
            type: DataTypes.STRING(20),
            field: 'MigratedFlag',
            allowNull: true
        },
        collateralClass: {
            type: DataTypes.STRING(50),
            field: 'CollateralClass',
            allowNull: true
        },
        pMSIFlag: {
            type: DataTypes.STRING(50),
            field: 'PMSIFlag',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRRegistrationDetails',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationDetail = model.TradingHistoryPPSRRegistrationDetail;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationDetail.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
