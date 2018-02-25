'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPreviousDirectorDirectorship', {
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
        organisationStatusCode: {
            type: DataTypes.STRING(20),
            field: 'OrganisationStatusCode',
            allowNull: true
        },
        organisationStatusType: {
            type: DataTypes.STRING(50),
            field: 'OrganisationStatusType',
            allowNull: true
        },
        australianCompanyNumber: {
            type: DataTypes.STRING(20),
            field: 'AustralianCompanyNumber',
            allowNull: true
        },
        australianBusinessNumber: {
            type: DataTypes.STRING(20),
            field: 'AustralianBusinessNumber',
            allowNull: true
        },
        appointmentDate: {
            type: DataTypes.DATEONLY,
            field: 'AppointmentDate',
            allowNull: true
        },
        ceaseDate: {
            type: DataTypes.DATEONLY,
            field: 'CeaseDate',
            allowNull: true
        },
        lastKnownDate: {
            type: DataTypes.DATEONLY,
            field: 'LastKnownDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPreviousDirectorDirectorships',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPreviousDirectorDirectorship = model.TradingHistoryPreviousDirectorDirectorship;
    var CreditReport = model.CreditReport;

    TradingHistoryPreviousDirectorDirectorship.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
