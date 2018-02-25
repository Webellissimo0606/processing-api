'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SecurityMortgageRegistration', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        sAIPacketSentDate: {
            type: DataTypes.DATEONLY,
            field: 'SAIPacketSentDate',
            allowNull: true
        },
        registrationLodgedDate: {
            type: DataTypes.DATEONLY,
            field: 'RegistrationLodgedDate',
            allowNull: true
        },
        requisitionedDate: {
            type: DataTypes.DATEONLY,
            field: 'RequisitionedDate',
            allowNull: true
        },
        requisitionReason: {
            type: DataTypes.STRING(500),
            field: 'RequisitionReason',
            allowNull: true
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
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
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'SecurityMortgageRegistration',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SecurityMortgageRegistration = model.SecurityMortgageRegistration;

};
