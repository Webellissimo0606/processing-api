'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryFutureCompanyAddress', {
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
        addressFlag: {
            type: DataTypes.STRING(20),
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
        tableName: 'TradingHistoryFutureCompanyAddresses',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryFutureCompanyAddress = model.TradingHistoryFutureCompanyAddress;
    var CreditReport = model.CreditReport;

    TradingHistoryFutureCompanyAddress.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
