'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailMotorvehicleenginetype', {
        motorVehicleEngineTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleEngineTypeID',
            allowNull: false
        },
        glassesGuideCode: {
            type: DataTypes.STRING(10),
            field: 'GlassesGuideCode',
            allowNull: false
        },
        motorVehicleEngineTypeName: {
            type: DataTypes.STRING(100),
            field: 'MotorVehicleEngineTypeName',
            allowNull: false
        },
        motorVehicleTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleTypeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'retail_MotorVehicleEngineType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailMotorvehicleenginetype = model.RetailMotorvehicleenginetype;

};
