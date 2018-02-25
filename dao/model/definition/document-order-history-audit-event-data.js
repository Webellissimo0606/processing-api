'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderHistoryAuditEventDatum', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        documentOrderHistoryAuditEventID: {
            type: DataTypes.INTEGER,
            field: 'DocumentOrderHistoryAuditEventID',
            allowNull: false,
            references: {
                model: 'DocumentOrderHistoryAuditEvent',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        documentOrderHistoryAuditKeyTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentOrderHistoryAuditKeyTypeID',
            allowNull: false,
            references: {
                model: 'DocumentOrderHistoryAuditKeyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        value: {
            type: DataTypes.TEXT,
            field: 'Value',
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
        }
    }, {
        schema: 'public',
        tableName: 'DocumentOrderHistoryAuditEventData',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderHistoryAuditEventDatum = model.DocumentOrderHistoryAuditEventDatum;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistoryAuditEvent = model.DocumentOrderHistoryAuditEvent;
    var DocumentOrderHistoryAuditKeyType = model.DocumentOrderHistoryAuditKeyType;

    DocumentOrderHistoryAuditEventDatum.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditEventDatum.belongsTo(DocumentOrderHistoryAuditEvent, {
        as: 'DocumentOrderHistoryAuditEvent',
        foreignKey: 'DocumentOrderHistoryAuditEventID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditEventDatum.belongsTo(DocumentOrderHistoryAuditKeyType, {
        as: 'DocumentOrderHistoryAuditKeyType',
        foreignKey: 'DocumentOrderHistoryAuditKeyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
