'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PremisesLocationType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'PremisesLocationType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PremisesLocationType = model.PremisesLocationType;
    var EquipmentFinanceSecuritySerialLocation = model.EquipmentFinanceSecuritySerialLocation;
    var SecuritySerialLocation = model.SecuritySerialLocation;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;

    PremisesLocationType.hasMany(EquipmentFinanceSecuritySerialLocation, {
        as: 'EquipmentFinanceSecuritySerialLocationPremiseslocationtypeFks',
        foreignKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PremisesLocationType.hasMany(SecuritySerialLocation, {
        as: 'SecuritySerialLocationPremiseslocationtypeFks',
        foreignKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PremisesLocationType.belongsToMany(ApplicationSecurity, {
        as: 'EquipmentFinanceSecuritySerialLocationApplicationSecurities',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'PremisesLocationTypeID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PremisesLocationType.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecuritySerialLocationCreatedByPartyRoles',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'PremisesLocationTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PremisesLocationType.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecuritySerialLocationLastUpdatedByPartyRoles',
        through: EquipmentFinanceSecuritySerialLocation,
        foreignKey: 'PremisesLocationTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PremisesLocationType.belongsToMany(ApplicationSecurity, {
        as: 'SecuritySerialLocationApplicationSecurities',
        through: SecuritySerialLocation,
        foreignKey: 'PremisesLocationTypeID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PremisesLocationType.belongsToMany(PartyRole, {
        as: 'SecuritySerialLocationCreatedByPartyRoles',
        through: SecuritySerialLocation,
        foreignKey: 'PremisesLocationTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    PremisesLocationType.belongsToMany(PartyRole, {
        as: 'SecuritySerialLocationLastUpdatedByPartyRoles',
        through: SecuritySerialLocation,
        foreignKey: 'PremisesLocationTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
