'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanPurposeTypeTraxJobType', {
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
            allowNull: true,
            references: {
                model: 'ProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanPurposeTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanPurposeTypeID',
            allowNull: false,
            references: {
                model: 'LoanPurposeType',
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
        crumbsOriginatorPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsOriginatorPartyRoleID',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(200),
            field: 'Description',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'LoanPurposeTypeTraxJobType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanPurposeTypeTraxJobType = model.LoanPurposeTypeTraxJobType;
    var LoanPurposeType = model.LoanPurposeType;
    var ProductCategory = model.ProductCategory;

    LoanPurposeTypeTraxJobType.belongsTo(LoanPurposeType, {
        as: 'LoanPurposeType',
        foreignKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanPurposeTypeTraxJobType.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
