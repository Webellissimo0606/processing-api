'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryOtherEntity', {
        creditReportID: {
            type: DataTypes.INTEGER,
            field: 'CreditReportID',
            allowNull: false,
            references: {
                model: 'CreditReport',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        aBNCode: {
            type: DataTypes.STRING(20),
            field: 'ABNCode',
            allowNull: true
        },
        entityName: {
            type: DataTypes.STRING(200),
            field: 'EntityName',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryOtherEntities',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryOtherEntity = model.TradingHistoryOtherEntity;
    var CreditReport = model.CreditReport;

    TradingHistoryOtherEntity.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
