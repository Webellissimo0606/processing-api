'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementCategoryType', {
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
        tableName: 'SettlementCategoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementCategoryType = model.SettlementCategoryType;
    var SettlementTypeCategoryTypeOption = model.SettlementTypeCategoryTypeOption;
    var SettlementType = model.SettlementType;

    SettlementCategoryType.hasMany(SettlementTypeCategoryTypeOption, {
        as: 'SettlementTypeCategoryTypeOptionSettlementcategorytypeFks',
        foreignKey: 'SettlementCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementCategoryType.belongsToMany(SettlementType, {
        as: 'SettlementTypeCategoryTypeOptionSettlementTypes',
        through: SettlementTypeCategoryTypeOption,
        foreignKey: 'SettlementCategoryTypeID',
        otherKey: 'SettlementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
