'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportDatum', {
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
        mainBuildingComment: {
            type: DataTypes.STRING(5000),
            field: 'MainBuildingComment',
            allowNull: true
        },
        environmentalIssues: {
            type: DataTypes.STRING(2000),
            field: 'EnvironmentalIssues',
            allowNull: true
        },
        estimatedWeeklyRental: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'EstimatedWeeklyRental',
            allowNull: true
        },
        heritageIssues: {
            type: DataTypes.STRING(2000),
            field: 'HeritageIssues',
            allowNull: true
        },
        valuationReportPropertyInterestTypeID: {
            type: DataTypes.INTEGER,
            field: 'ValuationReportPropertyInterestTypeID',
            allowNull: true,
            references: {
                model: 'ValuationReportPropertyInterestType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        isCurrentUseResidential: {
            type: DataTypes.BOOLEAN,
            field: 'IsCurrentUseResidential',
            allowNull: false,
            defaultValue: false
        },
        valuationReportCurrentUseTypeID: {
            type: DataTypes.INTEGER,
            field: 'ValuationReportCurrentUseTypeID',
            allowNull: true,
            references: {
                model: 'ValuationReportCurrentUseType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        isLenderCautioned: {
            type: DataTypes.BOOLEAN,
            field: 'IsLenderCautioned',
            allowNull: false,
            defaultValue: false
        },
        isTitleSearched: {
            type: DataTypes.BOOLEAN,
            field: 'IsTitleSearched',
            allowNull: false,
            defaultValue: false
        },
        isTitleSighted: {
            type: DataTypes.BOOLEAN,
            field: 'IsTitleSighted',
            allowNull: false,
            defaultValue: false
        },
        isTwoTiered: {
            type: DataTypes.BOOLEAN,
            field: 'IsTwoTiered',
            allowNull: false,
            defaultValue: false
        },
        lenderCautionComment: {
            type: DataTypes.STRING(2000),
            field: 'LenderCautionComment',
            allowNull: true
        },
        marketability: {
            type: DataTypes.STRING(2000),
            field: 'Marketability',
            allowNull: true
        },
        otherAreaMeasurment: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'OtherAreaMeasurment',
            allowNull: true
        },
        outDoorAreaMeasurment: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'OutDoorAreaMeasurment',
            allowNull: true
        },
        rangeHigh: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'RangeHigh',
            allowNull: true
        },
        rangeLow: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'RangeLow',
            allowNull: true
        },
        otherServicesDescription: {
            type: DataTypes.STRING(2000),
            field: 'OtherServicesDescription',
            allowNull: true
        },
        riskComment: {
            type: DataTypes.TEXT,
            field: 'RiskComment',
            allowNull: true
        },
        isSalesEvidenceOverallComparisonSupplied: {
            type: DataTypes.BOOLEAN,
            field: 'IsSalesEvidenceOverallComparisonSupplied',
            allowNull: false,
            defaultValue: false
        },
        siteDimensionsDepth: {
            type: DataTypes.STRING(100),
            field: 'SiteDimensionsDepth',
            allowNull: true
        },
        siteDimensionsFrontage: {
            type: DataTypes.STRING(100),
            field: 'SiteDimensionsFrontage',
            allowNull: true
        },
        siteDimensionsIrregularShape: {
            type: DataTypes.BOOLEAN,
            field: 'SiteDimensionsIrregularShape',
            allowNull: false,
            defaultValue: false
        },
        valuationReportValuationSubTypeID: {
            type: DataTypes.INTEGER,
            field: 'ValuationReportValuationSubTypeID',
            allowNull: true,
            references: {
                model: 'ValuationReportValuationSubType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        valueComponent: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'ValueComponent',
            allowNull: true
        },
        internalConditionTypeID: {
            type: DataTypes.INTEGER,
            field: 'InternalConditionTypeID',
            allowNull: true
        },
        externalConditionTypeID: {
            type: DataTypes.INTEGER,
            field: 'ExternalConditionTypeID',
            allowNull: true
        },
        yearBuilt: {
            type: DataTypes.INTEGER,
            field: 'YearBuilt',
            allowNull: true
        },
        zoningCategory: {
            type: DataTypes.STRING(300),
            field: 'ZoningCategory',
            allowNull: true
        },
        zoningEffect: {
            type: DataTypes.STRING(500),
            field: 'ZoningEffect',
            allowNull: true
        },
        zoningLocalGovernmentAuthority: {
            type: DataTypes.STRING(300),
            field: 'ZoningLocalGovernmentAuthority',
            allowNull: true
        },
        unitsEntitlement: {
            type: DataTypes.STRING(300),
            field: 'UnitsEntitlement',
            allowNull: true
        },
        unitsEntitlementOutOf: {
            type: DataTypes.INTEGER,
            field: 'UnitsEntitlementOutOf',
            allowNull: true
        },
        unitsInDevelopment: {
            type: DataTypes.INTEGER,
            field: 'UnitsInDevelopment',
            allowNull: true
        },
        unitsInDevelopmentLevel: {
            type: DataTypes.INTEGER,
            field: 'UnitsInDevelopmentLevel',
            allowNull: true
        },
        isSecurityRecommended: {
            type: DataTypes.BOOLEAN,
            field: 'IsSecurityRecommended',
            allowNull: false,
            defaultValue: false
        },
        mainBuildingTypeID: {
            type: DataTypes.INTEGER,
            field: 'MainBuildingTypeID',
            allowNull: true
        },
        propertyTypeDescription: {
            type: DataTypes.STRING(2000),
            field: 'PropertyTypeDescription',
            allowNull: true
        },
        inspectionDate: {
            type: DataTypes.DATE,
            field: 'InspectionDate',
            allowNull: false
        },
        reportDate: {
            type: DataTypes.DATE,
            field: 'ReportDate',
            allowNull: false
        },
        titleDescription: {
            type: DataTypes.STRING(500),
            field: 'TitleDescription',
            allowNull: true
        },
        zoningDescription: {
            type: DataTypes.STRING(500),
            field: 'ZoningDescription',
            allowNull: true
        },
        assessmentValueImprovements: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'AssessmentValueImprovements',
            allowNull: true
        },
        landValueArea: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'LandValueArea',
            allowNull: true
        },
        landValueUnitOfMeasure: {
            type: DataTypes.STRING(50),
            field: 'LandValueUnitOfMeasure',
            allowNull: true
        },
        livingValueArea: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'LivingValueArea',
            allowNull: true
        },
        livingValueUnitOfMeasure: {
            type: DataTypes.STRING(50),
            field: 'LivingValueUnitOfMeasure',
            allowNull: true
        },
        isClearOfDefects: {
            type: DataTypes.BOOLEAN,
            field: 'IsClearOfDefects',
            allowNull: false,
            defaultValue: false
        },
        essentialRepairs: {
            type: DataTypes.STRING(2000),
            field: 'EssentialRepairs',
            allowNull: true
        },
        improvementAreaDescription: {
            type: DataTypes.STRING(500),
            field: 'ImprovementAreaDescription',
            allowNull: true
        },
        improvementArea: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'ImprovementArea',
            allowNull: true
        },
        comment: {
            type: DataTypes.TEXT,
            field: 'Comment',
            allowNull: true
        },
        accomodationAlternativeDescription: {
            type: DataTypes.STRING(2000),
            field: 'AccomodationAlternativeDescription',
            allowNull: true
        },
        ancillaryImprovementDescription: {
            type: DataTypes.STRING(1500),
            field: 'AncillaryImprovementDescription',
            allowNull: true
        },
        assessmentDescription: {
            type: DataTypes.STRING(1500),
            field: 'AssessmentDescription',
            allowNull: true
        },
        buildingModificationComment: {
            type: DataTypes.STRING(2000),
            field: 'BuildingModificationComment',
            allowNull: true
        },
        buildDate: {
            type: DataTypes.DATE,
            field: 'BuildDate',
            allowNull: true
        },
        buildingCheckCost: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'BuildingCheckCost',
            allowNull: true
        },
        buildingTenderPrice: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'BuildingTenderPrice',
            allowNull: true
        },
        improvementAreaAlternativeDescription: {
            type: DataTypes.STRING(1000),
            field: 'ImprovementAreaAlternativeDescription',
            allowNull: true
        },
        propertyTypeAlternativeDescription: {
            type: DataTypes.STRING(1000),
            field: 'PropertyTypeAlternativeDescription',
            allowNull: true
        },
        zoningAlternativeDescription: {
            type: DataTypes.STRING(500),
            field: 'ZoningAlternativeDescription',
            allowNull: true
        },
        actualWeeklyRental: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'ActualWeeklyRental',
            allowNull: true
        },
        valueLandAmount: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'ValueLandAmount',
            allowNull: true
        },
        valueImprovementsAmount: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'ValueImprovementsAmount',
            allowNull: true
        },
        valueOtherAmount: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'ValueOtherAmount',
            allowNull: true
        },
        valueInsuranceAmount: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'ValueInsuranceAmount',
            allowNull: true
        },
        insuranceAssessment: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'InsuranceAssessment',
            allowNull: true
        },
        lotNumber: {
            type: DataTypes.STRING(50),
            field: 'LotNumber',
            allowNull: true
        },
        volumeNumber: {
            type: DataTypes.STRING(50),
            field: 'VolumeNumber',
            allowNull: true
        },
        folioNumber: {
            type: DataTypes.STRING(50),
            field: 'FolioNumber',
            allowNull: true
        },
        numberOfBedrooms: {
            type: DataTypes.INTEGER,
            field: 'NumberOfBedrooms',
            allowNull: true
        },
        securityValue: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'SecurityValue',
            allowNull: true
        },
        assessmentMarketValue: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'AssessmentMarketValue',
            allowNull: true
        },
        assessmentMarketComment: {
            type: DataTypes.STRING(2000),
            field: 'AssessmentMarketComment',
            allowNull: true
        },
        planNumber: {
            type: DataTypes.STRING(50),
            field: 'PlanNumber',
            allowNull: true
        },
        titleTenureTypeID: {
            type: DataTypes.INTEGER,
            field: 'TitleTenureTypeID',
            allowNull: true,
            references: {
                model: 'ValuationReportTitleTenureType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        parish: {
            type: DataTypes.STRING(300),
            field: 'Parish',
            allowNull: true
        },
        county: {
            type: DataTypes.STRING(300),
            field: 'County',
            allowNull: true
        },
        dealing: {
            type: DataTypes.STRING(500),
            field: 'Dealing',
            allowNull: true
        },
        block: {
            type: DataTypes.STRING(500),
            field: 'Block',
            allowNull: true
        },
        district: {
            type: DataTypes.STRING(300),
            field: 'District',
            allowNull: true
        },
        tenancy: {
            type: DataTypes.STRING(500),
            field: 'Tenancy',
            allowNull: true
        },
        location: {
            type: DataTypes.STRING(1000),
            field: 'Location',
            allowNull: true
        },
        titleUnit: {
            type: DataTypes.STRING(300),
            field: 'TitleUnit',
            allowNull: true
        },
        edition: {
            type: DataTypes.STRING(300),
            field: 'Edition',
            allowNull: true
        },
        section: {
            type: DataTypes.STRING(500),
            field: 'Section',
            allowNull: true
        },
        limit: {
            type: DataTypes.STRING(300),
            field: 'Limit',
            allowNull: true
        },
        lease: {
            type: DataTypes.STRING(300),
            field: 'Lease',
            allowNull: true
        },
        extents: {
            type: DataTypes.STRING(500),
            field: 'Extents',
            allowNull: true
        },
        isConstructionValuation: {
            type: DataTypes.BOOLEAN,
            field: 'IsConstructionValuation',
            allowNull: false,
            defaultValue: false
        },
        externalComponentID: {
            type: DataTypes.STRING(50),
            field: 'ExternalComponentID',
            allowNull: true
        },
        requestorsReference: {
            type: DataTypes.STRING(50),
            field: 'RequestorsReference',
            allowNull: true
        },
        reportDocumentFileName: {
            type: DataTypes.STRING(2100),
            field: 'ReportDocumentFileName',
            allowNull: true
        },
        reportDocumentFileType: {
            type: DataTypes.STRING(50),
            field: 'ReportDocumentFileType',
            allowNull: true
        },
        postContractVarAmount: {
            type: DataTypes.DECIMAL(18, 6),
            field: 'PostContractVarAmount',
            allowNull: true
        },
        constructionStage: {
            type: DataTypes.STRING(500),
            field: 'ConstructionStage',
            allowNull: true
        },
        valuationReportAddressID: {
            type: DataTypes.INTEGER,
            field: 'ValuationReportAddressID',
            allowNull: true,
            references: {
                model: 'ValuationReportAddress',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        },
        costToComplete: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'CostToComplete',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ValuationReportData',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportDatum = model.ValuationReportDatum;
    var ValuationReportAddress = model.ValuationReportAddress;
    var ValuationReportCurrentUseType = model.ValuationReportCurrentUseType;
    var ValuationReportPropertyInterestType = model.ValuationReportPropertyInterestType;
    var ValuationReportTitleTenureType = model.ValuationReportTitleTenureType;
    var ValuationReportValuationSubType = model.ValuationReportValuationSubType;
    var ValuationReport = model.ValuationReport;

    ValuationReportDatum.belongsTo(ValuationReportAddress, {
        as: 'ValuationReportAddress',
        foreignKey: 'ValuationReportAddressID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportDatum.belongsTo(ValuationReportCurrentUseType, {
        as: 'ValuationReportCurrentUseType',
        foreignKey: 'ValuationReportCurrentUseTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportDatum.belongsTo(ValuationReportPropertyInterestType, {
        as: 'ValuationReportPropertyInterestType',
        foreignKey: 'ValuationReportPropertyInterestTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportDatum.belongsTo(ValuationReportTitleTenureType, {
        as: 'TitleTenureType',
        foreignKey: 'TitleTenureTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportDatum.belongsTo(ValuationReportValuationSubType, {
        as: 'ValuationReportValuationSubType',
        foreignKey: 'ValuationReportValuationSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportDatum.belongsTo(ValuationReport, {
        as: 'ValuationReport',
        foreignKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
