'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('HomeLoanApplication', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: false
        },
        loanAmount: {
            type: DataTypes.DECIMAL(12, 4),
            field: 'LoanAmount',
            allowNull: false
        },
        termLengthTypeID: {
            type: DataTypes.INTEGER,
            field: 'TermLengthTypeID',
            allowNull: false
        },
        repaymentTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentTypeID',
            allowNull: false
        },
        repaymentMethodTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentMethodTypeID',
            allowNull: true
        },
        crumbsRepaymentBankAccountID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsRepaymentBankAccountID',
            allowNull: true
        },
        repaymentFrequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentFrequencyTypeID',
            allowNull: true
        },
        repaymentAmountTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentAmountTypeID',
            allowNull: true
        },
        repaymentValue: {
            type: DataTypes.DECIMAL,
            field: 'RepaymentValue',
            allowNull: true
        },
        regulated: {
            type: DataTypes.BOOLEAN,
            field: 'Regulated',
            allowNull: true
        },
        investment: {
            type: DataTypes.BOOLEAN,
            field: 'Investment',
            allowNull: true
        },
        parentID: {
            type: DataTypes.INTEGER,
            field: 'ParentID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
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
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        },
        active: {
            type: DataTypes.INTEGER,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'HomeLoanApplication',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var HomeLoanApplication = model.HomeLoanApplication;
    var HomeLoanApplicationRepaymentTransfer = model.HomeLoanApplicationRepaymentTransfer;

    HomeLoanApplication.hasMany(HomeLoanApplicationRepaymentTransfer, {
        as: 'RepaymentTransferChildhomeloanapplicationFs',
        foreignKey: 'ChildHomeLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    HomeLoanApplication.hasMany(HomeLoanApplicationRepaymentTransfer, {
        as: 'RepaymentTransferParenthomeloanapplications',
        foreignKey: 'ParentHomeLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    HomeLoanApplication.belongsToMany(HomeLoanApplication, {
        as: 'HomeLoanApplicationRepaymentTransferParentHomeLoanApplications',
        through: HomeLoanApplicationRepaymentTransfer,
        foreignKey: 'ChildHomeLoanApplicationID',
        otherKey: 'ParentHomeLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    HomeLoanApplication.belongsToMany(HomeLoanApplication, {
        as: 'HomeLoanApplicationRepaymentTransferChildHomeLoanApplications',
        through: HomeLoanApplicationRepaymentTransfer,
        foreignKey: 'ParentHomeLoanApplicationID',
        otherKey: 'ChildHomeLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
