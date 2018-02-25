'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartytelephone', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_PartyTelephoneSequenceView_seq_nextval\"("
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        telephoneNumberID: {
            type: DataTypes.INTEGER,
            field: 'TelephoneNumberID',
            allowNull: false
        },
        telephoneTypeID: {
            type: DataTypes.INTEGER,
            field: 'TelephoneTypeID',
            allowNull: false
        },
        communicationTypeID: {
            type: DataTypes.INTEGER,
            field: 'CommunicationTypeID',
            allowNull: false
        },
        locationTypeID: {
            type: DataTypes.INTEGER,
            field: 'LocationTypeID',
            allowNull: false
        },
        preferredContact: {
            type: DataTypes.BOOLEAN,
            field: 'PreferredContact',
            allowNull: false
        },
        optOut: {
            type: DataTypes.BOOLEAN,
            field: 'OptOut',
            allowNull: true
        },
        priority: {
            type: DataTypes.INTEGER,
            field: 'Priority',
            allowNull: true
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
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyTelephone',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartytelephone = model.CrumbsPartytelephone;

};
