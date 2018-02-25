'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanXrefPoolHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        loanXrefHistoryID: {
            type: DataTypes.INTEGER,
            field: 'LoanXrefHistoryID',
            allowNull: false,
            references: {
                model: 'LoanXrefHistory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        poolID: {
            type: DataTypes.INTEGER,
            field: 'PoolID',
            allowNull: false,
            references: {
                model: 'Pool',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        accountsNotified: {
            type: DataTypes.BOOLEAN,
            field: 'AccountsNotified',
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
        }
    }, {
        schema: 'public',
        tableName: 'LoanXrefPoolHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanXrefPoolHistory = model.LoanXrefPoolHistory;
    var PartyRole = model.PartyRole;
    var LoanXrefHistory = model.LoanXrefHistory;
    var Pool = model.Pool;

    LoanXrefPoolHistory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefPoolHistory.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefPoolHistory.belongsTo(LoanXrefHistory, {
        as: 'LoanXrefHistory',
        foreignKey: 'LoanXrefHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefPoolHistory.belongsTo(Pool, {
        as: 'Pool',
        foreignKey: 'PoolID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
