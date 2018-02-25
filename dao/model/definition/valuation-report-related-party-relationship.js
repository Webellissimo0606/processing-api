'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportRelatedPartyRelationship', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        valuationReportID: {
            type: DataTypes.INTEGER,
            field: 'ValuationReportID',
            allowNull: false,
            references: {
                model: 'ValuationReport',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        relatedPartyTypeID: {
            type: DataTypes.INTEGER,
            field: 'RelatedPartyTypeID',
            allowNull: true,
            references: {
                model: 'ValuationReportRelatedPartyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        uniqueIdentifier: {
            type: DataTypes.STRING(100),
            field: 'UniqueIdentifier',
            allowNull: true
        },
        relatedPartyName: {
            type: DataTypes.STRING(500),
            field: 'RelatedPartyName',
            allowNull: false
        },
        licenseNumber: {
            type: DataTypes.STRING(500),
            field: 'LicenseNumber',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: true
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ValuationReportRelatedPartyRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportRelatedPartyRelationship = model.ValuationReportRelatedPartyRelationship;
    var ValuationReportRelatedPartyType = model.ValuationReportRelatedPartyType;
    var ValuationReport = model.ValuationReport;

    ValuationReportRelatedPartyRelationship.belongsTo(ValuationReportRelatedPartyType, {
        as: 'RelatedPartyType',
        foreignKey: 'RelatedPartyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportRelatedPartyRelationship.belongsTo(ValuationReport, {
        as: 'ValuationReport',
        foreignKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
