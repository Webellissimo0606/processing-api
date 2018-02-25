'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailMotorvehiclemodel', {
        motorVehicleModelID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleModelID',
            allowNull: false
        },
        motorVehicleModelName: {
            type: DataTypes.STRING(100),
            field: 'MotorVehicleModelName',
            allowNull: false
        },
        motorVehicleTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleTypeID',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'retail_MotorVehicleModel',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailMotorvehiclemodel = model.RetailMotorvehiclemodel;

};
