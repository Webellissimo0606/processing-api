'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentcontrolTemplate', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        location: {
            type: DataTypes.STRING(250),
            field: 'Location',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'documentcontrol_Template',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentcontrolTemplate = model.DocumentcontrolTemplate;

};
