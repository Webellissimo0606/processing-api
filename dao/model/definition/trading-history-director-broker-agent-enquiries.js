'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorBrokerAgentEnquiry', {
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
        seq: {
            type: DataTypes.STRING(20),
            field: 'Seq',
            allowNull: true
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
        enquiryDate: {
            type: DataTypes.DATEONLY,
            field: 'EnquiryDate',
            allowNull: true
        },
        enquirer: {
            type: DataTypes.STRING(200),
            field: 'Enquirer',
            allowNull: true
        },
        refNumber: {
            type: DataTypes.STRING(20),
            field: 'RefNumber',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorBrokerAgentEnquiries',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorBrokerAgentEnquiry = model.TradingHistoryDirectorBrokerAgentEnquiry;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorBrokerAgentEnquiry.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
