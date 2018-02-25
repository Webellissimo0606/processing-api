'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DepositType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(1000),
            field: 'Name',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'DepositType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DepositType = model.DepositType;
    var Deposit = model.Deposit;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;

    DepositType.hasMany(Deposit, {
        as: 'DepositDeposittypeFks',
        foreignKey: 'DepositTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DepositType.belongsToMany(PartyRole, {
        as: 'DepositCreatedByPartyRoles',
        through: Deposit,
        foreignKey: 'DepositTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DepositType.belongsToMany(PartyRole, {
        as: 'DepositLastUpdatedByPartyRoles',
        through: Deposit,
        foreignKey: 'DepositTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DepositType.belongsToMany(Loan, {
        as: 'DepositLoans',
        through: Deposit,
        foreignKey: 'DepositTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
