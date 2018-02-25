'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('InsuranceTypeProductCategory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        insuranceTypeID: {
            type: DataTypes.INTEGER,
            field: 'InsuranceTypeID',
            allowNull: false,
            references: {
                model: 'InsuranceType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        subProductCategoryID: {
            type: DataTypes.INTEGER,
            field: 'SubProductCategoryID',
            allowNull: true,
            references: {
                model: 'ProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'InsuranceTypeProductCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var InsuranceTypeProductCategory = model.InsuranceTypeProductCategory;
    var InsuranceType = model.InsuranceType;
    var ProductCategory = model.ProductCategory;

    InsuranceTypeProductCategory.belongsTo(InsuranceType, {
        as: 'InsuranceType',
        foreignKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceTypeProductCategory.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceTypeProductCategory.belongsTo(ProductCategory, {
        as: 'SubProductCategory',
        foreignKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
