'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EquipmentFinanceLoanApplication', {
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
            allowNull: false
        },
        margin: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Margin',
            allowNull: false
        },
        pMSEquipmentFinanceProductTypeID: {
            type: DataTypes.INTEGER,
            field: 'PMSEquipmentFinanceProductTypeID',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(512),
            field: 'Description',
            allowNull: true
        },
        loanTermTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTermTypeID',
            allowNull: false,
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
            allowNull: false
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
        pMSEquipmentFinanceLoanProgramProductPricingID: {
            type: DataTypes.INTEGER,
            field: 'PMSEquipmentFinanceLoanProgramProductPricingID',
            allowNull: false
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
        }
    }, {
        schema: 'public',
        tableName: 'EquipmentFinanceLoanApplication',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EquipmentFinanceLoanApplication = model.EquipmentFinanceLoanApplication;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var TermType = model.TermType;
    var Loan = model.Loan;

    EquipmentFinanceLoanApplication.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceLoanApplication.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceLoanApplication.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceLoanApplication.belongsTo(TermType, {
        as: 'LoanTermType',
        foreignKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceLoanApplication.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
