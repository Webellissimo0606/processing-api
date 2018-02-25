'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationElement', {
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
        registrationNumber: {
            type: DataTypes.STRING(50),
            field: 'RegistrationNumber',
            allowNull: true
        },
        collateralType: {
            type: DataTypes.STRING(50),
            field: 'CollateralType',
            allowNull: true
        },
        collateralClass: {
            type: DataTypes.STRING(50),
            field: 'CollateralClass',
            allowNull: true
        },
        boilerPlateRegistrationNumber: {
            type: DataTypes.STRING(50),
            field: 'BoilerPlateRegistrationNumber',
            allowNull: true
        },
        boilerPlateRegistrationStatus: {
            type: DataTypes.STRING(50),
            field: 'BoilerPlateRegistrationStatus',
            allowNull: true
        },
        boilerPlatePMSIFlag: {
            type: DataTypes.STRING(50),
            field: 'BoilerPlatePMSIFlag',
            allowNull: true
        },
        boilerPlateChangeNumber: {
            type: DataTypes.STRING(50),
            field: 'BoilerPlateChangeNumber',
            allowNull: true
        },
        boilerPlateTransitionalFlag: {
            type: DataTypes.STRING(50),
            field: 'BoilerPlateTransitionalFlag',
            allowNull: true
        },
        boilerPlateRegistrationStartDate: {
            type: DataTypes.DATEONLY,
            field: 'BoilerPlateRegistrationStartDate',
            allowNull: true
        },
        boilerPlateRegistrationChangeDate: {
            type: DataTypes.DATEONLY,
            field: 'BoilerPlateRegistrationChangeDate',
            allowNull: true
        },
        boilerPlateRegistrationEndDate: {
            type: DataTypes.DATEONLY,
            field: 'BoilerPlateRegistrationEndDate',
            allowNull: true
        },
        boilerPlateMigratedFlag: {
            type: DataTypes.STRING(50),
            field: 'BoilerPlateMigratedFlag',
            allowNull: true
        },
        boilerPlateSubordinateFlag: {
            type: DataTypes.STRING(50),
            field: 'BoilerPlateSubordinateFlag',
            allowNull: true
        },
        linkedTo: {
            type: DataTypes.STRING(50),
            field: 'LinkedTo',
            allowNull: true
        },
        registrationKind: {
            type: DataTypes.STRING(50),
            field: 'RegistrationKind',
            allowNull: true
        },
        givingOfNoticeIdentifier: {
            type: DataTypes.STRING(50),
            field: 'GivingOfNoticeIdentifier',
            allowNull: true
        },
        sourceRegister: {
            type: DataTypes.STRING(50),
            field: 'SourceRegister',
            allowNull: true
        },
        originalStartDate: {
            type: DataTypes.DATEONLY,
            field: 'OriginalStartDate',
            allowNull: true
        },
        originalChargeRegistrationDate: {
            type: DataTypes.DATEONLY,
            field: 'OriginalChargeRegistrationDate',
            allowNull: true
        },
        fixedFloatingFlag: {
            type: DataTypes.STRING(50),
            field: 'FixedFloatingFlag',
            allowNull: true
        },
        chargeStatus: {
            type: DataTypes.STRING(50),
            field: 'ChargeStatus',
            allowNull: true
        },
        contactAdressee: {
            type: DataTypes.STRING(200),
            field: 'ContactAdressee',
            allowNull: true
        },
        contactEmailAddress: {
            type: DataTypes.STRING(50),
            field: 'ContactEmailAddress',
            allowNull: true
        },
        contactFaxNumber: {
            type: DataTypes.STRING(50),
            field: 'ContactFaxNumber',
            allowNull: true
        },
        mailingAddressLine1: {
            type: DataTypes.STRING(200),
            field: 'MailingAddressLine1',
            allowNull: true
        },
        mailingAddressLine2: {
            type: DataTypes.STRING(200),
            field: 'MailingAddressLine2',
            allowNull: true
        },
        mailingAddressLine3: {
            type: DataTypes.STRING(200),
            field: 'MailingAddressLine3',
            allowNull: true
        },
        mailingSuburb: {
            type: DataTypes.STRING(50),
            field: 'MailingSuburb',
            allowNull: true
        },
        mailingState: {
            type: DataTypes.STRING(10),
            field: 'MailingState',
            allowNull: true
        },
        mailingPostcode: {
            type: DataTypes.STRING(10),
            field: 'MailingPostcode',
            allowNull: true
        },
        mailingCountry: {
            type: DataTypes.STRING(50),
            field: 'MailingCountry',
            allowNull: true
        },
        physicalAddressLine1: {
            type: DataTypes.STRING(200),
            field: 'PhysicalAddressLine1',
            allowNull: true
        },
        physicalAddressLine2: {
            type: DataTypes.STRING(200),
            field: 'PhysicalAddressLine2',
            allowNull: true
        },
        physicalAddressLine3: {
            type: DataTypes.STRING(200),
            field: 'PhysicalAddressLine3',
            allowNull: true
        },
        physicalSuburb: {
            type: DataTypes.STRING(50),
            field: 'PhysicalSuburb',
            allowNull: true
        },
        physicalState: {
            type: DataTypes.STRING(10),
            field: 'PhysicalState',
            allowNull: true
        },
        physicalPostcode: {
            type: DataTypes.STRING(10),
            field: 'PhysicalPostcode',
            allowNull: true
        },
        physicalCountry: {
            type: DataTypes.STRING(50),
            field: 'PhysicalCountry',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRRegistrationElements',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationElement = model.TradingHistoryPPSRRegistrationElement;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationElement.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
