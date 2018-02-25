'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationHistoryPublicationType', {
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
        description: {
            type: DataTypes.STRING(250),
            field: 'Description',
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
        tableName: 'ApplicationHistoryPublicationType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationHistoryPublicationType = model.ApplicationHistoryPublicationType;
    var ApplicationHistory = model.ApplicationHistory;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationHistoryType = model.ApplicationHistoryType;
    var PartyRole = model.PartyRole;

    ApplicationHistoryPublicationType.hasMany(ApplicationHistory, {
        as: 'ApplicationHistoryApplicationhistorypublicationtypeFks',
        foreignKey: 'ApplicationHistoryPublicationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryPublicationType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationHistoryApplicationContainers',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryPublicationTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryPublicationType.belongsToMany(ApplicationHistoryType, {
        as: 'ApplicationHistoryApplicationHistoryTypes',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryPublicationTypeID',
        otherKey: 'ApplicationHistoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryPublicationType.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryCreatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryPublicationTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryPublicationType.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryLastUpdatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryPublicationTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
