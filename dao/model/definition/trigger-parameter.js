'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TriggerParameter', {
        triggerID: {
            type: DataTypes.INTEGER,
            field: 'TriggerID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Trigger',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false,
            primaryKey: true
        },
        value: {
            type: DataTypes.TEXT,
            field: 'Value',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'TriggerParameter',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TriggerParameter = model.TriggerParameter;
    var Trigger = model.Trigger;

    TriggerParameter.belongsTo(Trigger, {
        as: 'Trigger',
        foreignKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
