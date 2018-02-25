'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportFileNote', {
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
        dateRecorded: {
            type: DataTypes.DATEONLY,
            field: 'DateRecorded',
            allowNull: true
        },
        note: {
            type: DataTypes.STRING(200),
            field: 'Note',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportFileNote',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportFileNote = model.CreditReportFileNote;
    var CreditReport = model.CreditReport;

    CreditReportFileNote.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
