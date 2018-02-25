'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        envelopeID: {
            type: DataTypes.STRING(512),
            field: 'EnvelopeID',
            allowNull: true
        },
        scannedFileDocumentID: {
            type: DataTypes.STRING(256),
            field: 'ScannedFileDocumentID',
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
            allowNull: false,
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
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'DocumentOrderHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderHistory = model.DocumentOrderHistory;
    var DocumentOrderHistoryApplicationPartyRole = model.DocumentOrderHistoryApplicationPartyRole;
    var DocumentOrderHistoryAuditEvent = model.DocumentOrderHistoryAuditEvent;
    var DocumentOrderStatusHistory = model.DocumentOrderStatusHistory;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var DocumentOrderStatusType = model.DocumentOrderStatusType;

    DocumentOrderHistory.hasMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DOHApplicationPartyRoleDocumentorderhistoryFks',
        foreignKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.hasMany(DocumentOrderHistoryAuditEvent, {
        as: 'AuditDocumentorderhistoryFks',
        foreignKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.hasMany(DocumentOrderStatusHistory, {
        as: 'DocumentOrderStatusHistoryDocumentorderhistoryFks',
        foreignKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsToMany(ApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'DocumentOrderHistoryID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'DocumentOrderHistoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRole,
        foreignKey: 'DocumentOrderHistoryID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryAuditEventCreatedByPartyRoles',
        through: DocumentOrderHistoryAuditEvent,
        foreignKey: 'DocumentOrderHistoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsToMany(PartyRole, {
        as: 'DocumentOrderStatusHistoryCreatedByPartyRoles',
        through: DocumentOrderStatusHistory,
        foreignKey: 'DocumentOrderHistoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsToMany(DocumentOrderStatusType, {
        as: 'DocumentOrderStatusHistoryDocumentOrderStatusTypes',
        through: DocumentOrderStatusHistory,
        foreignKey: 'DocumentOrderHistoryID',
        otherKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistory.belongsToMany(PartyRole, {
        as: 'DocumentOrderStatusHistoryLastUpdatedByPartyRoles',
        through: DocumentOrderStatusHistory,
        foreignKey: 'DocumentOrderHistoryID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
