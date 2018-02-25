'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryMercantileEnquiry', {
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
        accountTypeCode: {
            type: DataTypes.STRING(10),
            field: 'AccountTypeCode',
            allowNull: true
        },
        accountType: {
            type: DataTypes.STRING(50),
            field: 'AccountType',
            allowNull: true
        },
        roleCode: {
            type: DataTypes.STRING(10),
            field: 'RoleCode',
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
        },
        amount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'Amount',
            allowNull: true
        },
        clientName: {
            type: DataTypes.STRING(200),
            field: 'ClientName',
            allowNull: true
        },
        enquirer: {
            type: DataTypes.STRING(200),
            field: 'Enquirer',
            allowNull: true
        },
        responseReasonCode: {
            type: DataTypes.STRING(10),
            field: 'ResponseReasonCode',
            allowNull: true
        },
        responseReasonType: {
            type: DataTypes.STRING(200),
            field: 'ResponseReasonType',
            allowNull: true
        },
        paymentStatusCode: {
            type: DataTypes.STRING(10),
            field: 'PaymentStatusCode',
            allowNull: true
        },
        paymentStatusType: {
            type: DataTypes.STRING(50),
            field: 'PaymentStatusType',
            allowNull: true
        },
        collDate: {
            type: DataTypes.DATEONLY,
            field: 'CollDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryMercantileEnquiries',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryMercantileEnquiry = model.TradingHistoryMercantileEnquiry;
    var CreditReport = model.CreditReport;

    TradingHistoryMercantileEnquiry.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
