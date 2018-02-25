'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxTreeTriggerValidationSuite', {
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
        validationSuiteID: {
            type: DataTypes.INTEGER,
            field: 'ValidationSuiteID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'TraxTreeValidationSuite',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'TraxTreeTriggerValidationSuite',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxTreeTriggerValidationSuite = model.TraxTreeTriggerValidationSuite;
    var Trigger = model.Trigger;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;

    TraxTreeTriggerValidationSuite.belongsTo(Trigger, {
        as: 'Trigger',
        foreignKey: 'TriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeTriggerValidationSuite.belongsTo(TraxTreeValidationSuite, {
        as: 'ValidationSuite',
        foreignKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
