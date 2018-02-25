'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('InsuranceType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            field: 'Description',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'InsuranceType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var InsuranceType = model.InsuranceType;
    var Insurance = model.Insurance;
    var InsuranceTypeProductCategory = model.InsuranceTypeProductCategory;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;
    var ProductCategory = model.ProductCategory;

    InsuranceType.hasMany(Insurance, {
        as: 'InsuranceInsurancetypeFks',
        foreignKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceType.hasMany(InsuranceTypeProductCategory, {
        as: 'ProductCategoryInsurancetypeFks',
        foreignKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceType.belongsToMany(ApplicationSecurity, {
        as: 'InsuranceApplicationSecurities',
        through: Insurance,
        foreignKey: 'InsuranceTypeID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceType.belongsToMany(PartyRole, {
        as: 'InsuranceCreatedByPartyRoles',
        through: Insurance,
        foreignKey: 'InsuranceTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceType.belongsToMany(PartyRole, {
        as: 'InsuranceLastUpdatedByPartyRoles',
        through: Insurance,
        foreignKey: 'InsuranceTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceType.belongsToMany(ProductCategory, {
        as: 'InsuranceTypeProductCategoryProductCategories',
        through: InsuranceTypeProductCategory,
        foreignKey: 'InsuranceTypeID',
        otherKey: 'ProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    InsuranceType.belongsToMany(ProductCategory, {
        as: 'InsuranceTypeProductCategorySubProductCategories',
        through: InsuranceTypeProductCategory,
        foreignKey: 'InsuranceTypeID',
        otherKey: 'SubProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
