'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FeeTypeProductCategory', {
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
        feeTypeID: {
            type: DataTypes.INTEGER,
            field: 'FeeTypeID',
            allowNull: false,
            references: {
                model: 'FeeType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        amount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Amount',
            allowNull: false
        },
        frequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FrequencyTypeID',
            allowNull: false,
            references: {
                model: 'FrequencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        mandatory: {
            type: DataTypes.BOOLEAN,
            field: 'Mandatory',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'FeeTypeProductCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var FeeTypeProductCategory = model.FeeTypeProductCategory;
    var PartyRole = model.PartyRole;
    var FeeType = model.FeeType;
    var FrequencyType = model.FrequencyType;
    var ProductCategory = model.ProductCategory;

    FeeTypeProductCategory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeTypeProductCategory.belongsTo(FeeType, {
        as: 'FeeType',
        foreignKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeTypeProductCategory.belongsTo(FrequencyType, {
        as: 'FrequencyType',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeTypeProductCategory.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeTypeProductCategory.belongsTo(ProductCategory, {
        as: 'ProductCategory',
        foreignKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
