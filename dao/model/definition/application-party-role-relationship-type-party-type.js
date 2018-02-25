'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRoleRelationshipTypePartyType', {
        applicationPartyRoleRelationshipTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleRelationshipTypeID',
            allowNull: false,
            primaryKey: true
        },
        fromPartyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FromPartyTypeID',
            allowNull: false,
            primaryKey: true
        },
        toPartyTypeID: {
            type: DataTypes.INTEGER,
            field: 'ToPartyTypeID',
            allowNull: false,
            primaryKey: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRoleRelationshipTypePartyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRoleRelationshipTypePartyType = model.ApplicationPartyRoleRelationshipTypePartyType;

};
