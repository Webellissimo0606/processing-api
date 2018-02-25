'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('IncomeSourceType', {
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
        taxable: {
            type: DataTypes.BOOLEAN,
            field: 'Taxable',
            allowNull: false
        },
        utilisationFactor: {
            type: DataTypes.DECIMAL(4, 2),
            field: 'UtilisationFactor',
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
        },
        isGrossAnnual: {
            type: DataTypes.BOOLEAN,
            field: 'IsGrossAnnual',
            allowNull: false
        },
        isGrossRental: {
            type: DataTypes.BOOLEAN,
            field: 'IsGrossRental',
            allowNull: false
        },
        isInvestmentLoanInterest: {
            type: DataTypes.BOOLEAN,
            field: 'IsInvestmentLoanInterest',
            allowNull: false
        },
        isUntaxedAllowableIncome: {
            type: DataTypes.BOOLEAN,
            field: 'IsUntaxedAllowableIncome',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'IncomeSourceType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var IncomeSourceType = model.IncomeSourceType;
    var Income = model.Income;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var FrequencyType = model.FrequencyType;

    IncomeSourceType.hasMany(Income, {
        as: 'IncomeSourcetypeFks',
        foreignKey: 'SourceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeSourceType.belongsToMany(ApplicationPartyRole, {
        as: 'IncomeApplicationPartyRoles',
        through: Income,
        foreignKey: 'SourceTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeSourceType.belongsToMany(PartyRole, {
        as: 'IncomeCreatedByPartyRoles',
        through: Income,
        foreignKey: 'SourceTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeSourceType.belongsToMany(CurrencyType, {
        as: 'IncomeCurrencyTypes',
        through: Income,
        foreignKey: 'SourceTypeID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeSourceType.belongsToMany(FrequencyType, {
        as: 'IncomeFrequencyTypes',
        through: Income,
        foreignKey: 'SourceTypeID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeSourceType.belongsToMany(PartyRole, {
        as: 'IncomeLastUpdatedByPartyRoles',
        through: Income,
        foreignKey: 'SourceTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
