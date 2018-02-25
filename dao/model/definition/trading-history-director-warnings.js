'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorWarning', {
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
        familyName: {
            type: DataTypes.STRING(200),
            field: 'FamilyName',
            allowNull: true
        },
        firstGivenName: {
            type: DataTypes.STRING(200),
            field: 'FirstGivenName',
            allowNull: true
        },
        otherGivenName: {
            type: DataTypes.STRING(200),
            field: 'OtherGivenName',
            allowNull: true
        },
        gender: {
            type: DataTypes.STRING(10),
            field: 'Gender',
            allowNull: true
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            field: 'DateOfBirth',
            allowNull: true
        },
        driversLicence: {
            type: DataTypes.STRING(20),
            field: 'DriversLicence',
            allowNull: true
        },
        directorAddressCurrentFrom: {
            type: DataTypes.DATEONLY,
            field: 'DirectorAddressCurrentFrom',
            allowNull: true
        },
        directorAddressType: {
            type: DataTypes.STRING(50),
            field: 'DirectorAddressType',
            allowNull: true
        },
        property: {
            type: DataTypes.STRING(200),
            field: 'Property',
            allowNull: true
        },
        unitNumber: {
            type: DataTypes.STRING(10),
            field: 'UnitNumber',
            allowNull: true
        },
        streetNumber: {
            type: DataTypes.STRING(10),
            field: 'StreetNumber',
            allowNull: true
        },
        streetName: {
            type: DataTypes.STRING(100),
            field: 'StreetName',
            allowNull: true
        },
        streetType: {
            type: DataTypes.STRING(50),
            field: 'StreetType',
            allowNull: true
        },
        suburb: {
            type: DataTypes.STRING(100),
            field: 'Suburb',
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(10),
            field: 'State',
            allowNull: true
        },
        postcode: {
            type: DataTypes.STRING(20),
            field: 'Postcode',
            allowNull: true
        },
        dPID: {
            type: DataTypes.STRING(200),
            field: 'DPID',
            allowNull: true
        },
        country: {
            type: DataTypes.STRING(200),
            field: 'Country',
            allowNull: true
        },
        unformattedAddress: {
            type: DataTypes.STRING(300),
            field: 'UnformattedAddress',
            allowNull: true
        },
        warningMessage: {
            type: DataTypes.STRING(500),
            field: 'WarningMessage',
            allowNull: true
        },
        warningMessageDescription: {
            type: DataTypes.STRING(500),
            field: 'WarningMessageDescription',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorWarnings',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorWarning = model.TradingHistoryDirectorWarning;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorWarning.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
