'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryClassification', {
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
        divisionDescription: {
            type: DataTypes.STRING(200),
            field: 'DivisionDescription',
            allowNull: true
        },
        divisionCode: {
            type: DataTypes.STRING(20),
            field: 'DivisionCode',
            allowNull: true
        },
        subDivisionDescription: {
            type: DataTypes.STRING(200),
            field: 'SubDivisionDescription',
            allowNull: true
        },
        subDivisionCode: {
            type: DataTypes.STRING(20),
            field: 'SubDivisionCode',
            allowNull: true
        },
        groupDescription: {
            type: DataTypes.STRING(200),
            field: 'GroupDescription',
            allowNull: true
        },
        groupCode: {
            type: DataTypes.STRING(20),
            field: 'GroupCode',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryClassification',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryClassification = model.TradingHistoryClassification;
    var CreditReport = model.CreditReport;

    TradingHistoryClassification.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
