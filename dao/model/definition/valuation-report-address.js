'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportAddress', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        buildingName: {
            type: DataTypes.STRING(1000),
            field: 'BuildingName',
            allowNull: true
        },
        floorNo: {
            type: DataTypes.STRING(50),
            field: 'FloorNo',
            allowNull: true
        },
        unitNo: {
            type: DataTypes.STRING(30),
            field: 'UnitNo',
            allowNull: true
        },
        streetNo: {
            type: DataTypes.STRING(50),
            field: 'StreetNo',
            allowNull: true
        },
        pOBox: {
            type: DataTypes.STRING(30),
            field: 'POBox',
            allowNull: true
        },
        pOExchange: {
            type: DataTypes.STRING(100),
            field: 'POExchange',
            allowNull: true
        },
        dXBox: {
            type: DataTypes.STRING(30),
            field: 'DXBox',
            allowNull: true
        },
        dXExchange: {
            type: DataTypes.STRING(100),
            field: 'DXExchange',
            allowNull: true
        },
        streetName: {
            type: DataTypes.STRING(1000),
            field: 'StreetName',
            allowNull: true
        },
        streetTypeName: {
            type: DataTypes.STRING(100),
            field: 'StreetTypeName',
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(300),
            field: 'City',
            allowNull: true
        },
        stateName: {
            type: DataTypes.STRING(300),
            field: 'StateName',
            allowNull: true
        },
        postCode: {
            type: DataTypes.STRING(10),
            field: 'PostCode',
            allowNull: true
        },
        country: {
            type: DataTypes.STRING(300),
            field: 'Country',
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
        tableName: 'ValuationReportAddress',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportAddress = model.ValuationReportAddress;
    var ValuationReportDatum = model.ValuationReportDatum;
    var ValuationReportCurrentUseType = model.ValuationReportCurrentUseType;
    var ValuationReportPropertyInterestType = model.ValuationReportPropertyInterestType;
    var ValuationReportTitleTenureType = model.ValuationReportTitleTenureType;
    var ValuationReportValuationSubType = model.ValuationReportValuationSubType;
    var ValuationReport = model.ValuationReport;

    ValuationReportAddress.hasMany(ValuationReportDatum, {
        as: 'ValuationReportDataValuationreportaddressFks',
        foreignKey: 'ValuationReportAddressID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportAddress.belongsToMany(ValuationReportCurrentUseType, {
        as: 'ValuationReportDatumValuationReportCurrentUseTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportAddressID',
        otherKey: 'ValuationReportCurrentUseTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportAddress.belongsToMany(ValuationReportPropertyInterestType, {
        as: 'ValuationReportDatumValuationReportPropertyInterestTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportAddressID',
        otherKey: 'ValuationReportPropertyInterestTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportAddress.belongsToMany(ValuationReportTitleTenureType, {
        as: 'ValuationReportDatumTitleTenureTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportAddressID',
        otherKey: 'TitleTenureTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportAddress.belongsToMany(ValuationReportValuationSubType, {
        as: 'ValuationReportDatumValuationReportValuationSubTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportAddressID',
        otherKey: 'ValuationReportValuationSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportAddress.belongsToMany(ValuationReport, {
        as: 'ValuationReportDatumValuationReports',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportAddressID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
