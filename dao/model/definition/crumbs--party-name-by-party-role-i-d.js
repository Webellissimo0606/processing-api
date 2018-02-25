'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartynamebypartyroleid', {
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: true
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: true
        },
        partyRoleTypeID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleTypeID',
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: true
        },
        nameSurnameFirst: {
            type: DataTypes.STRING(150),
            field: 'NameSurnameFirst',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyNameByPartyRoleID',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartynamebypartyroleid = model.CrumbsPartynamebypartyroleid;

};
