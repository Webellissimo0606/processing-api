'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportEmployment', {
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
        firstReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'FirstReportedDate',
            allowNull: true
        },
        lastReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'LastReportedDate',
            allowNull: true
        },
        employer: {
            type: DataTypes.STRING(200),
            field: 'Employer',
            allowNull: true
        },
        occupation: {
            type: DataTypes.STRING(200),
            field: 'Occupation',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportEmployment',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportEmployment = model.CreditReportEmployment;
    var CreditReport = model.CreditReport;

    CreditReportEmployment.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
