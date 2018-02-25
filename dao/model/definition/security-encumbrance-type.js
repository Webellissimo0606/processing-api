'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SecurityEncumbranceType', {
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
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: false
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
        }
    }, {
        schema: 'public',
        tableName: 'SecurityEncumbranceType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SecurityEncumbranceType = model.SecurityEncumbranceType;
    var SecurityTitleEncumbrance = model.SecurityTitleEncumbrance;

    SecurityEncumbranceType.hasMany(SecurityTitleEncumbrance, {
        as: 'SecurityTitleEncumbrancesEncumbrancetypeFks',
        foreignKey: 'EncumbranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
