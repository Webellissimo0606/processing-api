'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TriggerActionParameter', {
        triggerActionID: {
            type: DataTypes.INTEGER,
            field: 'TriggerActionID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'TriggerAction',
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
        tableName: 'TriggerActionParameter',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TriggerActionParameter = model.TriggerActionParameter;
    var TriggerAction = model.TriggerAction;

    TriggerActionParameter.belongsTo(TriggerAction, {
        as: 'TriggerAction',
        foreignKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
