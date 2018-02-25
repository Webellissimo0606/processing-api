'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRoleRelationshipType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        consideredSameHousehold: {
            type: DataTypes.BOOLEAN,
            field: 'ConsideredSameHousehold',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRoleRelationshipType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRoleRelationshipType = model.ApplicationPartyRoleRelationshipType;
    var ApplicationPartyRoleRelationship = model.ApplicationPartyRoleRelationship;
    var ApplicationPartyRole = model.ApplicationPartyRole;

    ApplicationPartyRoleRelationshipType.hasMany(ApplicationPartyRoleRelationship, {
        as: 'ApplicationPartyRoleRelationshipApplicationpartyrolerelationshes',
        foreignKey: 'ApplicationPartyRoleRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleRelationshipType.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleRelationshipChildApplicationPartyRoles',
        through: ApplicationPartyRoleRelationship,
        foreignKey: 'ApplicationPartyRoleRelationshipTypeID',
        otherKey: 'ChildApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleRelationshipType.belongsToMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleRelationshipParentApplicationPartyRoles',
        through: ApplicationPartyRoleRelationship,
        foreignKey: 'ApplicationPartyRoleRelationshipTypeID',
        otherKey: 'ParentApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
