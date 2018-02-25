'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditCardType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(20),
            field: 'Name',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
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
        }
    }, {
        schema: 'public',
        tableName: 'CreditCardType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditCardType = model.CreditCardType;
    var CreditCardAuthority = model.CreditCardAuthority;

    CreditCardType.hasMany(CreditCardAuthority, {
        as: 'CreditCardAuthorityCreditcardtypeFks',
        foreignKey: 'CreditCardTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
