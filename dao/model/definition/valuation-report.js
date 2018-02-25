'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReport', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationSecurityID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationSecurityID',
            allowNull: false
        },
        valuationOrderID: {
            type: DataTypes.INTEGER,
            field: 'ValuationOrderID',
            allowNull: true
        },
        reportDate: {
            type: DataTypes.DATE,
            field: 'ReportDate',
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
        tableName: 'ValuationReport',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReport = model.ValuationReport;
    var ValuationReportDatum = model.ValuationReportDatum;
    var ValuationReportRelatedPartyRelationship = model.ValuationReportRelatedPartyRelationship;
    var ValuationRisk = model.ValuationRisk;
    var ValuationReportAddress = model.ValuationReportAddress;
    var ValuationReportCurrentUseType = model.ValuationReportCurrentUseType;
    var ValuationReportPropertyInterestType = model.ValuationReportPropertyInterestType;
    var ValuationReportTitleTenureType = model.ValuationReportTitleTenureType;
    var ValuationReportValuationSubType = model.ValuationReportValuationSubType;
    var ValuationReportRelatedPartyType = model.ValuationReportRelatedPartyType;
    var RiskDescriptionType = model.RiskDescriptionType;
    var RiskRatingType = model.RiskRatingType;

    ValuationReport.hasMany(ValuationReportDatum, {
        as: 'DataValuationreportFks',
        foreignKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.hasMany(ValuationReportRelatedPartyRelationship, {
        as: 'RelatedPartyRelationshipValuationreportFks',
        foreignKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.hasMany(ValuationRisk, {
        as: 'ValuationRiskValuationreportFks',
        foreignKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(ValuationReportAddress, {
        as: 'ValuationReportDatumValuationReportAddresses',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportID',
        otherKey: 'ValuationReportAddressID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(ValuationReportCurrentUseType, {
        as: 'ValuationReportDatumValuationReportCurrentUseTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportID',
        otherKey: 'ValuationReportCurrentUseTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(ValuationReportPropertyInterestType, {
        as: 'ValuationReportDatumValuationReportPropertyInterestTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportID',
        otherKey: 'ValuationReportPropertyInterestTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(ValuationReportTitleTenureType, {
        as: 'ValuationReportDatumTitleTenureTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportID',
        otherKey: 'TitleTenureTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(ValuationReportValuationSubType, {
        as: 'ValuationReportDatumValuationReportValuationSubTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportID',
        otherKey: 'ValuationReportValuationSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(ValuationReportRelatedPartyType, {
        as: 'ValuationReportRelatedPartyRelationshipRelatedPartyTypes',
        through: ValuationReportRelatedPartyRelationship,
        foreignKey: 'ValuationReportID',
        otherKey: 'RelatedPartyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(RiskDescriptionType, {
        as: 'ValuationRiskRiskDescriptionTypes',
        through: ValuationRisk,
        foreignKey: 'ValuationReportID',
        otherKey: 'RiskDescriptionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReport.belongsToMany(RiskRatingType, {
        as: 'ValuationRiskRiskRatingTypes',
        through: ValuationRisk,
        foreignKey: 'ValuationReportID',
        otherKey: 'RiskRatingTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
