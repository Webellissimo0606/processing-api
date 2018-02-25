'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanTrackerToolTipType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
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
        tableName: 'LoanTrackerToolTipType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanTrackerToolTipType = model.LoanTrackerToolTipType;
    var LoanTrackerToolTip = model.LoanTrackerToolTip;

    LoanTrackerToolTipType.hasMany(LoanTrackerToolTip, {
        as: 'LoanTrackerToolTipLoantrackertooltiptypeFks',
        foreignKey: 'LoanTrackerToolTipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
