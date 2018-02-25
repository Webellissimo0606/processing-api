'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportAddress', {
        creditReportID: {
            type: DataTypes.INTEGER,
            field: 'CreditReportID',
            allowNull: false,
            references: {
                model: 'CreditReport',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        iDIndex: {
            type: DataTypes.STRING(10),
            field: 'IDIndex',
            allowNull: true
        },
        addressType: {
            type: DataTypes.STRING(50),
            field: 'AddressType',
            allowNull: true
        },
        firstReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'FirstReportedDate',
            allowNull: true
        },
        lastReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'LastReportedDate',
            allowNull: true
        },
        streetNumber: {
            type: DataTypes.STRING(50),
            field: 'StreetNumber',
            allowNull: true
        },
        streetName: {
            type: DataTypes.STRING(50),
            field: 'StreetName',
            allowNull: true
        },
        streetTypeCode: {
            type: DataTypes.STRING(50),
            field: 'StreetTypeCode',
            allowNull: true
        },
        suburb: {
            type: DataTypes.STRING(50),
            field: 'Suburb',
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(50),
            field: 'State',
            allowNull: true
        },
        postcode: {
            type: DataTypes.STRING(50),
            field: 'Postcode',
            allowNull: true
        },
        countryCode: {
            type: DataTypes.STRING(50),
            field: 'CountryCode',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportAddress',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportAddress = model.CreditReportAddress;
    var CreditReport = model.CreditReport;

    CreditReportAddress.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
