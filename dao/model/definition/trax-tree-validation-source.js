'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxTreeValidationSource', {
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
        crumbsPartyID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsPartyID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'TraxTreeValidationSource',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxTreeValidationSource = model.TraxTreeValidationSource;
    var TraxTreeValidationPlugin = model.TraxTreeValidationPlugin;
    var TraxTreeValidationFacet = model.TraxTreeValidationFacet;

    TraxTreeValidationSource.hasMany(TraxTreeValidationPlugin, {
        as: 'TraxTreeValidationPluginTraxtreevalidationsourceFks',
        foreignKey: 'ValidationSourceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxTreeValidationSource.belongsToMany(TraxTreeValidationFacet, {
        as: 'TraxTreeValidationPluginValidationFacets',
        through: TraxTreeValidationPlugin,
        foreignKey: 'ValidationSourceID',
        otherKey: 'ValidationFacetID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
