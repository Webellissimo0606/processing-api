'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Pool', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(500),
            field: 'Name',
            allowNull: false
        },
        shortName: {
            type: DataTypes.STRING(100),
            field: 'ShortName',
            allowNull: false
        },
        ultracsName: {
            type: DataTypes.STRING(100),
            field: 'UltracsName',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
            field: 'IsDefault',
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
        },
        crumbsBankAccountID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsBankAccountID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'Pool',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Pool = model.Pool;
    var LoanXrefPoolHistory = model.LoanXrefPoolHistory;
    var PartyRole = model.PartyRole;
    var LoanXrefHistory = model.LoanXrefHistory;

    Pool.hasMany(LoanXrefPoolHistory, {
        as: 'LoanXrefPoolHistoryPoolFks',
        foreignKey: 'PoolID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Pool.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Pool.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Pool.belongsToMany(PartyRole, {
        as: 'LoanXrefPoolHistoryCreatedByPartyRoles',
        through: LoanXrefPoolHistory,
        foreignKey: 'PoolID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Pool.belongsToMany(PartyRole, {
        as: 'LoanXrefPoolHistoryLastUpdatedByPartyRoles',
        through: LoanXrefPoolHistory,
        foreignKey: 'PoolID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Pool.belongsToMany(LoanXrefHistory, {
        as: 'LoanXrefPoolHistoryLoanXrefHistories',
        through: LoanXrefPoolHistory,
        foreignKey: 'PoolID',
        otherKey: 'LoanXrefHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
