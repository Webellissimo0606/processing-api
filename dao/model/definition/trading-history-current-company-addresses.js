'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryCurrentCompanyAddress', {
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
        historyFlag: {
            type: DataTypes.STRING(200),
            field: 'HistoryFlag',
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
            type: DataTypes.STRING(200),
            field: 'State',
            allowNull: true
        },
        postcode: {
            type: DataTypes.STRING(200),
            field: 'Postcode',
            allowNull: true
        },
        country: {
            type: DataTypes.STRING(200),
            field: 'Country',
            allowNull: true
        },
        addressFlag: {
            type: DataTypes.STRING(100),
            field: 'AddressFlag',
            allowNull: true
        },
        addressStartDate: {
            type: DataTypes.DATEONLY,
            field: 'AddressStartDate',
            allowNull: true
        },
        addressEndDate: {
            type: DataTypes.DATEONLY,
            field: 'AddressEndDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryCurrentCompanyAddresses',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryCurrentCompanyAddress = model.TradingHistoryCurrentCompanyAddress;
    var CreditReport = model.CreditReport;

    TradingHistoryCurrentCompanyAddress.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
