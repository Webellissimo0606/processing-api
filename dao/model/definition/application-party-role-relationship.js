'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRoleRelationship', {
        parentApplicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ParentApplicationPartyRoleID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        childApplicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ChildApplicationPartyRoleID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationPartyRoleRelationshipTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleRelationshipTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationPartyRoleRelationshipType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRoleRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRoleRelationship = model.ApplicationPartyRoleRelationship;
    var ApplicationPartyRoleRelationshipType = model.ApplicationPartyRoleRelationshipType;
    var ApplicationPartyRole = model.ApplicationPartyRole;

    ApplicationPartyRoleRelationship.belongsTo(ApplicationPartyRoleRelationshipType, {
        as: 'ApplicationPartyRoleRelationshipType',
        foreignKey: 'ApplicationPartyRoleRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleRelationship.belongsTo(ApplicationPartyRole, {
        as: 'ChildApplicationPartyRole',
        foreignKey: 'ChildApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleRelationship.belongsTo(ApplicationPartyRole, {
        as: 'ParentApplicationPartyRole',
        foreignKey: 'ParentApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
