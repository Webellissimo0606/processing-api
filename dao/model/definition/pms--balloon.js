'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsBalloon', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        equipmentFinanceProductTypeID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceProductTypeID',
            allowNull: true
        },
        loanPurposeTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanPurposeTypeID',
            allowNull: true
        },
        loanTermLengthTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanTermLengthTypeID',
            allowNull: false
        },
        maximumBalloon: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'MaximumBalloon',
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING(100),
            field: 'DisplayName',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'pms_Balloon',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsBalloon = model.PmsBalloon;

};
