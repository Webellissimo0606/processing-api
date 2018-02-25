'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxTreeValidationSuitePlugin', {
        validationPluginID: {
            type: DataTypes.INTEGER,
            field: 'ValidationPluginID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'TraxTreeValidationPlugin',
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
        tableName: 'TraxTreeValidationSuitePlugin',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxTreeValidationSuitePlugin = model.TraxTreeValidationSuitePlugin;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationSuite = model.TraxTreeValidationSuite;

    TraxTreeValidationSuitePlugin.belongsTo(TraxTreeValidationPlugin, {
        as: 'ValidationPlugin',
        foreignKey: 'ValidationPluginID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationSuitePlugin.belongsTo(TraxTreeValidationSuite, {
        as: 'ValidationSuite',
        foreignKey: 'ValidationSuiteID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
