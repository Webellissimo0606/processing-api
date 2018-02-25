'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRoleType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRoleType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRoleType = model.ApplicationPartyRoleType;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;

    ApplicationPartyRoleType.hasMany(ApplicationPartyRole, {
        as: 'ApplicationPartyRoleApplicationpartyroletypeFks',
        foreignKey: 'ApplicationPartyRoleTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationPartyRoleApplicationContainers',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationPartyRoleTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleType.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleCreatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationPartyRoleTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleType.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRoleLastUpdatedByPartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationPartyRoleTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationPartyRoleType.belongsToMany(PartyRole, {
        as: 'ApplicationPartyRolePartyRoles',
        through: ApplicationPartyRole,
        foreignKey: 'ApplicationPartyRoleTypeID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
