'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportDirectorship', {
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
        directorshipType: {
            type: DataTypes.STRING(50),
            field: 'DirectorshipType',
            allowNull: true
        },
        lastExtractDate: {
            type: DataTypes.DATEONLY,
            field: 'LastExtractDate',
            allowNull: true
        },
        lastExtractTime: {
            type: DataTypes.STRING(50),
            field: 'LastExtractTime',
            allowNull: true
        },
        lastUpdateDate: {
            type: DataTypes.DATEONLY,
            field: 'LastUpdateDate',
            allowNull: true
        },
        lastUpdateTime: {
            type: DataTypes.STRING(50),
            field: 'LastUpdateTime',
            allowNull: true
        },
        dateAppointed: {
            type: DataTypes.DATEONLY,
            field: 'DateAppointed',
            allowNull: true
        },
        dateCeased: {
            type: DataTypes.DATEONLY,
            field: 'DateCeased',
            allowNull: true
        },
        dateLastKnownAsDirector: {
            type: DataTypes.DATEONLY,
            field: 'DateLastKnownAsDirector',
            allowNull: true
        },
        organisationBureauReference: {
            type: DataTypes.STRING(100),
            field: 'OrganisationBureauReference',
            allowNull: true
        },
        organisationName: {
            type: DataTypes.STRING(200),
            field: 'OrganisationName',
            allowNull: true
        },
        organisationNameStartDate: {
            type: DataTypes.DATEONLY,
            field: 'OrganisationNameStartDate',
            allowNull: true
        },
        organisationTypeCode: {
            type: DataTypes.STRING(50),
            field: 'OrganisationTypeCode',
            allowNull: true
        },
        organisationType: {
            type: DataTypes.STRING(50),
            field: 'OrganisationType',
            allowNull: true
        },
        organisationStatusCode: {
            type: DataTypes.STRING(10),
            field: 'OrganisationStatusCode',
            allowNull: true
        },
        organisationStatus: {
            type: DataTypes.STRING(50),
            field: 'OrganisationStatus',
            allowNull: true
        },
        organisationNumber: {
            type: DataTypes.STRING(50),
            field: 'OrganisationNumber',
            allowNull: true
        },
        aBN: {
            type: DataTypes.STRING(20),
            field: 'ABN',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportDirectorship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportDirectorship = model.CreditReportDirectorship;
    var CreditReport = model.CreditReport;

    CreditReportDirectorship.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
