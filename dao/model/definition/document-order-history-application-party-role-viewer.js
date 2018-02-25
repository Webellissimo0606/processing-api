'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderHistoryApplicationPartyRoleViewer', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        documentOrderHistoryApplicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'DocumentOrderHistoryApplicationPartyRoleID',
            allowNull: false,
            references: {
                model: 'DocumentOrderHistoryApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        senderViewURL: {
            type: DataTypes.STRING(512),
            field: 'SenderViewURL',
            allowNull: false
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
        accessed: {
            type: DataTypes.DATE,
            field: 'Accessed',
            allowNull: true
        },
        expired: {
            type: DataTypes.DATE,
            field: 'Expired',
            allowNull: true
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
        tableName: 'DocumentOrderHistoryApplicationPartyRoleViewer',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderHistoryApplicationPartyRoleViewer = model.DocumentOrderHistoryApplicationPartyRoleViewer;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistoryApplicationPartyRole = model.DocumentOrderHistoryApplicationPartyRole;

    DocumentOrderHistoryApplicationPartyRoleViewer.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRoleViewer.belongsTo(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRole',
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRoleViewer.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
