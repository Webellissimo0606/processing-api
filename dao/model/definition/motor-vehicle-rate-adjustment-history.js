'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('MotorVehicleRateAdjustmentHistory', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: false,
            references: {
                model: 'Loan',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        adjustment: {
            type: DataTypes.DECIMAL(12, 4),
            field: 'Adjustment',
            allowNull: false
        },
        reasonTypeID: {
            type: DataTypes.INTEGER,
            field: 'ReasonTypeID',
            allowNull: false,
            references: {
                model: 'RateAdjustmentReasonType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'MotorVehicleRateAdjustmentHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var MotorVehicleRateAdjustmentHistory = model.MotorVehicleRateAdjustmentHistory;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var RateAdjustmentReasonType = model.RateAdjustmentReasonType;

    MotorVehicleRateAdjustmentHistory.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleRateAdjustmentHistory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleRateAdjustmentHistory.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleRateAdjustmentHistory.belongsTo(RateAdjustmentReasonType, {
        as: 'ReasonType',
        foreignKey: 'ReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
