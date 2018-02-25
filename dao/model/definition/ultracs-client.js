'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('UltracsClient', {
        clientNumber: {
            type: DataTypes.INTEGER,
            field: 'ClientNumber',
            allowNull: false,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(30),
            field: 'FirstName',
            allowNull: true
        },
        middleName: {
            type: DataTypes.STRING(40),
            field: 'MiddleName',
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING(30),
            field: 'LastName',
            allowNull: true
        },
        clientTypeID: {
            type: DataTypes.INTEGER,
            field: 'ClientTypeID',
            allowNull: true
        },
        residentialAddress1: {
            type: DataTypes.STRING(30),
            field: 'ResidentialAddress1',
            allowNull: true
        },
        residentialAddress2: {
            type: DataTypes.STRING(30),
            field: 'ResidentialAddress2',
            allowNull: true
        },
        residentialAddress3: {
            type: DataTypes.STRING(30),
            field: 'ResidentialAddress3',
            allowNull: true
        },
        residentialSuburb: {
            type: DataTypes.STRING(20),
            field: 'ResidentialSuburb',
            allowNull: true
        },
        residentialState: {
            type: DataTypes.STRING(5),
            field: 'ResidentialState',
            allowNull: true
        },
        residentialPostcode: {
            type: DataTypes.STRING(5),
            field: 'ResidentialPostcode',
            allowNull: true
        },
        residentialCountry: {
            type: DataTypes.STRING(20),
            field: 'ResidentialCountry',
            allowNull: true
        },
        postalAddress1: {
            type: DataTypes.STRING(30),
            field: 'PostalAddress1',
            allowNull: true
        },
        postalAddress2: {
            type: DataTypes.STRING(30),
            field: 'PostalAddress2',
            allowNull: true
        },
        postalAddress3: {
            type: DataTypes.STRING(30),
            field: 'PostalAddress3',
            allowNull: true
        },
        postalSuburb: {
            type: DataTypes.STRING(20),
            field: 'PostalSuburb',
            allowNull: true
        },
        postalState: {
            type: DataTypes.STRING(5),
            field: 'PostalState',
            allowNull: true
        },
        postalPostcode: {
            type: DataTypes.STRING(5),
            field: 'PostalPostcode',
            allowNull: true
        },
        postalCountry: {
            type: DataTypes.STRING(20),
            field: 'PostalCountry',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'UltracsClient',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var UltracsClient = model.UltracsClient;

};
