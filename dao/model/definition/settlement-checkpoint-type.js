'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementCheckpointType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'SettlementCheckpointType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementCheckpointType = model.SettlementCheckpointType;
    var SettlementCheckpoint = model.SettlementCheckpoint;
    var SettlementCheckpointIllegalCurrent = model.SettlementCheckpointIllegalCurrent;
    var SettlementCheckpointRequiredBefore = model.SettlementCheckpointRequiredBefore;
    var Settlement = model.Settlement;

    SettlementCheckpointType.hasMany(SettlementCheckpoint, {
        as: 'SettlementCheckpointSettlementcheckpointtypeFks',
        foreignKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointType.hasMany(SettlementCheckpointIllegalCurrent, {
        as: 'IllegalSettlementCheckpointTypeIDSettlementcheckpoints',
        foreignKey: 'IllegalSettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointType.hasMany(SettlementCheckpointIllegalCurrent, {
        as: 'IDSettlementcheckpointtypeids',
        foreignKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointType.hasMany(SettlementCheckpointRequiredBefore, {
        as: 'RequiredPreviousSettlementCheckpointTypeIDSettlementcheckpoints',
        foreignKey: 'RequiredPreviousSettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointType.belongsToMany(Settlement, {
        as: 'SettlementCheckpointSettlements',
        through: SettlementCheckpoint,
        foreignKey: 'SettlementCheckpointTypeID',
        otherKey: 'SettlementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointType.belongsToMany(SettlementCheckpointType, {
        as: 'SettlementCheckpointIllegalCurrentSettlementCheckpointTypes',
        through: SettlementCheckpointIllegalCurrent,
        foreignKey: 'IllegalSettlementCheckpointTypeID',
        otherKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointType.belongsToMany(SettlementCheckpointType, {
        as: 'SettlementCheckpointIllegalCurrentIllegalSettlementCheckpointTypes',
        through: SettlementCheckpointIllegalCurrent,
        foreignKey: 'SettlementCheckpointTypeID',
        otherKey: 'IllegalSettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCheckpointType.belongsToMany(SettlementCheckpointType, {
        as: 'SettlementCheckpointRequiredBeforeSettlementCheckpointTypes',
        through: SettlementCheckpointRequiredBefore,
        foreignKey: 'RequiredPreviousSettlementCheckpointTypeID',
        otherKey: 'SettlementCheckpointTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
