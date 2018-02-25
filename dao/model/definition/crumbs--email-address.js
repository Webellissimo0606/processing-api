'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsEmailaddress', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_EmailAddressSequenceView_seq_nextval\"("
        },
        emailAddress: {
            type: DataTypes.STRING(250),
            field: 'EmailAddress',
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
        tableName: 'crumbs_EmailAddress',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsEmailaddress = model.CrumbsEmailaddress;

};
