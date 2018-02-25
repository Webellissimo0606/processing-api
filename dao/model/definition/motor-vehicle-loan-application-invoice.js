'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('MotorVehicleLoanApplicationInvoice', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        motorVehicleLoanApplicationID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleLoanApplicationID',
            allowNull: false,
            references: {
                model: 'MotorVehicleLoanApplication',
                key: 'LoanID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        invoiceID: {
            type: DataTypes.INTEGER,
            field: 'InvoiceID',
            allowNull: false,
            references: {
                model: 'Invoice',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'MotorVehicleLoanApplicationInvoice',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var MotorVehicleLoanApplicationInvoice = model.MotorVehicleLoanApplicationInvoice;
    var Invoice = model.Invoice;
    var MotorVehicleLoanApplication = model.MotorVehicleLoanApplication;

    MotorVehicleLoanApplicationInvoice.belongsTo(Invoice, {
        as: 'Invoice',
        foreignKey: 'InvoiceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleLoanApplicationInvoice.belongsTo(MotorVehicleLoanApplication, {
        as: 'MotorVehicleLoanApplication',
        foreignKey: 'MotorVehicleLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
