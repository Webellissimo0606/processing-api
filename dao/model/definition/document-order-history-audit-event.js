'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderHistoryAuditEvent', {
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
        tableName: 'DocumentOrderHistoryAuditEvent',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderHistoryAuditEvent = model.DocumentOrderHistoryAuditEvent;
    var DocumentOrderHistoryAuditEventDatum = model.DocumentOrderHistoryAuditEventDatum;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistory = model.DocumentOrderHistory;
    var DocumentOrderHistoryAuditKeyType = model.DocumentOrderHistoryAuditKeyType;

    DocumentOrderHistoryAuditEvent.hasMany(DocumentOrderHistoryAuditEventDatum, {
        as: 'DOHAEventDataDocumentorderhistoryauditeventFks',
        foreignKey: 'DocumentOrderHistoryAuditEventID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditEvent.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditEvent.belongsTo(DocumentOrderHistory, {
        as: 'DocumentOrderHistory',
        foreignKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditEvent.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryAuditEventDatumCreatedByPartyRoles',
        through: DocumentOrderHistoryAuditEventDatum,
        foreignKey: 'DocumentOrderHistoryAuditEventID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditEvent.belongsToMany(DocumentOrderHistoryAuditKeyType, {
        as: 'DocumentOrderHistoryAuditEventDatumDocumentOrderHistoryAuditKeyTypes',
        through: DocumentOrderHistoryAuditEventDatum,
        foreignKey: 'DocumentOrderHistoryAuditEventID',
        otherKey: 'DocumentOrderHistoryAuditKeyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
