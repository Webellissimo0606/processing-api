'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TriggerAction', {
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
        uri: {
            type: DataTypes.STRING(4096),
            field: 'Uri',
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
        },
        typeName: {
            type: DataTypes.STRING(512),
            field: 'TypeName',
            allowNull: true
        },
        methodName: {
            type: DataTypes.STRING(512),
            field: 'MethodName',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TriggerAction',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TriggerAction = model.TriggerAction;
    var Trigger = model.Trigger;
    var TriggerActionParameter = model.TriggerActionParameter;
    var PartyRole = model.PartyRole;
    var CurrencyType = model.CurrencyType;
    var TriggerPoint = model.TriggerPoint;

    TriggerAction.hasMany(Trigger, {
        as: 'TriggerTriggeractionFks',
        foreignKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerAction.hasMany(TriggerActionParameter, {
        as: 'ParameterTriggeractionFks',
        foreignKey: 'TriggerActionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerAction.belongsToMany(PartyRole, {
        as: 'TriggerCreatedByPartyRoles',
        through: Trigger,
        foreignKey: 'TriggerActionID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerAction.belongsToMany(CurrencyType, {
        as: 'TriggerCurrencyTypes',
        through: Trigger,
        foreignKey: 'TriggerActionID',
        otherKey: 'CurrencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerAction.belongsToMany(PartyRole, {
        as: 'TriggerLastUpdatedByPartyRoles',
        through: Trigger,
        foreignKey: 'TriggerActionID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerAction.belongsToMany(Trigger, {
        as: 'TriggerNextTriggers',
        through: Trigger,
        foreignKey: 'TriggerActionID',
        otherKey: 'NextTriggerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TriggerAction.belongsToMany(TriggerPoint, {
        as: 'TriggerTriggerPoints',
        through: Trigger,
        foreignKey: 'TriggerActionID',
        otherKey: 'TriggerPointID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
