'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('V8archiveWorkbookvaluehistoryarchivesequenceview', {
        a: {
            type: DataTypes.BIGINT,
            field: 'a',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'v8archive_WorkbookValueHistoryArchiveSequenceView',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var V8archiveWorkbookvaluehistoryarchivesequenceview = model.V8archiveWorkbookvaluehistoryarchivesequenceview;

};
