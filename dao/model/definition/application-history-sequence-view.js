'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationHistorySequenceView', {
        a: {
            type: DataTypes.BIGINT,
            field: 'a',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationHistorySequenceView',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationHistorySequenceView = model.ApplicationHistorySequenceView;

};
