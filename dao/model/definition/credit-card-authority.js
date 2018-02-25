'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditCardAuthority', {
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
            allowNull: false
        },
        creditCardTypeID: {
            type: DataTypes.INTEGER,
            field: 'CreditCardTypeID',
            allowNull: false,
            references: {
                model: 'CreditCardType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        creditCardNumber: {
            type: DataTypes.STRING(20),
            field: 'CreditCardNumber',
            allowNull: false
        },
        verificationCode: {
            type: DataTypes.STRING(100),
            field: 'VerificationCode',
            allowNull: true
        },
        nameOnCard: {
            type: DataTypes.STRING(100),
            field: 'NameOnCard',
            allowNull: false
        },
        expiryMonth: {
            type: DataTypes.INTEGER,
            field: 'ExpiryMonth',
            allowNull: false
        },
        expiryYear: {
            type: DataTypes.INTEGER,
            field: 'ExpiryYear',
            allowNull: false
        },
        authorisedAmount: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'AuthorisedAmount',
            allowNull: false
        },
        processed: {
            type: DataTypes.BOOLEAN,
            field: 'Processed',
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
        tableName: 'CreditCardAuthority',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditCardAuthority = model.CreditCardAuthority;
    var CreditCardProcessHistory = model.CreditCardProcessHistory;
    var CreditCardType = model.CreditCardType;

    CreditCardAuthority.hasMany(CreditCardProcessHistory, {
        as: 'CreditCardProcessHistoryCreditcardauthorityFks',
        foreignKey: 'CreditCardAuthorityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditCardAuthority.belongsTo(CreditCardType, {
        as: 'CreditCardType',
        foreignKey: 'CreditCardTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
