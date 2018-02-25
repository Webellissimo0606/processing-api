'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailLeadhistory', {
        leadHistoryID: {
            type: DataTypes.INTEGER,
            field: 'LeadHistoryID',
            allowNull: false
        },
        leadID: {
            type: DataTypes.INTEGER,
            field: 'LeadID',
            allowNull: false
        },
        leadHistoryNote: {
            type: DataTypes.TEXT,
            field: 'LeadHistoryNote',
            allowNull: true
        },
        enteredByID: {
            type: DataTypes.INTEGER,
            field: 'EnteredByID',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: true
        },
        rowStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'RowStatusTypeID',
            allowNull: false
        },
        historyNoteTypeID: {
            type: DataTypes.INTEGER,
            field: 'HistoryNoteTypeID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'retail_LeadHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailLeadhistory = model.RetailLeadhistory;

};
