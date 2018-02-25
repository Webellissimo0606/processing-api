'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Invoice', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        crumbsSupplierPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsSupplierPartyRoleID',
            allowNull: false
        },
        invoiceDate: {
            type: DataTypes.DATEONLY,
            field: 'InvoiceDate',
            allowNull: true
        },
        invoiceNumber: {
            type: DataTypes.STRING(50),
            field: 'InvoiceNumber',
            allowNull: true
        },
        invoiceAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'InvoiceAmount',
            allowNull: true
        },
        gSTAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'GSTAmount',
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
        }
    }, {
        schema: 'public',
        tableName: 'Invoice',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Invoice = model.Invoice;
    var EquipmentFinanceLoanApplicationInvoice = model.EquipmentFinanceLoanApplicationInvoice;
    var MotorVehicleLoanApplicationInvoice = model.MotorVehicleLoanApplicationInvoice;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var MotorVehicleLoanApplication = model.MotorVehicleLoanApplication;

    Invoice.hasMany(EquipmentFinanceLoanApplicationInvoice, {
        as: 'EquipmentFinanceLoanApplicationInvoiceInvoiceFks',
        foreignKey: 'InvoiceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Invoice.hasMany(MotorVehicleLoanApplicationInvoice, {
        as: 'MotorVehicleLoanApplicationInvoiceInvoiceFks',
        foreignKey: 'InvoiceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Invoice.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Invoice.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Invoice.belongsToMany(Loan, {
        as: 'EquipmentFinanceLoanApplicationInvoiceEquipmentFinanceLoanApplications',
        through: EquipmentFinanceLoanApplicationInvoice,
        foreignKey: 'InvoiceID',
        otherKey: 'EquipmentFinanceLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Invoice.belongsToMany(MotorVehicleLoanApplication, {
        as: 'MotorVehicleLoanApplicationInvoiceMotorVehicleLoanApplications',
        through: MotorVehicleLoanApplicationInvoice,
        foreignKey: 'InvoiceID',
        otherKey: 'MotorVehicleLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
