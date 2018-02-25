'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementCheckpoint', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        settlementID: {
            type: DataTypes.INTEGER,
            field: 'SettlementID',
            allowNull: false,
            references: {
                model: 'Settlement',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        settlementCheckpointTypeID: {
            type: DataTypes.INTEGER,
            field: 'SettlementCheckpointTypeID',
            allowNull: false,
            references: {
                model: 'SettlementCheckpointType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        checkpointDate: {
            type: DataTypes.DATE,
            field: 'CheckpointDate',
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
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'SettlementCheckpoint',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementCheckpoint = model.SettlementCheckpoint;
    var SettlementCheckpointType = model.SettlementCheckpointType;
    var Settlement = model.Settlement;

    SettlementCheckpoint.belongsTo(SettlementCheckpointType, {
        as: 'SettlementCheckpointType',
        foreignKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpoint.belongsTo(Settlement, {
        as: 'Settlement',
        foreignKey: 'SettlementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
