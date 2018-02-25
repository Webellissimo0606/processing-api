'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStatusTraxJob', {
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
        traxJobTypeID: {
            type: DataTypes.INTEGER,
            field: 'TraxJobTypeID',
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(50),
            field: 'Title',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(100),
            field: 'Description',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
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
        tableName: 'ApplicationStatusTraxJob',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStatusTraxJob = model.ApplicationStatusTraxJob;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ProductCategory = model.ProductCategory;

    ApplicationStatusTraxJob.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTraxJob.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTraxJob.belongsTo(ProductCategory, {
        as: 'SubProductCategory',
        foreignKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
