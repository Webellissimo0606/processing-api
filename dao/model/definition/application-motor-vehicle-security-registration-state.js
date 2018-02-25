'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationMotorVehicleSecurityRegistrationState', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: true
        },
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: true
        },
        crumbsRegistrationStateID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsRegistrationStateID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationMotorVehicleSecurityRegistrationState',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationMotorVehicleSecurityRegistrationState = model.ApplicationMotorVehicleSecurityRegistrationState;

};
