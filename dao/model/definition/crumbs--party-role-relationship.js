'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartyrolerelationship', {
        relationshipTypeID: {
            type: DataTypes.INTEGER,
            field: 'RelationshipTypeID',
            allowNull: false
        },
        parentPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ParentPartyRoleID',
            allowNull: false
        },
        childPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ChildPartyRoleID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyRoleRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartyrolerelationship = model.CrumbsPartyrolerelationship;

};
