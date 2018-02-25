'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementProcessType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'SettlementProcessType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementProcessType = model.SettlementProcessType;
    var SettlementProcessHistory = model.SettlementProcessHistory;

    SettlementProcessType.hasMany(SettlementProcessHistory, {
        as: 'SettlementProcessHistorySettlementprocesstypeFks',
        foreignKey: 'SettlementProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
