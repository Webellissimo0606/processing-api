'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportMain', {
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
        primaryMatchType: {
            type: DataTypes.STRING(50),
            field: 'PrimaryMatchType',
            allowNull: true
        },
        datetimeRequested: {
            type: DataTypes.DATE,
            field: 'DatetimeRequested',
            allowNull: true
        },
        datetimeGenerated: {
            type: DataTypes.DATE,
            field: 'DatetimeGenerated',
            allowNull: true
        },
        productName: {
            type: DataTypes.STRING(50),
            field: 'ProductName',
            allowNull: true
        },
        permissionTypeCode: {
            type: DataTypes.STRING(50),
            field: 'PermissionTypeCode',
            allowNull: true
        },
        permissionType: {
            type: DataTypes.STRING(50),
            field: 'PermissionType',
            allowNull: true
        },
        productDataLevel: {
            type: DataTypes.STRING(50),
            field: 'ProductDataLevel',
            allowNull: true
        },
        productDataLevelCode: {
            type: DataTypes.STRING(50),
            field: 'ProductDataLevelCode',
            allowNull: true
        },
        productVersion: {
            type: DataTypes.STRING(10),
            field: 'ProductVersion',
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
        primaryMatchIDIndex: {
            type: DataTypes.STRING(50),
            field: 'PrimaryMatchIDIndex',
            allowNull: true
        },
        familyName: {
            type: DataTypes.STRING(100),
            field: 'FamilyName',
            allowNull: true
        },
        givenName: {
            type: DataTypes.STRING(100),
            field: 'GivenName',
            allowNull: true
        },
        otherName: {
            type: DataTypes.STRING(100),
            field: 'OtherName',
            allowNull: true
        },
        genderType: {
            type: DataTypes.STRING(100),
            field: 'GenderType',
            allowNull: true
        },
        genderCode: {
            type: DataTypes.STRING(10),
            field: 'GenderCode',
            allowNull: true
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
            field: 'DateOfBirth',
            allowNull: true
        },
        dateOfBirthLastReported: {
            type: DataTypes.DATEONLY,
            field: 'DateOfBirthLastReported',
            allowNull: true
        },
        driversLicenceNumber: {
            type: DataTypes.STRING(100),
            field: 'DriversLicenceNumber',
            allowNull: true
        },
        scorecardID: {
            type: DataTypes.STRING(50),
            field: 'ScorecardID',
            allowNull: true
        },
        scorecardName: {
            type: DataTypes.STRING(200),
            field: 'ScorecardName',
            allowNull: true
        },
        scorecardVersion: {
            type: DataTypes.STRING(10),
            field: 'ScorecardVersion',
            allowNull: true
        },
        scorecardType: {
            type: DataTypes.STRING(50),
            field: 'ScorecardType',
            allowNull: true
        },
        scorecardDataLevelCode: {
            type: DataTypes.STRING(10),
            field: 'ScorecardDataLevelCode',
            allowNull: true
        },
        scorecardDataLevel: {
            type: DataTypes.STRING(20),
            field: 'ScorecardDataLevel',
            allowNull: true
        },
        riskOdds: {
            type: DataTypes.STRING(20),
            field: 'RiskOdds',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportMain',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportMain = model.CreditReportMain;
    var CreditReport = model.CreditReport;

    CreditReportMain.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
