'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EmploymentStatusType', {
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
        tableName: 'EmploymentStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EmploymentStatusType = model.EmploymentStatusType;
    var Employment = model.Employment;
    var EmploymentStatusTypeBasisTypeRelationship = model.EmploymentStatusTypeBasisTypeRelationship;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var EmploymentBasisType = model.EmploymentBasisType;
    var EmploymentCategoryType = model.EmploymentCategoryType;

    EmploymentStatusType.hasMany(Employment, {
        as: 'EmploymentEmploymentstatustypeFks',
        foreignKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.hasMany(EmploymentStatusTypeBasisTypeRelationship, {
        as: 'BasisTypeRelationshipEmploymentstatustypes',
        foreignKey: 'EmploymentStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.belongsToMany(ApplicationPartyRole, {
        as: 'EmploymentApplicationPartyRoles',
        through: Employment,
        foreignKey: 'StatusTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.belongsToMany(PartyRole, {
        as: 'EmploymentCreatedByPartyRoles',
        through: Employment,
        foreignKey: 'StatusTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.belongsToMany(CurrencyType, {
        as: 'EmploymentCurrencyTypes',
        through: Employment,
        foreignKey: 'StatusTypeID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.belongsToMany(EmploymentBasisType, {
        as: 'EmploymentBasisTypes',
        through: Employment,
        foreignKey: 'StatusTypeID',
        otherKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.belongsToMany(EmploymentCategoryType, {
        as: 'EmploymentCategoryTypes',
        through: Employment,
        foreignKey: 'StatusTypeID',
        otherKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.belongsToMany(PartyRole, {
        as: 'EmploymentLastUpdatedByPartyRoles',
        through: Employment,
        foreignKey: 'StatusTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusType.belongsToMany(EmploymentBasisType, {
        as: 'EmploymentStatusTypeBasisTypeRelationshipEmploymentBasisTypes',
        through: EmploymentStatusTypeBasisTypeRelationship,
        foreignKey: 'EmploymentStatusTypeID',
        otherKey: 'EmploymentBasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
