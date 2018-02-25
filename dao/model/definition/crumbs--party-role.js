'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartyrole', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_PartyRoleSequenceView_seq_nextval\"("
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        partyRoleTypeID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleTypeID',
            allowNull: false
        },
        justicePartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'JusticePartyRoleID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
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
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyRole',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartyrole = model.CrumbsPartyrole;

};
