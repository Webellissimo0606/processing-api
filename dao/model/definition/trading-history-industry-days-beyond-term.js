'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryIndustryDaysBeyondTerm', {
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
        industryID: {
            type: DataTypes.INTEGER,
            field: 'IndustryID',
            allowNull: true
        },
        subDivisionCode: {
            type: DataTypes.STRING(200),
            field: 'SubDivisionCode',
            allowNull: true
        },
        subDivisionDescription: {
            type: DataTypes.STRING(200),
            field: 'SubDivisionDescription',
            allowNull: true
        },
        daysBeyondTerm: {
            type: DataTypes.INTEGER,
            field: 'DaysBeyondTerm',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryIndustryDaysBeyondTerm',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryIndustryDaysBeyondTerm = model.TradingHistoryIndustryDaysBeyondTerm;
    var CreditReport = model.CreditReport;

    TradingHistoryIndustryDaysBeyondTerm.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
