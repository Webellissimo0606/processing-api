'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Employment', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: false,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        currencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'CurrencyTypeID',
            allowNull: false,
            references: {
                model: 'CurrencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        categoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'CategoryTypeID',
            allowNull: true,
            references: {
                model: 'EmploymentCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        statusTypeID: {
            type: DataTypes.INTEGER,
            field: 'StatusTypeID',
            allowNull: true,
            references: {
                model: 'EmploymentStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        basisTypeID: {
            type: DataTypes.INTEGER,
            field: 'BasisTypeID',
            allowNull: false,
            references: {
                model: 'EmploymentBasisType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        employerName: {
            type: DataTypes.STRING(150),
            field: 'EmployerName',
            allowNull: false
        },
        crumbsEmployerTelephoneNumberID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsEmployerTelephoneNumberID',
            allowNull: true
        },
        lengthMonths: {
            type: DataTypes.INTEGER,
            field: 'LengthMonths',
            allowNull: false
        },
        lengthYears: {
            type: DataTypes.INTEGER,
            field: 'LengthYears',
            allowNull: false
        },
        primaryEmployment: {
            type: DataTypes.BOOLEAN,
            field: 'PrimaryEmployment',
            allowNull: true
        },
        companyCarSupplied: {
            type: DataTypes.BOOLEAN,
            field: 'CompanyCarSupplied',
            allowNull: true
        },
        aBN: {
            type: DataTypes.STRING(15),
            field: 'ABN',
            allowNull: true
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
        occupation: {
            type: DataTypes.STRING(250),
            field: 'Occupation',
            allowNull: true
        },
        startDate: {
            type: DataTypes.DATE,
            field: 'StartDate',
            allowNull: true
        },
        probation: {
            type: DataTypes.BOOLEAN,
            field: 'Probation',
            allowNull: true
        },
        employerFaxNumberID: {
            type: DataTypes.INTEGER,
            field: 'EmployerFaxNumberID',
            allowNull: true
        },
        employerEmailAddressID: {
            type: DataTypes.INTEGER,
            field: 'EmployerEmailAddressID',
            allowNull: true
        },
        accountantName: {
            type: DataTypes.STRING(250),
            field: 'AccountantName',
            allowNull: true
        },
        accountantABN: {
            type: DataTypes.STRING(15),
            field: 'AccountantABN',
            allowNull: true
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
        }
    }, {
        schema: 'public',
        tableName: 'Employment',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Employment = model.Employment;
    var IncomeEmployment = model.IncomeEmployment;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var EmploymentBasisType = model.EmploymentBasisType;
    var EmploymentCategoryType = model.EmploymentCategoryType;
    var EmploymentStatusType = model.EmploymentStatusType;
    var Income = model.Income;

    Employment.hasMany(IncomeEmployment, {
        as: 'IncomeEmploymentEmploymentFks',
        foreignKey: 'EmploymentID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsTo(CurrencyType, {
        as: 'CurrencyType',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsTo(EmploymentBasisType, {
        as: 'BasisType',
        foreignKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsTo(EmploymentCategoryType, {
        as: 'CategoryType',
        foreignKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsTo(EmploymentStatusType, {
        as: 'StatusType',
        foreignKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Employment.belongsToMany(Income, {
        as: 'IncomeEmploymentIncomes',
        through: IncomeEmployment,
        foreignKey: 'EmploymentID',
        otherKey: 'IncomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
