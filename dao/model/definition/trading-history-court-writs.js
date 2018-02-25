'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryCourtWrit', {
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
        seq: {
            type: DataTypes.STRING(20),
            field: 'Seq',
            allowNull: true
        },
        actionDate: {
            type: DataTypes.DATEONLY,
            field: 'ActionDate',
            allowNull: true
        },
        creditor: {
            type: DataTypes.STRING(200),
            field: 'Creditor',
            allowNull: true
        },
        plaintNumber: {
            type: DataTypes.STRING(50),
            field: 'PlaintNumber',
            allowNull: true
        },
        roleTypeCode: {
            type: DataTypes.STRING(20),
            field: 'RoleTypeCode',
            allowNull: true
        },
        roleType: {
            type: DataTypes.STRING(50),
            field: 'RoleType',
            allowNull: true
        },
        actionStatusCode: {
            type: DataTypes.STRING(20),
            field: 'ActionStatusCode',
            allowNull: true
        },
        actionStatusType: {
            type: DataTypes.STRING(50),
            field: 'ActionStatusType',
            allowNull: true
        },
        amount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Amount',
            allowNull: true
        },
        courtTypeCode: {
            type: DataTypes.STRING(20),
            field: 'CourtTypeCode',
            allowNull: true
        },
        courtType: {
            type: DataTypes.STRING(50),
            field: 'CourtType',
            allowNull: true
        },
        coBorrower: {
            type: DataTypes.STRING(200),
            field: 'CoBorrower',
            allowNull: true
        },
        statusDate: {
            type: DataTypes.DATEONLY,
            field: 'StatusDate',
            allowNull: true
        },
        writType: {
            type: DataTypes.STRING(50),
            field: 'WritType',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryCourtWrits',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryCourtWrit = model.TradingHistoryCourtWrit;
    var CreditReport = model.CreditReport;

    TradingHistoryCourtWrit.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
