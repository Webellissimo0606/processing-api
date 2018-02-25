'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementType', {
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
        tableName: 'SettlementType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementType = model.SettlementType;
    var Settlement = model.Settlement;
    var SettlementTypeCategoryTypeOption = model.SettlementTypeCategoryTypeOption;
    var SettlementCategoryType = model.SettlementCategoryType;

    SettlementType.hasMany(Settlement, {
        as: 'SettlementSettlementtypeFks',
        foreignKey: 'SettlementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementType.hasMany(SettlementTypeCategoryTypeOption, {
        as: 'CategoryTypeOptionSettlementtypeFks',
        foreignKey: 'SettlementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementType.belongsToMany(SettlementCategoryType, {
        as: 'SettlementTypeCategoryTypeOptionSettlementCategoryTypes',
        through: SettlementTypeCategoryTypeOption,
        foreignKey: 'SettlementTypeID',
        otherKey: 'SettlementCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
