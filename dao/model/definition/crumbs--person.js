'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPerson', {
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        salutationTypeID: {
            type: DataTypes.INTEGER,
            field: 'SalutationTypeID',
            allowNull: true
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            field: 'DateOfBirth',
            allowNull: true
        },
        firstName: {
            type: DataTypes.STRING(150),
            field: 'FirstName',
            allowNull: false
        },
        middleName: {
            type: DataTypes.STRING(150),
            field: 'MiddleName',
            allowNull: true
        },
        lastName: {
            type: DataTypes.STRING(150),
            field: 'LastName',
            allowNull: false
        },
        preferredName: {
            type: DataTypes.STRING(150),
            field: 'PreferredName',
            allowNull: true
        },
        title: {
            type: DataTypes.STRING(150),
            field: 'Title',
            allowNull: true
        },
        genderTypeID: {
            type: DataTypes.INTEGER,
            field: 'GenderTypeID',
            allowNull: true
        },
        maritalStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'MaritalStatusTypeID',
            allowNull: true
        },
        maritalStatusChangeDate: {
            type: DataTypes.DATEONLY,
            field: 'MaritalStatusChangeDate',
            allowNull: true
        },
        dependantsUnder11: {
            type: DataTypes.INTEGER,
            field: 'DependantsUnder11',
            allowNull: true
        },
        dependantsOver11: {
            type: DataTypes.INTEGER,
            field: 'DependantsOver11',
            allowNull: true
        },
        driversLicenseNumber: {
            type: DataTypes.STRING(15),
            field: 'DriversLicenseNumber',
            allowNull: true
        },
        accountantPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'AccountantPartyRoleID',
            allowNull: true
        },
        sendMarketingMaterial: {
            type: DataTypes.BOOLEAN,
            field: 'SendMarketingMaterial',
            allowNull: true
        },
        declarationConfirmed: {
            type: DataTypes.BOOLEAN,
            field: 'DeclarationConfirmed',
            allowNull: true
        },
        numberOfCars: {
            type: DataTypes.INTEGER,
            field: 'NumberOfCars',
            allowNull: true
        },
        numberOfJobs: {
            type: DataTypes.INTEGER,
            field: 'NumberOfJobs',
            allowNull: true
        },
        companyCar: {
            type: DataTypes.BOOLEAN,
            field: 'CompanyCar',
            allowNull: true
        },
        stateID: {
            type: DataTypes.INTEGER,
            field: 'StateID',
            allowNull: true
        },
        cardNumber: {
            type: DataTypes.STRING(50),
            field: 'CardNumber',
            allowNull: true
        },
        expiryDate: {
            type: DataTypes.DATEONLY,
            field: 'ExpiryDate',
            allowNull: true
        },
        medicareNumber: {
            type: DataTypes.STRING(50),
            field: 'MedicareNumber',
            allowNull: true
        },
        referenceNumber: {
            type: DataTypes.INTEGER,
            field: 'ReferenceNumber',
            allowNull: true
        },
        passportNumber: {
            type: DataTypes.STRING(50),
            field: 'PassportNumber',
            allowNull: true
        },
        verifyIdentityByCRA: {
            type: DataTypes.BOOLEAN,
            field: 'VerifyIdentityByCRA',
            allowNull: true
        },
        nameChangeReasonTypeID: {
            type: DataTypes.INTEGER,
            field: 'NameChangeReasonTypeID',
            allowNull: true
        },
        nameChangeDate: {
            type: DataTypes.DATEONLY,
            field: 'NameChangeDate',
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
        medicareCardColourTypeID: {
            type: DataTypes.INTEGER,
            field: 'MedicareCardColourTypeID',
            allowNull: true
        },
        passportColourTypeID: {
            type: DataTypes.INTEGER,
            field: 'PassportColourTypeID',
            allowNull: true
        },
        passportCountryID: {
            type: DataTypes.INTEGER,
            field: 'PassportCountryID',
            allowNull: true
        },
        medicareNameOnCard: {
            type: DataTypes.STRING(150),
            field: 'MedicareNameOnCard',
            allowNull: true
        },
        medicareValidToDate: {
            type: DataTypes.DATEONLY,
            field: 'MedicareValidToDate',
            allowNull: true
        },
        nonResident: {
            type: DataTypes.BOOLEAN,
            field: 'NonResident',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Person',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPerson = model.CrumbsPerson;

};
