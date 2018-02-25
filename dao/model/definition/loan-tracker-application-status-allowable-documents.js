'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanTrackerApplicationStatusAllowableDocument', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        scannedDocumentCode: {
            type: DataTypes.STRING(20),
            field: 'ScannedDocumentCode',
            allowNull: false
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
        requiresFile: {
            type: DataTypes.BOOLEAN,
            field: 'RequiresFile',
            allowNull: false
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
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'LoanTrackerApplicationStatusAllowableDocuments',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanTrackerApplicationStatusAllowableDocument = model.LoanTrackerApplicationStatusAllowableDocument;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ProductCategory = model.ProductCategory;

    LoanTrackerApplicationStatusAllowableDocument.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanTrackerApplicationStatusAllowableDocument.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
