'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationHistoryTypeCategory', {
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
        tableName: 'ApplicationHistoryTypeCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationHistoryTypeCategory = model.ApplicationHistoryTypeCategory;
    var ApplicationHistoryType = model.ApplicationHistoryType;

    ApplicationHistoryTypeCategory.hasMany(ApplicationHistoryType, {
        as: 'ApplicationHistoryTypeApplicationhistorytypecategoryFks',
        foreignKey: 'ApplicationHistoryTypeCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
