'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Settlement', {
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
            allowNull: false
        },
        settlementTypeID: {
            type: DataTypes.INTEGER,
            field: 'SettlementTypeID',
            allowNull: false,
            references: {
                model: 'SettlementType',
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
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'Settlement',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Settlement = model.Settlement;
    var SettlementCheckpoint = model.SettlementCheckpoint;
    var SettlementProcessHistorySettlement = model.SettlementProcessHistorySettlement;
    var SettlementType = model.SettlementType;
    var SettlementCheckpointType = model.SettlementCheckpointType;
    var SettlementProcessHistory = model.SettlementProcessHistory;

    Settlement.hasMany(SettlementCheckpoint, {
        as: 'CheckpointSettlementFks',
        foreignKey: 'SettlementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Settlement.hasMany(SettlementProcessHistorySettlement, {
        as: 'ProcessHistorySettlementsSettlementFks',
        foreignKey: 'SettlementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Settlement.belongsTo(SettlementType, {
        as: 'SettlementType',
        foreignKey: 'SettlementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Settlement.belongsToMany(SettlementCheckpointType, {
        as: 'SettlementCheckpointSettlementCheckpointTypes',
        through: SettlementCheckpoint,
        foreignKey: 'SettlementID',
        otherKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Settlement.belongsToMany(SettlementProcessHistory, {
        as: 'SettlementProcessHistorySettlementSettlementProcessHistories',
        through: SettlementProcessHistorySettlement,
        foreignKey: 'SettlementID',
        otherKey: 'SettlementProcessHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
