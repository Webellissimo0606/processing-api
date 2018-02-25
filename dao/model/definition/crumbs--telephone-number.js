'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsTelephonenumber', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_TelephoneNumberSequenceView_seq_nextval\"("
        },
        telephoneNumber: {
            type: DataTypes.STRING(20),
            field: 'TelephoneNumber',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_TelephoneNumber',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsTelephonenumber = model.CrumbsTelephonenumber;

};
