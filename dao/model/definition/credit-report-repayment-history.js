'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportRepaymentHistory', {
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
        iDIndex: {
            type: DataTypes.STRING(10),
            field: 'IDIndex',
            allowNull: true
        },
        period: {
            type: DataTypes.STRING(10),
            field: 'Period',
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(10),
            field: 'Status',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportRepaymentHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportRepaymentHistory = model.CreditReportRepaymentHistory;
    var CreditReport = model.CreditReport;

    CreditReportRepaymentHistory.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
