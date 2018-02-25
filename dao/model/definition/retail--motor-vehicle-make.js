'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailMotorvehiclemake', {
        motorVehicleMakeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleMakeID',
            allowNull: false
        },
        glassesGuideCode: {
            type: DataTypes.STRING(10),
            field: 'GlassesGuideCode',
            allowNull: false
        },
        motorVehicleMakeName: {
            type: DataTypes.STRING(100),
            field: 'MotorVehicleMakeName',
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
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'retail_MotorVehicleMake',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailMotorvehiclemake = model.RetailMotorvehiclemake;

};
