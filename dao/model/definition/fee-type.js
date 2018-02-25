'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FeeType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(200),
            field: 'Description',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'FeeType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var FeeType = model.FeeType;
    var ApplicationContainerFee = model.ApplicationContainerFee;
    var FeeTypeProductCategory = model.FeeTypeProductCategory;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var FrequencyType = model.FrequencyType;
    var ProductCategory = model.ProductCategory;

    FeeType.hasMany(ApplicationContainerFee, {
        as: 'ApplicationContainerFeeFeetypeFks',
        foreignKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.hasMany(FeeTypeProductCategory, {
        as: 'ProductCategoryFeetypeFks',
        foreignKey: 'FeeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationContainerFeeApplicationContainers',
        through: ApplicationContainerFee,
        foreignKey: 'FeeTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeCreatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'FeeTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(FrequencyType, {
        as: 'ApplicationContainerFeeFrequencyTypes',
        through: ApplicationContainerFee,
        foreignKey: 'FeeTypeID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(PartyRole, {
        as: 'ApplicationContainerFeeLastUpdatedByPartyRoles',
        through: ApplicationContainerFee,
        foreignKey: 'FeeTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryCreatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'FeeTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(FrequencyType, {
        as: 'FeeTypeProductCategoryFrequencyTypes',
        through: FeeTypeProductCategory,
        foreignKey: 'FeeTypeID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(PartyRole, {
        as: 'FeeTypeProductCategoryLastUpdatedByPartyRoles',
        through: FeeTypeProductCategory,
        foreignKey: 'FeeTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FeeType.belongsToMany(ProductCategory, {
        as: 'FeeTypeProductCategoryProductCategories',
        through: FeeTypeProductCategory,
        foreignKey: 'FeeTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
