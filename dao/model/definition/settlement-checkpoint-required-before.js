'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementCheckpointRequiredBefore', {
        settlementCheckpointTypeID: {
            type: DataTypes.INTEGER,
            field: 'SettlementCheckpointTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'SettlementCheckpointType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        requiredPreviousSettlementCheckpointTypeID: {
            type: DataTypes.INTEGER,
            field: 'RequiredPreviousSettlementCheckpointTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'SettlementCheckpointType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'SettlementCheckpointRequiredBefore',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementCheckpointRequiredBefore = model.SettlementCheckpointRequiredBefore;
    var SettlementCheckpointType = model.SettlementCheckpointType;

    SettlementCheckpointRequiredBefore.belongsTo(SettlementCheckpointType, {
        as: 'RequiredPreviousSettlementCheckpointType',
        foreignKey: 'RequiredPreviousSettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointRequiredBefore.belongsTo(SettlementCheckpointType, {
        as: 'SettlementCheckpointType',
        foreignKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
