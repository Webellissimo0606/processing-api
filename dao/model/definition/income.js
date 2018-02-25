'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Income', {
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
        amount: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'Amount',
            allowNull: false
        },
        sourceTypeID: {
            type: DataTypes.INTEGER,
            field: 'SourceTypeID',
            allowNull: false,
            references: {
                model: 'IncomeSourceType',
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
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
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
        tableName: 'Income',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Income = model.Income;
    var IncomeAdditional = model.IncomeAdditional;
    var IncomeEmployment = model.IncomeEmployment;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var FrequencyType = model.FrequencyType;
    var IncomeSourceType = model.IncomeSourceType;
    var IncomeAdditionalType = model.IncomeAdditionalType;
    var Employment = model.Employment;

    Income.hasMany(IncomeAdditional, {
        as: 'AdditionalIncomeFks',
        foreignKey: 'IncomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.hasMany(IncomeEmployment, {
        as: 'EmploymentIncomeFks',
        foreignKey: 'IncomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsTo(CurrencyType, {
        as: 'CurrencyType',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsTo(FrequencyType, {
        as: 'FrequencyType',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsTo(IncomeSourceType, {
        as: 'SourceType',
        foreignKey: 'SourceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsToMany(CurrencyType, {
        as: 'IncomeAdditionalCurrencyTypes',
        through: IncomeAdditional,
        foreignKey: 'IncomeID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsToMany(IncomeAdditionalType, {
        as: 'IncomeAdditionalIncomeAdditionalTypes',
        through: IncomeAdditional,
        foreignKey: 'IncomeID',
        otherKey: 'IncomeAdditionalTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Income.belongsToMany(Employment, {
        as: 'IncomeEmploymentEmployments',
        through: IncomeEmployment,
        foreignKey: 'IncomeID',
        otherKey: 'EmploymentID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
