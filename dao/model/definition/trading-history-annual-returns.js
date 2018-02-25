'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryAnnualReturn', {
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
        returnsYear: {
            type: DataTypes.STRING(10),
            field: 'ReturnsYear',
            allowNull: true
        },
        outstanding: {
            type: DataTypes.STRING(20),
            field: 'Outstanding',
            allowNull: true
        },
        returnDueDate: {
            type: DataTypes.DATEONLY,
            field: 'ReturnDueDate',
            allowNull: true
        },
        extendedReturnDueDate: {
            type: DataTypes.DATEONLY,
            field: 'ExtendedReturnDueDate',
            allowNull: true
        },
        annualGeneralMeetingDueDate: {
            type: DataTypes.DATEONLY,
            field: 'AnnualGeneralMeetingDueDate',
            allowNull: true
        },
        extendedAnnualGeneralMeetingDueDate: {
            type: DataTypes.DATEONLY,
            field: 'ExtendedAnnualGeneralMeetingDueDate',
            allowNull: true
        },
        annualGeneralMeetingHeldDate: {
            type: DataTypes.DATEONLY,
            field: 'AnnualGeneralMeetingHeldDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryAnnualReturns',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryAnnualReturn = model.TradingHistoryAnnualReturn;
    var CreditReport = model.CreditReport;

    TradingHistoryAnnualReturn.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
