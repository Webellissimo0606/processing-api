'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RateAdjustmentReasonType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'RateAdjustmentReasonType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RateAdjustmentReasonType = model.RateAdjustmentReasonType;
    var MotorVehicleRateAdjustmentHistory = model.MotorVehicleRateAdjustmentHistory;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;

    RateAdjustmentReasonType.hasMany(MotorVehicleRateAdjustmentHistory, {
        as: 'MotorVehicleRateAdjustmentHistoryReasontypeFks',
        foreignKey: 'ReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RateAdjustmentReasonType.belongsToMany(ApplicationContainer, {
        as: 'MotorVehicleRateAdjustmentHistoryApplicationContainers',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'ReasonTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RateAdjustmentReasonType.belongsToMany(PartyRole, {
        as: 'MotorVehicleRateAdjustmentHistoryCreatedByPartyRoles',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'ReasonTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RateAdjustmentReasonType.belongsToMany(Loan, {
        as: 'MotorVehicleRateAdjustmentHistoryLoans',
        through: MotorVehicleRateAdjustmentHistory,
        foreignKey: 'ReasonTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
