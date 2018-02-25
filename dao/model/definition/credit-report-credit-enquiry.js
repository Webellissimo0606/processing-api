'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportCreditEnquiry', {
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
        iDIndex: {
            type: DataTypes.STRING(10),
            field: 'IDIndex',
            allowNull: true
        },
        enquiryDate: {
            type: DataTypes.DATEONLY,
            field: 'EnquiryDate',
            allowNull: true
        },
        enquiryType: {
            type: DataTypes.STRING(100),
            field: 'EnquiryType',
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
        enquiryAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'EnquiryAmount',
            allowNull: true
        },
        relationshipCode: {
            type: DataTypes.STRING(50),
            field: 'RelationshipCode',
            allowNull: true
        },
        relationship: {
            type: DataTypes.STRING(100),
            field: 'Relationship',
            allowNull: true
        },
        coBorrower: {
            type: DataTypes.STRING(200),
            field: 'CoBorrower',
            allowNull: true
        },
        creditEnquirer: {
            type: DataTypes.STRING(200),
            field: 'CreditEnquirer',
            allowNull: true
        },
        clientReference: {
            type: DataTypes.STRING(100),
            field: 'ClientReference',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportCreditEnquiry',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportCreditEnquiry = model.CreditReportCreditEnquiry;
    var CreditReport = model.CreditReport;

    CreditReportCreditEnquiry.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
