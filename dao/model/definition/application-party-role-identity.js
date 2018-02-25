'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRoleIdentity', {
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: true
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: true
        },
        applicationPartyRoleTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleTypeID',
            allowNull: true
        },
        applicationPartyRoleTypeName: {
            type: DataTypes.STRING(50),
            field: 'ApplicationPartyRoleTypeName',
            allowNull: true
        },
        crumbsPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsPartyRoleID',
            allowNull: true
        },
        nominatedBorrower: {
            type: DataTypes.BOOLEAN,
            field: 'NominatedBorrower',
            allowNull: true
        },
        v8PartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'V8PartyRoleID',
            allowNull: true
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRoleIdentity',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRoleIdentity = model.ApplicationPartyRoleIdentity;

};
