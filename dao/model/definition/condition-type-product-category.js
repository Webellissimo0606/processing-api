'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionTypeProductCategory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        productCategoryID: {
            type: DataTypes.INTEGER,
            field: 'ProductCategoryID',
            allowNull: false,
            references: {
                model: 'ProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionTypeID',
            allowNull: false,
            references: {
                model: 'ConditionType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ConditionTypeProductCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionTypeProductCategory = model.ConditionTypeProductCategory;
    var ConditionType = model.ConditionType;
    var ProductCategory = model.ProductCategory;

    ConditionTypeProductCategory.belongsTo(ConditionType, {
        as: 'ConditionType',
        foreignKey: 'ConditionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeProductCategory.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
