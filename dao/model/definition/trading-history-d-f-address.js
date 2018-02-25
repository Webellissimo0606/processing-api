'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDFAddress', {
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
        dFAddressCurrentFrom: {
            type: DataTypes.DATEONLY,
            field: 'DFAddressCurrentFrom',
            allowNull: true
        },
        dFAddressType: {
            type: DataTypes.STRING(50),
            field: 'DFAddressType',
            allowNull: true
        },
        property: {
            type: DataTypes.STRING(200),
            field: 'Property',
            allowNull: true
        },
        unitNumber: {
            type: DataTypes.STRING(10),
            field: 'UnitNumber',
            allowNull: true
        },
        streetNumber: {
            type: DataTypes.STRING(10),
            field: 'StreetNumber',
            allowNull: true
        },
        streetName: {
            type: DataTypes.STRING(100),
            field: 'StreetName',
            allowNull: true
        },
        streetType: {
            type: DataTypes.STRING(50),
            field: 'StreetType',
            allowNull: true
        },
        suburb: {
            type: DataTypes.STRING(100),
            field: 'Suburb',
            allowNull: true
        },
        state: {
            type: DataTypes.STRING(10),
            field: 'State',
            allowNull: true
        },
        postcode: {
            type: DataTypes.STRING(20),
            field: 'Postcode',
            allowNull: true
        },
        dPID: {
            type: DataTypes.STRING(200),
            field: 'DPID',
            allowNull: true
        },
        country: {
            type: DataTypes.STRING(200),
            field: 'Country',
            allowNull: true
        },
        unformattedAddress: {
            type: DataTypes.STRING(300),
            field: 'UnformattedAddress',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDFAddress',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDFAddress = model.TradingHistoryDFAddress;
    var CreditReport = model.CreditReport;

    TradingHistoryDFAddress.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
