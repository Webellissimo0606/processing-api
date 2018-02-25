'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FinalApprovalProcessTypeProductCategoryType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        finalApprovalProcessTypeID: {
            type: DataTypes.INTEGER,
            field: 'FinalApprovalProcessTypeID',
            allowNull: false,
            references: {
                model: 'FinalApprovalProcessType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        productCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'ProductCategoryTypeID',
            allowNull: false,
            references: {
                model: 'ProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        subProductCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'SubProductCategoryTypeID',
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
        tableName: 'FinalApprovalProcessTypeProductCategoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var FinalApprovalProcessTypeProductCategoryType = model.FinalApprovalProcessTypeProductCategoryType;
    var FinalApprovalProcessProductCategoryJobType = model.FinalApprovalProcessProductCategoryJobType;
    var FinalApprovalProcessType = model.FinalApprovalProcessType;
    var ProductCategory = model.ProductCategory;

    FinalApprovalProcessTypeProductCategoryType.hasMany(FinalApprovalProcessProductCategoryJobType, {
        as: 'FinalApprovalProcessProductCategoryJobTypeFaptpctFks',
        foreignKey: 'FinalApprovalProcesProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessTypeProductCategoryType.belongsTo(FinalApprovalProcessType, {
        as: 'FinalApprovalProcessType',
        foreignKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessTypeProductCategoryType.belongsTo(ProductCategory, {
        as: 'ProductCategoryType',
        foreignKey: 'ProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessTypeProductCategoryType.belongsTo(ProductCategory, {
        as: 'SubProductCategoryType',
        foreignKey: 'SubProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
