'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DirectDebit', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        frequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FrequencyTypeID',
            allowNull: false,
            references: {
                model: 'FrequencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        repaymentMethodTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentMethodTypeID',
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'Amount',
            allowNull: false
        },
        repaymentAmountTypeID: {
            type: DataTypes.INTEGER,
            field: 'RepaymentAmountTypeID',
            allowNull: false,
            references: {
                model: 'RepaymentAmountType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        crumbsBankAccountID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsBankAccountID',
            allowNull: false
        },
        termsAndConditionsAcceptance: {
            type: DataTypes.BOOLEAN,
            field: 'TermsAndConditionsAcceptance',
            allowNull: false
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
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
        }
    }, {
        schema: 'public',
        tableName: 'DirectDebit',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DirectDebit = model.DirectDebit;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var FrequencyType = model.FrequencyType;
    var Loan = model.Loan;
    var RepaymentAmountType = model.RepaymentAmountType;

    DirectDebit.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DirectDebit.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DirectDebit.belongsTo(FrequencyType, {
        as: 'FrequencyType',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DirectDebit.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DirectDebit.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DirectDebit.belongsTo(RepaymentAmountType, {
        as: 'RepaymentAmountType',
        foreignKey: 'RepaymentAmountTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
