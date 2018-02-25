'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartytrustee', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        trusteePartyID: {
            type: DataTypes.INTEGER,
            field: 'TrusteePartyID',
            allowNull: false
        },
        trustPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'TrustPartyRoleID',
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
            allowNull: true
        },
        appointmentDate: {
            type: DataTypes.DATE,
            field: 'AppointmentDate',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyTrustee',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartytrustee = model.CrumbsPartytrustee;

};
