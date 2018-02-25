'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportPersonalInsolvency', {
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
        typeCode: {
            type: DataTypes.STRING(10),
            field: 'TypeCode',
            allowNull: true
        },
        type: {
            type: DataTypes.STRING(50),
            field: 'Type',
            allowNull: true
        },
        dateDeclared: {
            type: DataTypes.DATEONLY,
            field: 'DateDeclared',
            allowNull: true
        },
        text: {
            type: DataTypes.STRING(50),
            field: 'Text',
            allowNull: true
        },
        administrationDistrict: {
            type: DataTypes.STRING(10),
            field: 'AdministrationDistrict',
            allowNull: true
        },
        administrationYear: {
            type: DataTypes.STRING(10),
            field: 'AdministrationYear',
            allowNull: true
        },
        administrationNumber: {
            type: DataTypes.STRING(10),
            field: 'AdministrationNumber',
            allowNull: true
        },
        administrationProceedingsStatus: {
            type: DataTypes.STRING(10),
            field: 'AdministrationProceedingsStatus',
            allowNull: true
        },
        statusCode: {
            type: DataTypes.STRING(10),
            field: 'StatusCode',
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(50),
            field: 'Status',
            allowNull: true
        },
        statusDate: {
            type: DataTypes.DATEONLY,
            field: 'StatusDate',
            allowNull: true
        },
        relationshipCode: {
            type: DataTypes.STRING(10),
            field: 'RelationshipCode',
            allowNull: true
        },
        relationship: {
            type: DataTypes.STRING(50),
            field: 'Relationship',
            allowNull: true
        },
        coBorrower: {
            type: DataTypes.STRING(50),
            field: 'CoBorrower',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportPersonalInsolvency',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportPersonalInsolvency = model.CreditReportPersonalInsolvency;
    var CreditReport = model.CreditReport;

    CreditReportPersonalInsolvency.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
