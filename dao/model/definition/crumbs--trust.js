'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsTrust', {
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        trustPurposeTypeID: {
            type: DataTypes.INTEGER,
            field: 'TrustPurposeTypeID',
            allowNull: true
        },
        trustStructureTypeID: {
            type: DataTypes.INTEGER,
            field: 'TrustStructureTypeID',
            allowNull: true
        },
        trustName: {
            type: DataTypes.STRING(150),
            field: 'TrustName',
            allowNull: false
        },
        businessName: {
            type: DataTypes.STRING(150),
            field: 'BusinessName',
            allowNull: true
        },
        aBN: {
            type: DataTypes.STRING(15),
            field: 'ABN',
            allowNull: true
        },
        aCN: {
            type: DataTypes.STRING(15),
            field: 'ACN',
            allowNull: true
        },
        settlorName: {
            type: DataTypes.STRING(150),
            field: 'SettlorName',
            allowNull: true
        },
        countryEstablishedID: {
            type: DataTypes.INTEGER,
            field: 'CountryEstablishedID',
            allowNull: true
        },
        documentationTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentationTypeID',
            allowNull: true
        },
        establishmentDate: {
            type: DataTypes.DATEONLY,
            field: 'EstablishmentDate',
            allowNull: true
        },
        vestingDate: {
            type: DataTypes.DATEONLY,
            field: 'VestingDate',
            allowNull: true
        },
        numberOfTrustees: {
            type: DataTypes.INTEGER,
            field: 'NumberOfTrustees',
            allowNull: true
        },
        numberOfBeneficiaries: {
            type: DataTypes.INTEGER,
            field: 'NumberOfBeneficiaries',
            allowNull: true
        },
        accountantPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'AccountantPartyRoleID',
            allowNull: true
        },
        accountantContactName: {
            type: DataTypes.STRING(150),
            field: 'AccountantContactName',
            allowNull: true
        },
        isTradingEntity: {
            type: DataTypes.BOOLEAN,
            field: 'IsTradingEntity',
            allowNull: true
        },
        aCNRegistered: {
            type: DataTypes.DATEONLY,
            field: 'ACNRegistered',
            allowNull: true
        },
        aCNNotSupplied: {
            type: DataTypes.BOOLEAN,
            field: 'ACNNotSupplied',
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
            allowNull: false
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        contactName: {
            type: DataTypes.STRING(200),
            field: 'ContactName',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Trust',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsTrust = model.CrumbsTrust;

};
