'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EmploymentCategoryType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'EmploymentCategoryType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EmploymentCategoryType = model.EmploymentCategoryType;
    var Employment = model.Employment;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var EmploymentBasisType = model.EmploymentBasisType;
    var EmploymentStatusType = model.EmploymentStatusType;

    EmploymentCategoryType.hasMany(Employment, {
        as: 'EmploymentEmploymentcategorytypeFks',
        foreignKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentCategoryType.belongsToMany(ApplicationPartyRole, {
        as: 'EmploymentApplicationPartyRoles',
        through: Employment,
        foreignKey: 'CategoryTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentCategoryType.belongsToMany(PartyRole, {
        as: 'EmploymentCreatedByPartyRoles',
        through: Employment,
        foreignKey: 'CategoryTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentCategoryType.belongsToMany(CurrencyType, {
        as: 'EmploymentCurrencyTypes',
        through: Employment,
        foreignKey: 'CategoryTypeID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentCategoryType.belongsToMany(EmploymentBasisType, {
        as: 'EmploymentBasisTypes',
        through: Employment,
        foreignKey: 'CategoryTypeID',
        otherKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentCategoryType.belongsToMany(EmploymentStatusType, {
        as: 'EmploymentStatusTypes',
        through: Employment,
        foreignKey: 'CategoryTypeID',
        otherKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentCategoryType.belongsToMany(PartyRole, {
        as: 'EmploymentLastUpdatedByPartyRoles',
        through: Employment,
        foreignKey: 'CategoryTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
