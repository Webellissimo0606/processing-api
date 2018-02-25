'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryFileNote', {
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
        seq: {
            type: DataTypes.STRING(10),
            field: 'Seq',
            allowNull: true
        },
        noteRecordedDate: {
            type: DataTypes.DATEONLY,
            field: 'NoteRecordedDate',
            allowNull: true
        },
        narrative: {
            type: DataTypes.STRING(500),
            field: 'Narrative',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryFileNotes',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryFileNote = model.TradingHistoryFileNote;
    var CreditReport = model.CreditReport;

    TradingHistoryFileNote.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
