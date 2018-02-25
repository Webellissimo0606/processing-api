'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationHistoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationHistoryTypeID',
            allowNull: false,
            references: {
                model: 'ApplicationHistoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationHistoryPublicationTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationHistoryPublicationTypeID',
            allowNull: false,
            references: {
                model: 'ApplicationHistoryPublicationType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        title: {
            type: DataTypes.STRING(100),
            field: 'Title',
            allowNull: false
        },
        comments: {
            type: DataTypes.STRING(8000),
            field: 'Comments',
            allowNull: true
        },
        followUpDate: {
            type: DataTypes.DATE,
            field: 'FollowUpDate',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.INTEGER,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationHistory = model.ApplicationHistory;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationHistoryPublicationType = model.ApplicationHistoryPublicationType;
    var ApplicationHistoryType = model.ApplicationHistoryType;
    var PartyRole = model.PartyRole;

    ApplicationHistory.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistory.belongsTo(ApplicationHistoryPublicationType, {
        as: 'ApplicationHistoryPublicationType',
        foreignKey: 'ApplicationHistoryPublicationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistory.belongsTo(ApplicationHistoryType, {
        as: 'ApplicationHistoryType',
        foreignKey: 'ApplicationHistoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationHistory.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
