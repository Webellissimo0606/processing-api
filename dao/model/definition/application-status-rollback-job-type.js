'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStatusRollbackJobType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationStatusTypeID',
            allowNull: false,
            references: {
                model: 'ApplicationStatusType',
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
        },
        jobTypeID: {
            type: DataTypes.INTEGER,
            field: 'JobTypeID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationStatusRollbackJobType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStatusRollbackJobType = model.ApplicationStatusRollbackJobType;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ProductCategory = model.ProductCategory;

    ApplicationStatusRollbackJobType.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusRollbackJobType.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusRollbackJobType.belongsTo(ProductCategory, {
        as: 'SubProductCategory',
        foreignKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
