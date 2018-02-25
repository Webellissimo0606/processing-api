'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStatusTypeProductCategory', {
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
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationStatusTypeProductCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStatusTypeProductCategory = model.ApplicationStatusTypeProductCategory;
    var ApplicationStatusTypeProductCategoryCrashReasonType = model.ApplicationStatusTypeProductCategoryCrashReasonType;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ProductCategory = model.ProductCategory;
    var CrashReasonType = model.CrashReasonType;

    ApplicationStatusTypeProductCategory.hasMany(ApplicationStatusTypeProductCategoryCrashReasonType, {
        as: 'CrashReasonTypeApplications',
        foreignKey: 'ApplicationStatusTypeProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTypeProductCategory.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTypeProductCategory.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTypeProductCategory.belongsToMany(CrashReasonType, {
        as: 'ApplicationStatusTypeProductCategoryCrashReasonTypeCrashReasonTypes',
        through: ApplicationStatusTypeProductCategoryCrashReasonType,
        foreignKey: 'ApplicationStatusTypeProductCategoryID',
        otherKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
