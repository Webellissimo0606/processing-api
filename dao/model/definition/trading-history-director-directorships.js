'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorDirectorship', {
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
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorDirectorships',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorDirectorship = model.TradingHistoryDirectorDirectorship;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorDirectorship.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
