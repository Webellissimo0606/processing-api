'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRCommercialCollateralClassSummary', {
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
        registrationType: {
            type: DataTypes.STRING(50),
            field: 'RegistrationType',
            allowNull: true
        },
        totalRegistrations: {
            type: DataTypes.INTEGER,
            field: 'TotalRegistrations',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRCommercialCollateralClassSummary',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRCommercialCollateralClassSummary = model.TradingHistoryPPSRCommercialCollateralClassSummary;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRCommercialCollateralClassSummary.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
