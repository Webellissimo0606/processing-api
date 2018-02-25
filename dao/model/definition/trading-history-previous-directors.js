'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPreviousDirector', {
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
        bureauReference: {
            type: DataTypes.STRING(20),
            field: 'BureauReference',
            allowNull: true
        },
        appointmentDate: {
            type: DataTypes.DATEONLY,
            field: 'AppointmentDate',
            allowNull: true
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
        birthLocality: {
            type: DataTypes.STRING(200),
            field: 'BirthLocality',
            allowNull: true
        },
        birthState: {
            type: DataTypes.STRING(20),
            field: 'BirthState',
            allowNull: true
        },
        residencyOverseas: {
            type: DataTypes.STRING(10),
            field: 'ResidencyOverseas',
            allowNull: true
        },
        addressCurrentFrom: {
            type: DataTypes.DATEONLY,
            field: 'AddressCurrentFrom',
            allowNull: true
        },
        addressType: {
            type: DataTypes.STRING(50),
            field: 'AddressType',
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
        seq: {
            type: DataTypes.STRING(50),
            field: 'Seq',
            allowNull: true
        },
        firstReportedDate: {
            type: DataTypes.DATEONLY,
            field: 'FirstReportedDate',
            allowNull: true
        },
        documentNumber: {
            type: DataTypes.STRING(200),
            field: 'DocumentNumber',
            allowNull: true
        },
        documentNumberQualifier: {
            type: DataTypes.STRING(200),
            field: 'DocumentNumberQualifier',
            allowNull: true
        },
        aSICCourtType: {
            type: DataTypes.STRING(200),
            field: 'ASICCourtType',
            allowNull: true
        },
        aSICCourtState: {
            type: DataTypes.STRING(10),
            field: 'ASICCourtState',
            allowNull: true
        },
        aSICCourtApplicationNumber: {
            type: DataTypes.STRING(200),
            field: 'ASICCourtApplicationNumber',
            allowNull: true
        },
        aSICCourtApplicationYear: {
            type: DataTypes.STRING(10),
            field: 'ASICCourtApplicationYear',
            allowNull: true
        },
        ceaseDate: {
            type: DataTypes.DATEONLY,
            field: 'CeaseDate',
            allowNull: true
        },
        lastKnownDate: {
            type: DataTypes.DATEONLY,
            field: 'LastKnownDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPreviousDirectors',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPreviousDirector = model.TradingHistoryPreviousDirector;
    var CreditReport = model.CreditReport;

    TradingHistoryPreviousDirector.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
