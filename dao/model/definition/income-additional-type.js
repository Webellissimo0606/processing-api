'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('IncomeAdditionalType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
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
        includeInServiceability: {
            type: DataTypes.BOOLEAN,
            field: 'IncludeInServiceability',
            allowNull: false
        },
        isOther: {
            type: DataTypes.BOOLEAN,
            field: 'IsOther',
            allowNull: false
        },
        isOtherAddback: {
            type: DataTypes.BOOLEAN,
            field: 'IsOtherAddback',
            allowNull: false
        },
        isExpense: {
            type: DataTypes.BOOLEAN,
            field: 'IsExpense',
            allowNull: false
        },
        isSalaryAndWages: {
            type: DataTypes.BOOLEAN,
            field: 'IsSalaryAndWages',
            allowNull: false
        },
        isSuperannuation: {
            type: DataTypes.BOOLEAN,
            field: 'IsSuperannuation',
            allowNull: false
        },
        isDepreciation: {
            type: DataTypes.BOOLEAN,
            field: 'IsDepreciation',
            allowNull: false
        },
        isAmountDistributedToApplicants: {
            type: DataTypes.BOOLEAN,
            field: 'IsAmountDistributedToApplicants',
            allowNull: false
        },
        isGrossProfitFromTrading: {
            type: DataTypes.BOOLEAN,
            field: 'IsGrossProfitFromTrading',
            allowNull: false
        },
        isDistributionsReceived: {
            type: DataTypes.BOOLEAN,
            field: 'IsDistributionsReceived',
            allowNull: false
        },
        isInterestReceived: {
            type: DataTypes.BOOLEAN,
            field: 'IsInterestReceived',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'IncomeAdditionalType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var IncomeAdditionalType = model.IncomeAdditionalType;
    var IncomeAdditional = model.IncomeAdditional;
    var CurrencyType = model.CurrencyType;
    var Income = model.Income;

    IncomeAdditionalType.hasMany(IncomeAdditional, {
        as: 'IncomeAdditionalIncomeadditionaltypeFks',
        foreignKey: 'IncomeAdditionalTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeAdditionalType.belongsToMany(CurrencyType, {
        as: 'IncomeAdditionalCurrencyTypes',
        through: IncomeAdditional,
        foreignKey: 'IncomeAdditionalTypeID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeAdditionalType.belongsToMany(Income, {
        as: 'IncomeAdditionalIncomes',
        through: IncomeAdditional,
        foreignKey: 'IncomeAdditionalTypeID',
        otherKey: 'IncomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
