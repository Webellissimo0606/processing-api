'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStatusTypeProductCategoryLinkOrder', {
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
        nextApplicationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'NextApplicationStatusTypeID',
            allowNull: true,
            references: {
                model: 'ApplicationStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationStatusTypeProductCategoryLinkOrder',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStatusTypeProductCategoryLinkOrder = model.ApplicationStatusTypeProductCategoryLinkOrder;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ProductCategory = model.ProductCategory;

    ApplicationStatusTypeProductCategoryLinkOrder.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTypeProductCategoryLinkOrder.belongsTo(ApplicationStatusType, {
        as: 'NextApplicationStatusType',
        foreignKey: 'NextApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTypeProductCategoryLinkOrder.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
