'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CurrencyType', {
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
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        vedaCode: {
            type: DataTypes.STRING(10),
            field: 'VedaCode',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'CurrencyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CurrencyType = model.CurrencyType;
    var Employment = model.Employment;
    var Income = model.Income;
    var IncomeAdditional = model.IncomeAdditional;
    var Trigger = model.Trigger;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;
    var EmploymentBasisType = model.EmploymentBasisType;
    var EmploymentCategoryType = model.EmploymentCategoryType;
    var EmploymentStatusType = model.EmploymentStatusType;
    var FrequencyType = model.FrequencyType;
    var IncomeSourceType = model.IncomeSourceType;
    var IncomeAdditionalType = model.IncomeAdditionalType;
    var TriggerAction = model.TriggerAction;
    var TriggerPoint = model.TriggerPoint;

    CurrencyType.hasMany(Employment, {
        as: 'EmploymentCurrencytypeFks',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.hasMany(Income, {
        as: 'IncomeCurrencytypeFks',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.hasMany(IncomeAdditional, {
        as: 'IncomeAdditionalCurrencytypeFks',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.hasMany(Trigger, {
        as: 'TriggerCurrencytypeFks',
        foreignKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(ApplicationPartyRole, {
        as: 'EmploymentApplicationPartyRoles',
        through: Employment,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(PartyRole, {
        as: 'EmploymentCreatedByPartyRoles',
        through: Employment,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(EmploymentBasisType, {
        as: 'EmploymentBasisTypes',
        through: Employment,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'BasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(EmploymentCategoryType, {
        as: 'EmploymentCategoryTypes',
        through: Employment,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'CategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(EmploymentStatusType, {
        as: 'EmploymentStatusTypes',
        through: Employment,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'StatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(PartyRole, {
        as: 'EmploymentLastUpdatedByPartyRoles',
        through: Employment,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(ApplicationPartyRole, {
        as: 'IncomeApplicationPartyRoles',
        through: Income,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(PartyRole, {
        as: 'IncomeCreatedByPartyRoles',
        through: Income,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(FrequencyType, {
        as: 'IncomeFrequencyTypes',
        through: Income,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(PartyRole, {
        as: 'IncomeLastUpdatedByPartyRoles',
        through: Income,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(IncomeSourceType, {
        as: 'IncomeSourceTypes',
        through: Income,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'SourceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(IncomeAdditionalType, {
        as: 'IncomeAdditionalIncomeAdditionalTypes',
        through: IncomeAdditional,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'IncomeAdditionalTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(Income, {
        as: 'IncomeAdditionalIncomes',
        through: IncomeAdditional,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'IncomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(PartyRole, {
        as: 'TriggerCreatedByPartyRoles',
        through: Trigger,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(PartyRole, {
        as: 'TriggerLastUpdatedByPartyRoles',
        through: Trigger,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(Trigger, {
        as: 'TriggerNextTriggers',
        through: Trigger,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'NextTriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(TriggerAction, {
        as: 'TriggerTriggerActions',
        through: Trigger,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CurrencyType.belongsToMany(TriggerPoint, {
        as: 'TriggerTriggerPoints',
        through: Trigger,
        foreignKey: 'CurrencyTypeID',
        otherKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
