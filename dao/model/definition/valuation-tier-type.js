'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationTierType', {
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
        tableName: 'ValuationTierType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationTierType = model.ValuationTierType;
    var ValuationOrder = model.ValuationOrder;
    var ApplicationValuationOrderType = model.ApplicationValuationOrderType;
    var ValuationOrderType = model.ValuationOrderType;

    ValuationTierType.hasMany(ValuationOrder, {
        as: 'ValuationOrderValuationtiertypeFks',
        foreignKey: 'ValuationTierTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationTierType.belongsToMany(ApplicationValuationOrderType, {
        as: 'ValuationOrderApplicationValuationOrderTypes',
        through: ValuationOrder,
        foreignKey: 'ValuationTierTypeID',
        otherKey: 'ApplicationValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationTierType.belongsToMany(ValuationOrderType, {
        as: 'ValuationOrderValuationOrderTypes',
        through: ValuationOrder,
        foreignKey: 'ValuationTierTypeID',
        otherKey: 'ValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
