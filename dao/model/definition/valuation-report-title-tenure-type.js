'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportTitleTenureType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ValuationReportTitleTenureType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportTitleTenureType = model.ValuationReportTitleTenureType;
    var ValuationReportDatum = model.ValuationReportDatum;
    var ValuationReportAddress = model.ValuationReportAddress;
    var ValuationReportCurrentUseType = model.ValuationReportCurrentUseType;
    var ValuationReportPropertyInterestType = model.ValuationReportPropertyInterestType;
    var ValuationReportValuationSubType = model.ValuationReportValuationSubType;
    var ValuationReport = model.ValuationReport;

    ValuationReportTitleTenureType.hasMany(ValuationReportDatum, {
        as: 'ValuationReportDataValuationreporttitletenuretypeFks',
        foreignKey: 'TitleTenureTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportTitleTenureType.belongsToMany(ValuationReportAddress, {
        as: 'ValuationReportDatumValuationReportAddresses',
        through: ValuationReportDatum,
        foreignKey: 'TitleTenureTypeID',
        otherKey: 'ValuationReportAddressID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportTitleTenureType.belongsToMany(ValuationReportCurrentUseType, {
        as: 'ValuationReportDatumValuationReportCurrentUseTypes',
        through: ValuationReportDatum,
        foreignKey: 'TitleTenureTypeID',
        otherKey: 'ValuationReportCurrentUseTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportTitleTenureType.belongsToMany(ValuationReportPropertyInterestType, {
        as: 'ValuationReportDatumValuationReportPropertyInterestTypes',
        through: ValuationReportDatum,
        foreignKey: 'TitleTenureTypeID',
        otherKey: 'ValuationReportPropertyInterestTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportTitleTenureType.belongsToMany(ValuationReportValuationSubType, {
        as: 'ValuationReportDatumValuationReportValuationSubTypes',
        through: ValuationReportDatum,
        foreignKey: 'TitleTenureTypeID',
        otherKey: 'ValuationReportValuationSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportTitleTenureType.belongsToMany(ValuationReport, {
        as: 'ValuationReportDatumValuationReports',
        through: ValuationReportDatum,
        foreignKey: 'TitleTenureTypeID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
