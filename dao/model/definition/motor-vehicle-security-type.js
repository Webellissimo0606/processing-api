'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('MotorVehicleSecurityType', {
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
        pMSID: {
            type: DataTypes.INTEGER,
            field: 'PMSID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        retailID: {
            type: DataTypes.INTEGER,
            field: 'RetailID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'MotorVehicleSecurityType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var MotorVehicleSecurityType = model.MotorVehicleSecurityType;
    var MotorVehicleSecurity = model.MotorVehicleSecurity;
    var FrequencyType = model.FrequencyType;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var Security = model.Security;

    MotorVehicleSecurityType.hasMany(MotorVehicleSecurity, {
        as: 'MotorVehicleSecurityMotorvehiclesecuritytypeFks',
        foreignKey: 'MotorVehicleSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurityType.belongsToMany(FrequencyType, {
        as: 'MotorVehicleSecurityFinanceTermFrequencyTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'MotorVehicleSecurityTypeID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurityType.belongsToMany(PartyRole, {
        as: 'MotorVehicleSecurityLastUpdatedByPartyRoles',
        through: MotorVehicleSecurity,
        foreignKey: 'MotorVehicleSecurityTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurityType.belongsToMany(Loan, {
        as: 'MotorVehicleSecurityLoans',
        through: MotorVehicleSecurity,
        foreignKey: 'MotorVehicleSecurityTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurityType.belongsToMany(Security, {
        as: 'MotorVehicleSecuritySecurities',
        through: MotorVehicleSecurity,
        foreignKey: 'MotorVehicleSecurityTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
