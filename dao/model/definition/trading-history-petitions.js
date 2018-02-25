'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPetition', {
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
        creditor: {
            type: DataTypes.STRING(200),
            field: 'Creditor',
            allowNull: true
        },
        courtNumber: {
            type: DataTypes.STRING(50),
            field: 'CourtNumber',
            allowNull: true
        },
        liquidator: {
            type: DataTypes.STRING(200),
            field: 'Liquidator',
            allowNull: true
        },
        petitionDate: {
            type: DataTypes.DATEONLY,
            field: 'PetitionDate',
            allowNull: true
        },
        hearingDate: {
            type: DataTypes.DATEONLY,
            field: 'HearingDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPetitions',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPetition = model.TradingHistoryPetition;
    var CreditReport = model.CreditReport;

    TradingHistoryPetition.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
