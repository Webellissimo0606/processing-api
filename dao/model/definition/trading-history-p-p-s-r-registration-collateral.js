'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationCollateral', {
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
        serialNumber: {
            type: DataTypes.STRING(50),
            field: 'SerialNumber',
            allowNull: true
        },
        serialNumberType: {
            type: DataTypes.STRING(20),
            field: 'SerialNumberType',
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
        collateralDescription: {
            type: DataTypes.STRING(100),
            field: 'CollateralDescription',
            allowNull: true
        },
        proceedsClaimedFlag: {
            type: DataTypes.STRING(50),
            field: 'ProceedsClaimedFlag',
            allowNull: true
        },
        proceedsClaimedDescription: {
            type: DataTypes.STRING(100),
            field: 'ProceedsClaimedDescription',
            allowNull: true
        },
        inventoryFlag: {
            type: DataTypes.STRING(50),
            field: 'InventoryFlag',
            allowNull: true
        },
        subjectToControlFlag: {
            type: DataTypes.STRING(50),
            field: 'SubjectToControlFlag',
            allowNull: true
        },
        vehicleRegistrationNumber: {
            type: DataTypes.STRING(50),
            field: 'VehicleRegistrationNumber',
            allowNull: true
        },
        vehicleDescription: {
            type: DataTypes.STRING(50),
            field: 'VehicleDescription',
            allowNull: true
        },
        aircraftManufacturer: {
            type: DataTypes.STRING(100),
            field: 'AircraftManufacturer',
            allowNull: true
        },
        aircraftModel: {
            type: DataTypes.STRING(50),
            field: 'AircraftModel',
            allowNull: true
        },
        aircraftNationality: {
            type: DataTypes.STRING(50),
            field: 'AircraftNationality',
            allowNull: true
        },
        aircraftCodeRegistrationMark: {
            type: DataTypes.STRING(50),
            field: 'AircraftCodeRegistrationMark',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRRegistrationCollateral',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationCollateral = model.TradingHistoryPPSRRegistrationCollateral;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationCollateral.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
