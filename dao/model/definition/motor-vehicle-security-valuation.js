'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('MotorVehicleSecurityValuation', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        valuationID: {
            type: DataTypes.INTEGER,
            field: 'ValuationID',
            allowNull: false,
            references: {
                model: 'Valuation',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        valuationDescription: {
            type: DataTypes.STRING(512),
            field: 'ValuationDescription',
            allowNull: true
        },
        isOdometerDiscrepency: {
            type: DataTypes.BOOLEAN,
            field: 'IsOdometerDiscrepency',
            allowNull: false
        },
        isEncumberanceReported: {
            type: DataTypes.BOOLEAN,
            field: 'IsEncumberanceReported',
            allowNull: false
        },
        isWrittenOffStatus: {
            type: DataTypes.BOOLEAN,
            field: 'IsWrittenOffStatus',
            allowNull: false
        },
        isStolenStatus: {
            type: DataTypes.BOOLEAN,
            field: 'IsStolenStatus',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'MotorVehicleSecurityValuation',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var MotorVehicleSecurityValuation = model.MotorVehicleSecurityValuation;
    var Valuation = model.Valuation;

    MotorVehicleSecurityValuation.belongsTo(Valuation, {
        as: 'Valuation',
        foreignKey: 'ValuationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
