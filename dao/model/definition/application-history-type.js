'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationHistoryType', {
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
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        applicationHistoryTypeCategoryID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationHistoryTypeCategoryID',
            allowNull: false,
            references: {
                model: 'ApplicationHistoryTypeCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationHistoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationHistoryType = model.ApplicationHistoryType;
    var ApplicationHistory = model.ApplicationHistory;
    var ApplicationHistoryTypeCategory = model.ApplicationHistoryTypeCategory;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationHistoryPublicationType = model.ApplicationHistoryPublicationType;
    var PartyRole = model.PartyRole;

    ApplicationHistoryType.hasMany(ApplicationHistory, {
        as: 'ApplicationHistoryApplicationhistorytypeFks',
        foreignKey: 'ApplicationHistoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryType.belongsTo(ApplicationHistoryTypeCategory, {
        as: 'ApplicationHistoryTypeCategory',
        foreignKey: 'ApplicationHistoryTypeCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationHistoryApplicationContainers',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryType.belongsToMany(ApplicationHistoryPublicationType, {
        as: 'ApplicationHistoryApplicationHistoryPublicationTypes',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryTypeID',
        otherKey: 'ApplicationHistoryPublicationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryType.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryCreatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistoryType.belongsToMany(PartyRole, {
        as: 'ApplicationHistoryLastUpdatedByPartyRoles',
        through: ApplicationHistory,
        foreignKey: 'ApplicationHistoryTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
