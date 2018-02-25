'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryCompanyDirector', {
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
        fileCreationDate: {
            type: DataTypes.DATEONLY,
            field: 'FileCreationDate',
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
        privacyConsent: {
            type: DataTypes.STRING(5),
            field: 'PrivacyConsent',
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
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryCompanyDirectors',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryCompanyDirector = model.TradingHistoryCompanyDirector;
    var CreditReport = model.CreditReport;

    TradingHistoryCompanyDirector.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
