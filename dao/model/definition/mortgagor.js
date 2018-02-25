'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Mortgagor', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationSecurityID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationSecurityID',
            allowNull: false
        },
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(500),
            field: 'Name',
            allowNull: false
        },
        changeNameFormRequired: {
            type: DataTypes.BOOLEAN,
            field: 'ChangeNameFormRequired',
            allowNull: false,
            defaultValue: false
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
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'Mortgagor',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Mortgagor = model.Mortgagor;

};
