'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementTypeCategoryTypeOption', {
        settlementTypeID: {
            type: DataTypes.INTEGER,
            field: 'SettlementTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'SettlementType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        settlementCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'SettlementCategoryTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'SettlementCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'SettlementTypeCategoryTypeOption',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementTypeCategoryTypeOption = model.SettlementTypeCategoryTypeOption;
    var SettlementCategoryType = model.SettlementCategoryType;
    var SettlementType = model.SettlementType;

    SettlementTypeCategoryTypeOption.belongsTo(SettlementCategoryType, {
        as: 'SettlementCategoryType',
        foreignKey: 'SettlementCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementTypeCategoryTypeOption.belongsTo(SettlementType, {
        as: 'SettlementType',
        foreignKey: 'SettlementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
