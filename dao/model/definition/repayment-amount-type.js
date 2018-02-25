'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RepaymentAmountType', {
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
        annualisationFactor: {
            type: DataTypes.INTEGER,
            field: 'AnnualisationFactor',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'RepaymentAmountType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RepaymentAmountType = model.RepaymentAmountType;
    var DirectDebit = model.DirectDebit;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var FrequencyType = model.FrequencyType;
    var Loan = model.Loan;

    RepaymentAmountType.hasMany(DirectDebit, {
        as: 'DirectDebitRepaymentamounttypeFks',
        foreignKey: 'RepaymentAmountTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RepaymentAmountType.belongsToMany(ApplicationContainer, {
        as: 'DirectDebitApplicationContainers',
        through: DirectDebit,
        foreignKey: 'RepaymentAmountTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RepaymentAmountType.belongsToMany(PartyRole, {
        as: 'DirectDebitCreatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'RepaymentAmountTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RepaymentAmountType.belongsToMany(FrequencyType, {
        as: 'DirectDebitFrequencyTypes',
        through: DirectDebit,
        foreignKey: 'RepaymentAmountTypeID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RepaymentAmountType.belongsToMany(PartyRole, {
        as: 'DirectDebitLastUpdatedByPartyRoles',
        through: DirectDebit,
        foreignKey: 'RepaymentAmountTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RepaymentAmountType.belongsToMany(Loan, {
        as: 'DirectDebitLoans',
        through: DirectDebit,
        foreignKey: 'RepaymentAmountTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
