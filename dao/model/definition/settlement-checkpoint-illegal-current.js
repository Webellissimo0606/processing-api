'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementCheckpointIllegalCurrent', {
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
        illegalSettlementCheckpointTypeID: {
            type: DataTypes.INTEGER,
            field: 'IllegalSettlementCheckpointTypeID',
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
        tableName: 'SettlementCheckpointIllegalCurrent',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementCheckpointIllegalCurrent = model.SettlementCheckpointIllegalCurrent;
    var SettlementCheckpointType = model.SettlementCheckpointType;

    SettlementCheckpointIllegalCurrent.belongsTo(SettlementCheckpointType, {
        as: 'IllegalSettlementCheckpointType',
        foreignKey: 'IllegalSettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointIllegalCurrent.belongsTo(SettlementCheckpointType, {
        as: 'SettlementCheckpointType',
        foreignKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
