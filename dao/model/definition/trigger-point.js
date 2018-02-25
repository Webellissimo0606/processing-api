'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TriggerPoint', {
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
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'TriggerPoint',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TriggerPoint = model.TriggerPoint;
    var Trigger = model.Trigger;
    var TriggerPointConditionStageType = model.TriggerPointConditionStageType;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var TriggerAction = model.TriggerAction;
    var ApplicationStageType = model.ApplicationStageType;

    TriggerPoint.hasMany(Trigger, {
        as: 'TriggerTriggerpointFks',
        foreignKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPoint.hasMany(TriggerPointConditionStageType, {
        as: 'ConditionStageTypeTriggerpointFks',
        foreignKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPoint.belongsToMany(PartyRole, {
        as: 'TriggerCreatedByPartyRoles',
        through: Trigger,
        foreignKey: 'TriggerPointID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPoint.belongsToMany(CurrencyType, {
        as: 'TriggerCurrencyTypes',
        through: Trigger,
        foreignKey: 'TriggerPointID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPoint.belongsToMany(PartyRole, {
        as: 'TriggerLastUpdatedByPartyRoles',
        through: Trigger,
        foreignKey: 'TriggerPointID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPoint.belongsToMany(Trigger, {
        as: 'TriggerNextTriggers',
        through: Trigger,
        foreignKey: 'TriggerPointID',
        otherKey: 'NextTriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPoint.belongsToMany(TriggerAction, {
        as: 'TriggerTriggerActions',
        through: Trigger,
        foreignKey: 'TriggerPointID',
        otherKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerPoint.belongsToMany(ApplicationStageType, {
        as: 'TriggerPointConditionStageTypeConditionStageTypes',
        through: TriggerPointConditionStageType,
        foreignKey: 'TriggerPointID',
        otherKey: 'ConditionStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
