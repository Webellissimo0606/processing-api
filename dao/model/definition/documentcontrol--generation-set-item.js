'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentcontrolGenerationsetitem', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        generationSetID: {
            type: DataTypes.INTEGER,
            field: 'GenerationSetID',
            allowNull: false
        },
        generationID: {
            type: DataTypes.INTEGER,
            field: 'GenerationID',
            allowNull: false
        },
        umpireRule: {
            type: DataTypes.CHAR(24),
            field: 'UmpireRule',
            allowNull: true
        },
        includeInPack: {
            type: DataTypes.BOOLEAN,
            field: 'IncludeInPack',
            allowNull: false
        },
        generationOrder: {
            type: DataTypes.INTEGER,
            field: 'GenerationOrder',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'documentcontrol_GenerationSetItem',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentcontrolGenerationsetitem = model.DocumentcontrolGenerationsetitem;

};
