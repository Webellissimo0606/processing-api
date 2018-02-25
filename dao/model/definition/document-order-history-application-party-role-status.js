'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderHistoryApplicationPartyRoleStatus', {
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
        documentOrderStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentOrderStatusTypeID',
            allowNull: false,
            references: {
                model: 'DocumentOrderStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        tableName: 'DocumentOrderHistoryApplicationPartyRoleStatus',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderHistoryApplicationPartyRoleStatus = model.DocumentOrderHistoryApplicationPartyRoleStatus;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistoryApplicationPartyRole = model.DocumentOrderHistoryApplicationPartyRole;
    var DocumentOrderStatusType = model.DocumentOrderStatusType;

    DocumentOrderHistoryApplicationPartyRoleStatus.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRoleStatus.belongsTo(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRole',
        foreignKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRoleStatus.belongsTo(DocumentOrderStatusType, {
        as: 'DocumentOrderStatusType',
        foreignKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryApplicationPartyRoleStatus.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
