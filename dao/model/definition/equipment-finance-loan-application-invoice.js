'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EquipmentFinanceLoanApplicationInvoice', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        equipmentFinanceLoanApplicationID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceLoanApplicationID',
            allowNull: false,
            references: {
                model: 'Loan',
                key: 'ID'
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
        tableName: 'EquipmentFinanceLoanApplicationInvoice',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EquipmentFinanceLoanApplicationInvoice = model.EquipmentFinanceLoanApplicationInvoice;
    var Loan = model.Loan;
    var Invoice = model.Invoice;

    EquipmentFinanceLoanApplicationInvoice.belongsTo(Loan, {
        as: 'EquipmentFinanceLoanApplication',
        foreignKey: 'EquipmentFinanceLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceLoanApplicationInvoice.belongsTo(Invoice, {
        as: 'Invoice',
        foreignKey: 'InvoiceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
