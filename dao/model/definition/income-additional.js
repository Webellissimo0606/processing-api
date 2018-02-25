'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('IncomeAdditional', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        incomeID: {
            type: DataTypes.INTEGER,
            field: 'IncomeID',
            allowNull: false,
            references: {
                model: 'Income',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        startDate: {
            type: DataTypes.DATEONLY,
            field: 'StartDate',
            allowNull: true
        },
        endDate: {
            type: DataTypes.DATEONLY,
            field: 'EndDate',
            allowNull: true
        },
        netIncome: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'NetIncome',
            allowNull: false
        },
        incomeAdditionalTypeID: {
            type: DataTypes.INTEGER,
            field: 'IncomeAdditionalTypeID',
            allowNull: false,
            references: {
                model: 'IncomeAdditionalType',
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
        }
    }, {
        schema: 'public',
        tableName: 'IncomeAdditional',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var IncomeAdditional = model.IncomeAdditional;
    var CurrencyType = model.CurrencyType;
    var IncomeAdditionalType = model.IncomeAdditionalType;
    var Income = model.Income;

    IncomeAdditional.belongsTo(CurrencyType, {
        as: 'CurrencyType',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeAdditional.belongsTo(IncomeAdditionalType, {
        as: 'IncomeAdditionalType',
        foreignKey: 'IncomeAdditionalTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeAdditional.belongsTo(Income, {
        as: 'Income',
        foreignKey: 'IncomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
