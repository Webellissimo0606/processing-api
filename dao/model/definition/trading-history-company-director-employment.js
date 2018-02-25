'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryCompanyDirectorEmployment', {
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
        firstReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'FirstReportedDate',
            allowNull: true
        },
        occupation: {
            type: DataTypes.STRING(200),
            field: 'Occupation',
            allowNull: true
        },
        employer: {
            type: DataTypes.STRING(200),
            field: 'Employer',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryCompanyDirectorEmployment',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryCompanyDirectorEmployment = model.TradingHistoryCompanyDirectorEmployment;
    var CreditReport = model.CreditReport;

    TradingHistoryCompanyDirectorEmployment.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
