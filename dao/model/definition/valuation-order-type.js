'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationOrderType', {
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
        valExName: {
            type: DataTypes.STRING(250),
            field: 'ValExName',
            allowNull: true
        },
        valExDescription: {
            type: DataTypes.STRING(250),
            field: 'ValExDescription',
            allowNull: true
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
        tableName: 'ValuationOrderType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationOrderType = model.ValuationOrderType;
    var ValuationOrder = model.ValuationOrder;
    var ApplicationValuationOrderType = model.ApplicationValuationOrderType;
    var ValuationTierType = model.ValuationTierType;

    ValuationOrderType.hasMany(ValuationOrder, {
        as: 'ValuationOrderValuationordertypeFks',
        foreignKey: 'ValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationOrderType.belongsToMany(ApplicationValuationOrderType, {
        as: 'ValuationOrderApplicationValuationOrderTypes',
        through: ValuationOrder,
        foreignKey: 'ValuationOrderTypeID',
        otherKey: 'ApplicationValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationOrderType.belongsToMany(ValuationTierType, {
        as: 'ValuationOrderValuationTierTypes',
        through: ValuationOrder,
        foreignKey: 'ValuationOrderTypeID',
        otherKey: 'ValuationTierTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
