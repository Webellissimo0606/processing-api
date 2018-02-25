'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationReport', {
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
        searchNumber: {
            type: DataTypes.STRING(20),
            field: 'SearchNumber',
            allowNull: true
        },
        searchDate: {
            type: DataTypes.DATEONLY,
            field: 'SearchDate',
            allowNull: true
        },
        searchType: {
            type: DataTypes.STRING(50),
            field: 'SearchType',
            allowNull: true
        },
        organisationName: {
            type: DataTypes.STRING(200),
            field: 'OrganisationName',
            allowNull: true
        },
        organisationNumber: {
            type: DataTypes.STRING(50),
            field: 'OrganisationNumber',
            allowNull: true
        },
        organisationNumberType: {
            type: DataTypes.STRING(50),
            field: 'OrganisationNumberType',
            allowNull: true
        },
        pPSRNotes: {
            type: DataTypes.STRING(500),
            field: 'PPSRNotes',
            allowNull: true
        },
        totalRegistrations: {
            type: DataTypes.INTEGER,
            field: 'TotalRegistrations',
            allowNull: true
        },
        totalRegistrationsUnder12Months: {
            type: DataTypes.INTEGER,
            field: 'TotalRegistrationsUnder12Months',
            allowNull: true
        },
        totalRegistrationsOver12Months: {
            type: DataTypes.INTEGER,
            field: 'TotalRegistrationsOver12Months',
            allowNull: true
        },
        totalPMSIRegistrations: {
            type: DataTypes.INTEGER,
            field: 'TotalPMSIRegistrations',
            allowNull: true
        },
        totalRegistrationsDesignatedSecuredParties: {
            type: DataTypes.INTEGER,
            field: 'TotalRegistrationsDesignatedSecuredParties',
            allowNull: true
        },
        totalRegistrationsOtherFinancierSecuredParties: {
            type: DataTypes.INTEGER,
            field: 'TotalRegistrationsOtherFinancierSecuredParties',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRRegistrationReports',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationReport = model.TradingHistoryPPSRRegistrationReport;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationReport.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
