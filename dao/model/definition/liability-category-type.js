'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LiabilityCategoryType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'LiabilityCategoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LiabilityCategoryType = model.LiabilityCategoryType;
    var LiabilityType = model.LiabilityType;

    LiabilityCategoryType.hasMany(LiabilityType, {
        as: 'LiabilityTypeLiabilitycategorytypeFks',
        foreignKey: 'LiabilityCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
