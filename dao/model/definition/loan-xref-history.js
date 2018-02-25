'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanXrefHistory', {
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
            allowNull: false,
            references: {
                model: 'Loan',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        xref: {
            type: DataTypes.INTEGER,
            field: 'Xref',
            allowNull: true
        },
        effectiveDate: {
            type: DataTypes.DATEONLY,
            field: 'EffectiveDate',
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
        tableName: 'LoanXrefHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanXrefHistory = model.LoanXrefHistory;
    var LoanXrefPoolHistory = model.LoanXrefPoolHistory;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var Pool = model.Pool;

    LoanXrefHistory.hasMany(LoanXrefPoolHistory, {
        as: 'LoanXrefPoolHistoryLoanxrefhistoryFks',
        foreignKey: 'LoanXrefHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefHistory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefHistory.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefHistory.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefHistory.belongsToMany(PartyRole, {
        as: 'LoanXrefPoolHistoryCreatedByPartyRoles',
        through: LoanXrefPoolHistory,
        foreignKey: 'LoanXrefHistoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefHistory.belongsToMany(PartyRole, {
        as: 'LoanXrefPoolHistoryLastUpdatedByPartyRoles',
        through: LoanXrefPoolHistory,
        foreignKey: 'LoanXrefHistoryID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefHistory.belongsToMany(Pool, {
        as: 'LoanXrefPoolHistoryPools',
        through: LoanXrefPoolHistory,
        foreignKey: 'LoanXrefHistoryID',
        otherKey: 'PoolID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
