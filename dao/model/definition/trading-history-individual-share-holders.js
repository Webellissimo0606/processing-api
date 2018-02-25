'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryIndividualShareHolder', {
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
        historyFlag: {
            type: DataTypes.STRING(200),
            field: 'HistoryFlag',
            allowNull: true
        },
        shareClassCode: {
            type: DataTypes.STRING(200),
            field: 'ShareClassCode',
            allowNull: true
        },
        sharesHeld: {
            type: DataTypes.INTEGER,
            field: 'SharesHeld',
            allowNull: true
        },
        beneficialOwnership: {
            type: DataTypes.STRING(200),
            field: 'BeneficialOwnership',
            allowNull: true
        },
        fullyPaidFlag: {
            type: DataTypes.STRING(200),
            field: 'FullyPaidFlag',
            allowNull: true
        },
        jointHolding: {
            type: DataTypes.STRING(200),
            field: 'JointHolding',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryIndividualShareHolders',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryIndividualShareHolder = model.TradingHistoryIndividualShareHolder;
    var CreditReport = model.CreditReport;

    TradingHistoryIndividualShareHolder.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
