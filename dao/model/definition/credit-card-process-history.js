'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditCardProcessHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        creditCardAuthorityID: {
            type: DataTypes.INTEGER,
            field: 'CreditCardAuthorityID',
            allowNull: false,
            references: {
                model: 'CreditCardAuthority',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        transactionID: {
            type: DataTypes.STRING(15),
            field: 'TransactionID',
            allowNull: false
        },
        authorisationCode: {
            type: DataTypes.STRING(20),
            field: 'AuthorisationCode',
            allowNull: false
        },
        errorMessage: {
            type: DataTypes.STRING(250),
            field: 'ErrorMessage',
            allowNull: true
        },
        success: {
            type: DataTypes.BOOLEAN,
            field: 'Success',
            allowNull: false,
            defaultValue: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
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
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditCardProcessHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditCardProcessHistory = model.CreditCardProcessHistory;
    var CreditCardAuthority = model.CreditCardAuthority;

    CreditCardProcessHistory.belongsTo(CreditCardAuthority, {
        as: 'CreditCardAuthority',
        foreignKey: 'CreditCardAuthorityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
