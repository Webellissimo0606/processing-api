'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsObjectcolourtype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: false
        },
        objectTypeID: {
            type: DataTypes.INTEGER,
            field: 'ObjectTypeID',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
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
        },
        vedaCode: {
            type: DataTypes.STRING(10),
            field: 'VedaCode',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_ObjectColourType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsObjectcolourtype = model.CrumbsObjectcolourtype;

};
