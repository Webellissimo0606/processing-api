'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentcontrolGeneration', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        dataSource: {
            type: DataTypes.CHAR(24),
            field: 'DataSource',
            allowNull: false
        },
        templateID: {
            type: DataTypes.INTEGER,
            field: 'TemplateID',
            allowNull: false
        },
        documentTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentTypeID',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'documentcontrol_Generation',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentcontrolGeneration = model.DocumentcontrolGeneration;

};
