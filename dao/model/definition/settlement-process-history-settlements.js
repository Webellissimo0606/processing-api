'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementProcessHistorySettlement', {
        settlementProcessHistoryID: {
            type: DataTypes.INTEGER,
            field: 'SettlementProcessHistoryID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'SettlementProcessHistory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        settlementID: {
            type: DataTypes.INTEGER,
            field: 'SettlementID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Settlement',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'SettlementProcessHistorySettlements',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementProcessHistorySettlement = model.SettlementProcessHistorySettlement;
    var SettlementProcessHistory = model.SettlementProcessHistory;
    var Settlement = model.Settlement;

    SettlementProcessHistorySettlement.belongsTo(SettlementProcessHistory, {
        as: 'SettlementProcessHistory',
        foreignKey: 'SettlementProcessHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementProcessHistorySettlement.belongsTo(Settlement, {
        as: 'Settlement',
        foreignKey: 'SettlementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
