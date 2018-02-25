'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EquipmentFinanceSecurity', {
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Security',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: false,
            references: {
                model: 'Loan',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        manufacturer: {
            type: DataTypes.STRING(200),
            field: 'Manufacturer',
            allowNull: true
        },
        model: {
            type: DataTypes.STRING(200),
            field: 'Model',
            allowNull: true
        },
        year: {
            type: DataTypes.INTEGER,
            field: 'Year',
            allowNull: true
        },
        type: {
            type: DataTypes.STRING(200),
            field: 'Type',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: true
        },
        quantity: {
            type: DataTypes.INTEGER,
            field: 'Quantity',
            allowNull: true
        },
        financeOwing: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'FinanceOwing',
            allowNull: true
        },
        financeTerm: {
            type: DataTypes.INTEGER,
            field: 'FinanceTerm',
            allowNull: true
        },
        financeTermFrequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FinanceTermFrequencyTypeID',
            allowNull: true,
            references: {
                model: 'FrequencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        valuationAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'ValuationAmount',
            allowNull: true
        },
        purchasePrice: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'PurchasePrice',
            allowNull: true
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
        equipmentFinanceSecurityTypeID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceSecurityTypeID',
            allowNull: true,
            references: {
                model: 'LoanPurposeType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        manufactureMonth: {
            type: DataTypes.INTEGER,
            field: 'ManufactureMonth',
            allowNull: true
        },
        manufactureYear: {
            type: DataTypes.INTEGER,
            field: 'ManufactureYear',
            allowNull: true
        },
        gVM: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'GVM',
            allowNull: true
        },
        cO2: {
            type: DataTypes.STRING(50),
            field: 'CO2',
            allowNull: true
        },
        complianceMonth: {
            type: DataTypes.INTEGER,
            field: 'ComplianceMonth',
            allowNull: true
        },
        complianceYear: {
            type: DataTypes.INTEGER,
            field: 'ComplianceYear',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'EquipmentFinanceSecurity',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EquipmentFinanceSecurity = model.EquipmentFinanceSecurity;
    var LoanPurposeType = model.LoanPurposeType;
    var FrequencyType = model.FrequencyType;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var Security = model.Security;

    EquipmentFinanceSecurity.belongsTo(LoanPurposeType, {
        as: 'EquipmentFinanceSecurityType',
        foreignKey: 'EquipmentFinanceSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceSecurity.belongsTo(FrequencyType, {
        as: 'FinanceTermFrequencyType',
        foreignKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceSecurity.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceSecurity.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EquipmentFinanceSecurity.belongsTo(Security, {
        as: 'Security',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
