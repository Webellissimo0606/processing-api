'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EmploymentBasisType', {
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
        tableName: 'EmploymentBasisType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EmploymentBasisType = model.EmploymentBasisType;
    var Employment = model.Employment;
    var EmploymentStatusTypeBasisTypeRelationship = model.EmploymentStatusTypeBasisTypeRelationship;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var EmploymentCategoryType = model.EmploymentCategoryType;
    var EmploymentStatusType = model.EmploymentStatusType;

    EmploymentBasisType.hasMany(Employment, {
        as: 'EmploymentEmploymentbasistypeFks',
        foreignKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.hasMany(EmploymentStatusTypeBasisTypeRelationship, {
        as: 'EmploymentStatusTypeBasisTypeRelationshipEmploymentbasistypeFs',
        foreignKey: 'EmploymentBasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.belongsToMany(ApplicationPartyRole, {
        as: 'EmploymentApplicationPartyRoles',
        through: Employment,
        foreignKey: 'BasisTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.belongsToMany(PartyRole, {
        as: 'EmploymentCreatedByPartyRoles',
        through: Employment,
        foreignKey: 'BasisTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.belongsToMany(CurrencyType, {
        as: 'EmploymentCurrencyTypes',
        through: Employment,
        foreignKey: 'BasisTypeID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.belongsToMany(EmploymentCategoryType, {
        as: 'EmploymentCategoryTypes',
        through: Employment,
        foreignKey: 'BasisTypeID',
        otherKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.belongsToMany(EmploymentStatusType, {
        as: 'EmploymentStatusTypes',
        through: Employment,
        foreignKey: 'BasisTypeID',
        otherKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.belongsToMany(PartyRole, {
        as: 'EmploymentLastUpdatedByPartyRoles',
        through: Employment,
        foreignKey: 'BasisTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentBasisType.belongsToMany(EmploymentStatusType, {
        as: 'EmploymentStatusTypeBasisTypeRelationshipEmploymentStatusTypes',
        through: EmploymentStatusTypeBasisTypeRelationship,
        foreignKey: 'EmploymentBasisTypeID',
        otherKey: 'EmploymentStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
