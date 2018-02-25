'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxTreeValidationFacet', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        },
        validationFacetTypeID: {
            type: DataTypes.INTEGER,
            field: 'ValidationFacetTypeID',
            allowNull: false,
            references: {
                model: 'TraxTreeValidationFacetType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'TraxTreeValidationFacet',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxTreeValidationFacet = model.TraxTreeValidationFacet;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationFacetType = model.TraxTreeValidationFacetType;
    var TraxTreeValidationSource = model.TraxTreeValidationSource;

    TraxTreeValidationFacet.hasMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationPluginTraxtreevalidationfacetFks',
        foreignKey: 'ValidationFacetID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationFacet.belongsTo(TraxTreeValidationFacetType, {
        as: 'ValidationFacetType',
        foreignKey: 'ValidationFacetTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationFacet.belongsToMany(TraxTreeValidationSource, {
        as: 'TraxTreeValidationPluginValidationSources',
        through: TraxTreeValidationPlugin,
        foreignKey: 'ValidationFacetID',
        otherKey: 'ValidationSourceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
