'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsTelephonenumbersequenceview', {
        a: {
            type: DataTypes.BIGINT,
            field: 'a',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_TelephoneNumberSequenceView',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsTelephonenumbersequenceview = model.CrumbsTelephonenumbersequenceview;

};
