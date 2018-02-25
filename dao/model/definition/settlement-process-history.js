'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SettlementProcessHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        settlementProcessTypeID: {
            type: DataTypes.INTEGER,
            field: 'SettlementProcessTypeID',
            allowNull: false,
            references: {
                model: 'SettlementProcessType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        startDate: {
            type: DataTypes.DATE,
            field: 'StartDate',
            allowNull: false
        },
        finishDate: {
            type: DataTypes.DATE,
            field: 'FinishDate',
            allowNull: true
        },
        startedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'StartedByPartyRoleID',
            allowNull: false
        },
        finishedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'FinishedByPartyRoleID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'SettlementProcessHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SettlementProcessHistory = model.SettlementProcessHistory;
    var SettlementProcessHistorySettlement = model.SettlementProcessHistorySettlement;
    var SettlementProcessType = model.SettlementProcessType;
    var Settlement = model.Settlement;

    SettlementProcessHistory.hasMany(SettlementProcessHistorySettlement, {
        as: 'SettlementsSettlementprocesshistoryFks',
        foreignKey: 'SettlementProcessHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementProcessHistory.belongsTo(SettlementProcessType, {
        as: 'SettlementProcessType',
        foreignKey: 'SettlementProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SettlementProcessHistory.belongsToMany(Settlement, {
        as: 'SettlementProcessHistorySettlementSettlements',
        through: SettlementProcessHistorySettlement,
        foreignKey: 'SettlementProcessHistoryID',
        otherKey: 'SettlementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
