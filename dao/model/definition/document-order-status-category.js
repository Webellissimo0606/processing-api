'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderStatusCategory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'DocumentOrderStatusCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderStatusCategory = model.DocumentOrderStatusCategory;
    var DocumentOrderStatusType = model.DocumentOrderStatusType;

    DocumentOrderStatusCategory.hasMany(DocumentOrderStatusType, {
        as: 'DocumentOrderStatusTypeDocumentorderstatuscategoryFks',
        foreignKey: 'DocumentOrderStatusCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
