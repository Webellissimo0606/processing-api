'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionStageCategoryType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING(250),
            field: 'DisplayName',
            allowNull: false
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
        tableName: 'ConditionStageCategoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionStageCategoryType = model.ConditionStageCategoryType;
    var ApplicationStageType = model.ApplicationStageType;

    ConditionStageCategoryType.hasMany(ApplicationStageType, {
        as: 'ApplicationStageTypeConditionstagecategorytypeFks',
        foreignKey: 'ConditionStageCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
