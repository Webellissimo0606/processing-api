'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('V8archiveWorkbookvaluehistoryarchive', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "v8archive_WorkbookValueHistoryArchiveSequenceView_seq_nextval\"("
        },
        workbookHistoryID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookHistoryID',
            allowNull: false
        },
        workbookParameterTypeID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookParameterTypeID',
            allowNull: false
        },
        value: {
            type: DataTypes.STRING(256),
            field: 'Value',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'v8archive_WorkbookValueHistoryArchive',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var V8archiveWorkbookvaluehistoryarchive = model.V8archiveWorkbookvaluehistoryarchive;

};
