'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsBrokerprogramagreement', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: false
        },
        pMSProgramID: {
            type: DataTypes.INTEGER,
            field: 'PMSProgramID',
            allowNull: true
        },
        effective: {
            type: DataTypes.DATEONLY,
            field: 'Effective',
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
        tableName: 'crumbs_BrokerProgramAgreement',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsBrokerprogramagreement = model.CrumbsBrokerprogramagreement;

};
