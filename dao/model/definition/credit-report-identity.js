'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportIdentity', {
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
        bureauReference: {
            type: DataTypes.STRING(50),
            field: 'BureauReference',
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
        lastCreditEnquiryDate: {
            type: DataTypes.DATEONLY,
            field: 'LastCreditEnquiryDate',
            allowNull: true
        },
        familyName: {
            type: DataTypes.STRING(200),
            field: 'FamilyName',
            allowNull: true
        },
        givenName: {
            type: DataTypes.STRING(200),
            field: 'GivenName',
            allowNull: true
        },
        otherGivenName: {
            type: DataTypes.STRING(200),
            field: 'OtherGivenName',
            allowNull: true
        },
        genderCode: {
            type: DataTypes.STRING(200),
            field: 'GenderCode',
            allowNull: true
        },
        genderType: {
            type: DataTypes.STRING(200),
            field: 'GenderType',
            allowNull: true
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            field: 'DateOfBirth',
            allowNull: true
        },
        driversLicenceNumber: {
            type: DataTypes.STRING(200),
            field: 'DriversLicenceNumber',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportIdentity',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportIdentity = model.CreditReportIdentity;
    var CreditReport = model.CreditReport;

    CreditReportIdentity.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
