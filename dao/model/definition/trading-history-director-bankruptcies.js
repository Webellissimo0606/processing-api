'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorBankruptcy', {
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
        bureauReference: {
            type: DataTypes.STRING(20),
            field: 'BureauReference',
            allowNull: true
        },
        bankruptcyDate: {
            type: DataTypes.DATEONLY,
            field: 'BankruptcyDate',
            allowNull: true
        },
        bankruptcyStatusCode: {
            type: DataTypes.STRING(20),
            field: 'BankruptcyStatusCode',
            allowNull: true
        },
        bankruptcyStatusType: {
            type: DataTypes.STRING(50),
            field: 'BankruptcyStatusType',
            allowNull: true
        },
        bankruptcyNarrative: {
            type: DataTypes.STRING(500),
            field: 'BankruptcyNarrative',
            allowNull: true
        },
        proceedingsNumber: {
            type: DataTypes.STRING(20),
            field: 'ProceedingsNumber',
            allowNull: true
        },
        proceedingsYear: {
            type: DataTypes.STRING(5),
            field: 'ProceedingsYear',
            allowNull: true
        },
        proceedingsState: {
            type: DataTypes.STRING(10),
            field: 'ProceedingsState',
            allowNull: true
        },
        proceedingsStatus: {
            type: DataTypes.STRING(50),
            field: 'ProceedingsStatus',
            allowNull: true
        },
        dischargeFlagCode: {
            type: DataTypes.STRING(20),
            field: 'DischargeFlagCode',
            allowNull: true
        },
        dischargeFlagType: {
            type: DataTypes.STRING(50),
            field: 'DischargeFlagType',
            allowNull: true
        },
        dischargeDate: {
            type: DataTypes.DATEONLY,
            field: 'DischargeDate',
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
        coBorrower: {
            type: DataTypes.STRING(200),
            field: 'CoBorrower',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorBankruptcies',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorBankruptcy = model.TradingHistoryDirectorBankruptcy;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorBankruptcy.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
