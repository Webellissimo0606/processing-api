'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Security', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        securityTypeID: {
            type: DataTypes.INTEGER,
            field: 'SecurityTypeID',
            allowNull: false,
            references: {
                model: 'SecurityType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        ultracsID: {
            type: DataTypes.INTEGER,
            field: 'UltracsID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'Security',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Security = model.Security;
    var ApplicationSecurity = model.ApplicationSecurity;
    var Disbursement = model.Disbursement;
    var EquipmentFinanceSecurity = model.EquipmentFinanceSecurity;
    var HomeLoanSecurity = model.HomeLoanSecurity;
    var MotorVehicleSecurity = model.MotorVehicleSecurity;
    var SecurityAccessory = model.SecurityAccessory;
    var SecurityType = model.SecurityType;
    var ApplicationContainer = model.ApplicationContainer;
    var DisbursementPaymentType = model.DisbursementPaymentType;
    var DisbursementType = model.DisbursementType;
    var LoanPurposeType = model.LoanPurposeType;
    var FrequencyType = model.FrequencyType;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var ApplicationSecurityPurposeType = model.ApplicationSecurityPurposeType;
    var MotorVehicleSecurityType = model.MotorVehicleSecurityType;
    var AccessoryCategoryType = model.AccessoryCategoryType;
    var AccessoryType = model.AccessoryType;

    Security.hasMany(ApplicationSecurity, {
        as: 'ApplicationSecuritySecurityFks',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.hasMany(Disbursement, {
        as: 'DisbursementSecurityFks',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.hasMany(EquipmentFinanceSecurity, {
        as: 'EquipmentFinanceSecuritySecurityFks',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.hasMany(HomeLoanSecurity, {
        as: 'HomeLoanSecuritySecurityFks',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.hasMany(MotorVehicleSecurity, {
        as: 'MotorVehicleSecuritySecurityFks',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.hasMany(SecurityAccessory, {
        as: 'AccessorySecurityFks',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsTo(SecurityType, {
        as: 'SecurityType',
        foreignKey: 'SecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(ApplicationContainer, {
        as: 'ApplicationSecurityApplicationContainers',
        through: ApplicationSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(DisbursementPaymentType, {
        as: 'DisbursementDisbursementPaymentTypes',
        through: Disbursement,
        foreignKey: 'SecurityID',
        otherKey: 'DisbursementPaymentTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(DisbursementType, {
        as: 'DisbursementDisbursementTypes',
        through: Disbursement,
        foreignKey: 'SecurityID',
        otherKey: 'DisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(LoanPurposeType, {
        as: 'EquipmentFinanceSecurityEquipmentFinanceSecurityTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'EquipmentFinanceSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(FrequencyType, {
        as: 'EquipmentFinanceSecurityFinanceTermFrequencyTypes',
        through: EquipmentFinanceSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceSecurityLastUpdatedByPartyRoles',
        through: EquipmentFinanceSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(Loan, {
        as: 'EquipmentFinanceSecurityLoans',
        through: EquipmentFinanceSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(ApplicationSecurityPurposeType, {
        as: 'HomeLoanSecurityApplicationSecurityPurposeTypes',
        through: HomeLoanSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'ApplicationSecurityPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(FrequencyType, {
        as: 'MotorVehicleSecurityFinanceTermFrequencyTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(PartyRole, {
        as: 'MotorVehicleSecurityLastUpdatedByPartyRoles',
        through: MotorVehicleSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(Loan, {
        as: 'MotorVehicleSecurityLoans',
        through: MotorVehicleSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(MotorVehicleSecurityType, {
        as: 'MotorVehicleSecurityMotorVehicleSecurityTypes',
        through: MotorVehicleSecurity,
        foreignKey: 'SecurityID',
        otherKey: 'MotorVehicleSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(AccessoryCategoryType, {
        as: 'SecurityAccessoryAccessoryCategories',
        through: SecurityAccessory,
        foreignKey: 'SecurityID',
        otherKey: 'AccessoryCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(AccessoryType, {
        as: 'SecurityAccessoryAccessoryTypes',
        through: SecurityAccessory,
        foreignKey: 'SecurityID',
        otherKey: 'AccessoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryCreatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'SecurityID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Security.belongsToMany(PartyRole, {
        as: 'SecurityAccessoryLastUpdatedByPartyRoles',
        through: SecurityAccessory,
        foreignKey: 'SecurityID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
