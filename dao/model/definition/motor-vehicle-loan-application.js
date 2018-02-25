'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('MotorVehicleLoanApplication', {
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Loan',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        mDR: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'MDR',
            allowNull: true
        },
        margin: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Margin',
            allowNull: true
        },
        loanTermTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTermTypeID',
            allowNull: true,
            references: {
                model: 'TermType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'LoanAmount',
            allowNull: true
        },
        gSTAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'GSTAmount',
            allowNull: true
        },
        balloonPayment: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'BalloonPayment',
            allowNull: true
        },
        pMSMotorVehicleLoanProgramProductPricingID: {
            type: DataTypes.INTEGER,
            field: 'PMSMotorVehicleLoanProgramProductPricingID',
            allowNull: true
        },
        pMSEquipmentFinanceProductTypeID: {
            type: DataTypes.INTEGER,
            field: 'PMSEquipmentFinanceProductTypeID',
            allowNull: true
        },
        externalBrokeragePercentage: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'ExternalBrokeragePercentage',
            allowNull: true
        },
        repaymentAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'RepaymentAmount',
            allowNull: true
        },
        repaymentFrequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentFrequencyTypeID',
            allowNull: true
        },
        fastRefinance: {
            type: DataTypes.BOOLEAN,
            field: 'FastRefinance',
            allowNull: true
        },
        gSTNotFinanced: {
            type: DataTypes.BOOLEAN,
            field: 'GSTNotFinanced',
            allowNull: true
        },
        separateContracts: {
            type: DataTypes.BOOLEAN,
            field: 'SeparateContracts',
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
        isABSLoan: {
            type: DataTypes.BOOLEAN,
            field: 'IsABSLoan',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'MotorVehicleLoanApplication',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var MotorVehicleLoanApplication = model.MotorVehicleLoanApplication;
    var MotorVehicleLoanApplicationInvoice = model.MotorVehicleLoanApplicationInvoice;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var TermType = model.TermType;
    var Loan = model.Loan;
    var Invoice = model.Invoice;

    MotorVehicleLoanApplication.hasMany(MotorVehicleLoanApplicationInvoice, {
        as: 'InvoiceMotorvehicleloanapplications',
        foreignKey: 'MotorVehicleLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleLoanApplication.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleLoanApplication.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleLoanApplication.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleLoanApplication.belongsTo(TermType, {
        as: 'LoanTermType',
        foreignKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleLoanApplication.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleLoanApplication.belongsToMany(Invoice, {
        as: 'MotorVehicleLoanApplicationInvoiceInvoices',
        through: MotorVehicleLoanApplicationInvoice,
        foreignKey: 'MotorVehicleLoanApplicationID',
        otherKey: 'InvoiceID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
