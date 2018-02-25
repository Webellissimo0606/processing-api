'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PartyRoleSequenceView', {
        a: {
            type: DataTypes.BIGINT,
            field: 'a',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'PartyRoleSequenceView',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PartyRoleSequenceView = model.PartyRoleSequenceView;

};
