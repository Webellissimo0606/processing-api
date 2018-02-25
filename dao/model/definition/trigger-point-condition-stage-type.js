'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TriggerPointConditionStageType', {
        triggerPointID: {
            type: DataTypes.INTEGER,
            field: 'TriggerPointID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'TriggerPoint',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionStageTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionStageTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationStageType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'TriggerPointConditionStageType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TriggerPointConditionStageType = model.TriggerPointConditionStageType;
    var ApplicationStageType = model.ApplicationStageType;
    var TriggerPoint = model.TriggerPoint;

    TriggerPointConditionStageType.belongsTo(ApplicationStageType, {
        as: 'ConditionStageType',
        foreignKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPointConditionStageType.belongsTo(TriggerPoint, {
        as: 'TriggerPoint',
        foreignKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
