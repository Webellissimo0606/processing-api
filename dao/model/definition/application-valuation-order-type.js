'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationValuationOrderType', {
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
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
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
        tableName: 'ApplicationValuationOrderType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationValuationOrderType = model.ApplicationValuationOrderType;
    var ValuationOrder = model.ValuationOrder;
    var ValuationOrderType = model.ValuationOrderType;
    var ValuationTierType = model.ValuationTierType;

    ApplicationValuationOrderType.hasMany(ValuationOrder, {
        as: 'ValuationOrderApplicationvaluationordertypeFks',
        foreignKey: 'ApplicationValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationValuationOrderType.belongsToMany(ValuationOrderType, {
        as: 'ValuationOrderValuationOrderTypes',
        through: ValuationOrder,
        foreignKey: 'ApplicationValuationOrderTypeID',
        otherKey: 'ValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationValuationOrderType.belongsToMany(ValuationTierType, {
        as: 'ValuationOrderValuationTierTypes',
        through: ValuationOrder,
        foreignKey: 'ApplicationValuationOrderTypeID',
        otherKey: 'ValuationTierTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
