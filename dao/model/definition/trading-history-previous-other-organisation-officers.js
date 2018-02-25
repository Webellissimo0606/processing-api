'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPreviousOtherOrganisationOfficer', {
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
        office: {
            type: DataTypes.STRING(20),
            field: 'Office',
            allowNull: true
        },
        historyFlag: {
            type: DataTypes.STRING(20),
            field: 'HistoryFlag',
            allowNull: true
        },
        appointmentDate: {
            type: DataTypes.DATEONLY,
            field: 'AppointmentDate',
            allowNull: true
        },
        ceaseDate: {
            type: DataTypes.DATEONLY,
            field: 'CeaseDate',
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
        organisationName: {
            type: DataTypes.STRING(200),
            field: 'OrganisationName',
            allowNull: true
        },
        organisationNumber: {
            type: DataTypes.STRING(50),
            field: 'OrganisationNumber',
            allowNull: true
        },
        australianBusinessNumber: {
            type: DataTypes.STRING(20),
            field: 'AustralianBusinessNumber',
            allowNull: true
        },
        organisationNumberHeading: {
            type: DataTypes.STRING(50),
            field: 'OrganisationNumberHeading',
            allowNull: true
        },
        careOf: {
            type: DataTypes.STRING(200),
            field: 'CareOf',
            allowNull: true
        },
        addressPrefix: {
            type: DataTypes.STRING(200),
            field: 'AddressPrefix',
            allowNull: true
        },
        streetDetails: {
            type: DataTypes.STRING(200),
            field: 'StreetDetails',
            allowNull: true
        },
        localityDetails: {
            type: DataTypes.STRING(200),
            field: 'LocalityDetails',
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(20),
            field: 'State',
            allowNull: true
        },
        postcode: {
            type: DataTypes.STRING(20),
            field: 'Postcode',
            allowNull: true
        },
        country: {
            type: DataTypes.STRING(200),
            field: 'Country',
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
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPreviousOtherOrganisationOfficers',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPreviousOtherOrganisationOfficer = model.TradingHistoryPreviousOtherOrganisationOfficer;
    var CreditReport = model.CreditReport;

    TradingHistoryPreviousOtherOrganisationOfficer.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
