'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderHistoryAuditKeyType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(500),
            field: 'Name',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'DocumentOrderHistoryAuditKeyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderHistoryAuditKeyType = model.DocumentOrderHistoryAuditKeyType;
    var DocumentOrderHistoryAuditEventDatum = model.DocumentOrderHistoryAuditEventDatum;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistoryAuditEvent = model.DocumentOrderHistoryAuditEvent;

    DocumentOrderHistoryAuditKeyType.hasMany(DocumentOrderHistoryAuditEventDatum, {
        as: 'DOHAEventDataDocumentorderhistoryauditkeytypeFks',
        foreignKey: 'DocumentOrderHistoryAuditKeyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditKeyType.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryAuditEventDatumCreatedByPartyRoles',
        through: DocumentOrderHistoryAuditEventDatum,
        foreignKey: 'DocumentOrderHistoryAuditKeyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderHistoryAuditKeyType.belongsToMany(DocumentOrderHistoryAuditEvent, {
        as: 'DocumentOrderHistoryAuditEventDatumDocumentOrderHistoryAuditEvents',
        through: DocumentOrderHistoryAuditEventDatum,
        foreignKey: 'DocumentOrderHistoryAuditKeyTypeID',
        otherKey: 'DocumentOrderHistoryAuditEventID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
