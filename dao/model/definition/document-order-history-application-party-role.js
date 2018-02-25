'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderHistoryApplicationPartyRole', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        documentOrderHistoryID: {
            type: DataTypes.INTEGER,
            field: 'DocumentOrderHistoryID',
            allowNull: false,
            references: {
                model: 'DocumentOrderHistory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: false,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        crumbsPartyDocumentGUID: {
            type: DataTypes.UUID,
            field: 'CrumbsPartyDocumentGUID',
            allowNull: true
        },
        recipientID: {
            type: DataTypes.STRING,
            field: 'RecipientID',
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
        tableName: 'DocumentOrderHistoryApplicationPartyRole',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderHistoryApplicationPartyRole = model.DocumentOrderHistoryApplicationPartyRole;
    var DocumentOrderHistoryApplicationPartyRoleStatus = model.DocumentOrderHistoryApplicationPartyRoleStatus;
    var DocumentOrderHistoryApplicationPartyRoleViewer = model.DocumentOrderHistoryApplicationPartyRoleViewer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistory = model.DocumentOrderHistory;
    var DocumentOrderStatusType = model.DocumentOrderStatusType;

    DocumentOrderHistoryApplicationPartyRole.hasMany(DocumentOrderHistoryApplicationPartyRoleStatus, {
        as: 'DOHApplicationPartyRoleStatusDohapplicationpartyroleFks',
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.hasMany(DocumentOrderHistoryApplicationPartyRoleViewer, {
        as: 'DOHApplicationPartyRoleViewerDohapplicationpartyroleFks',
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsTo(DocumentOrderHistory, {
        as: 'DocumentOrderHistory',
        foreignKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsToMany(DocumentOrderStatusType, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusDocumentOrderStatusTypes',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        otherKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleViewerCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleViewer,
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRole.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleViewerLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleViewer,
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
