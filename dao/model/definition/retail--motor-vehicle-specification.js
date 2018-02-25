'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailMotorvehiclespecification', {
        motorVehicleSpecificationID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleSpecificationID',
            allowNull: false
        },
        glassesGuideCode: {
            type: DataTypes.STRING(50),
            field: 'GlassesGuideCode',
            allowNull: true
        },
        manufactureMonth: {
            type: DataTypes.STRING(50),
            field: 'ManufactureMonth',
            allowNull: true
        },
        motorVehicleMakeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleMakeID',
            allowNull: true
        },
        motorVehicleModelID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleModelID',
            allowNull: true
        },
        motorVehicleVersionTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleVersionTypeID',
            allowNull: true
        },
        motorVehicleTransmissionTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleTransmissionTypeID',
            allowNull: true
        },
        motorVehicleBodyTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleBodyTypeID',
            allowNull: true
        },
        motorVehicleEngineTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleEngineTypeID',
            allowNull: true
        },
        motorVehicleCategoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleCategoryTypeID',
            allowNull: true
        },
        motorVehicleTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleTypeID',
            allowNull: true
        },
        series: {
            type: DataTypes.STRING(50),
            field: 'Series',
            allowNull: true
        },
        cC: {
            type: DataTypes.STRING(50),
            field: 'CC',
            allowNull: true
        },
        size: {
            type: DataTypes.STRING(50),
            field: 'Size',
            allowNull: true
        },
        cylinders: {
            type: DataTypes.STRING(50),
            field: 'Cylinders',
            allowNull: true
        },
        width: {
            type: DataTypes.STRING(50),
            field: 'Width',
            allowNull: true
        },
        nVIC: {
            type: DataTypes.STRING(50),
            field: 'NVIC',
            allowNull: true
        },
        year: {
            type: DataTypes.INTEGER,
            field: 'Year',
            allowNull: true
        },
        bT: {
            type: DataTypes.STRING(50),
            field: 'BT',
            allowNull: true
        },
        eT: {
            type: DataTypes.STRING(50),
            field: 'ET',
            allowNull: true
        },
        tT: {
            type: DataTypes.STRING(50),
            field: 'TT',
            allowNull: true
        },
        rowStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'RowStatusTypeID',
            allowNull: true
        },
        vehicleText: {
            type: DataTypes.STRING(300),
            field: 'VehicleText',
            allowNull: true
        },
        isGreen: {
            type: DataTypes.BOOLEAN,
            field: 'IsGreen',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'retail_MotorVehicleSpecification',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailMotorvehiclespecification = model.RetailMotorvehiclespecification;

};
