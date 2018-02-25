'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPreviousName', {
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
        organisationName: {
            type: DataTypes.STRING(200),
            field: 'OrganisationName',
            allowNull: true
        },
        organisationType: {
            type: DataTypes.STRING(50),
            field: 'OrganisationType',
            allowNull: true
        },
        organisationNameStartDate: {
            type: DataTypes.DATEONLY,
            field: 'OrganisationNameStartDate',
            allowNull: true
        },
        ceaseDate: {
            type: DataTypes.DATEONLY,
            field: 'CeaseDate',
            allowNull: true
        },
        organisationStatusCode: {
            type: DataTypes.STRING(10),
            field: 'OrganisationStatusCode',
            allowNull: true
        },
        organisationStatusType: {
            type: DataTypes.STRING(50),
            field: 'OrganisationStatusType',
            allowNull: true
        },
        organisationClass: {
            type: DataTypes.STRING(50),
            field: 'OrganisationClass',
            allowNull: true
        },
        organisationSubclass: {
            type: DataTypes.STRING(50),
            field: 'OrganisationSubclass',
            allowNull: true
        },
        documentNumber: {
            type: DataTypes.STRING(50),
            field: 'DocumentNumber',
            allowNull: true
        },
        documentNumberQualifier: {
            type: DataTypes.STRING(50),
            field: 'DocumentNumberQualifier',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPreviousNames',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPreviousName = model.TradingHistoryPreviousName;
    var CreditReport = model.CreditReport;

    TradingHistoryPreviousName.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
