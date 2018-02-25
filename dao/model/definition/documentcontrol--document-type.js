'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentcontrolDocumenttype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        code: {
            type: DataTypes.STRING(20),
            field: 'Code',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(100),
            field: 'Description',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'documentcontrol_DocumentType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentcontrolDocumenttype = model.DocumentcontrolDocumenttype;

};
