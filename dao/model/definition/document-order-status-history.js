'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderStatusHistory', {
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
        tableName: 'DocumentOrderStatusHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderStatusHistory = model.DocumentOrderStatusHistory;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistory = model.DocumentOrderHistory;
    var DocumentOrderStatusType = model.DocumentOrderStatusType;

    DocumentOrderStatusHistory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusHistory.belongsTo(DocumentOrderHistory, {
        as: 'DocumentOrderHistory',
        foreignKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusHistory.belongsTo(DocumentOrderStatusType, {
        as: 'DocumentOrderStatusType',
        foreignKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusHistory.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
