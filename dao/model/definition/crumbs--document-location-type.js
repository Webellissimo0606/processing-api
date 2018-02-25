'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsDocumentlocationtype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        contentTypeID: {
            type: DataTypes.INTEGER,
            field: 'ContentTypeID',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_DocumentLocationType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsDocumentlocationtype = model.CrumbsDocumentlocationtype;

};
