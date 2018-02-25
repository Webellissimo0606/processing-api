'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportCurrentUseType', {
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
        tableName: 'ValuationReportCurrentUseType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportCurrentUseType = model.ValuationReportCurrentUseType;
    var ValuationReportDatum = model.ValuationReportDatum;
    var ValuationReportAddress = model.ValuationReportAddress;
    var ValuationReportPropertyInterestType = model.ValuationReportPropertyInterestType;
    var ValuationReportTitleTenureType = model.ValuationReportTitleTenureType;
    var ValuationReportValuationSubType = model.ValuationReportValuationSubType;
    var ValuationReport = model.ValuationReport;

    ValuationReportCurrentUseType.hasMany(ValuationReportDatum, {
        as: 'ValuationReportDataValuationreportcurrentusetypeFks',
        foreignKey: 'ValuationReportCurrentUseTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportCurrentUseType.belongsToMany(ValuationReportAddress, {
        as: 'ValuationReportDatumValuationReportAddresses',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportCurrentUseTypeID',
        otherKey: 'ValuationReportAddressID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportCurrentUseType.belongsToMany(ValuationReportPropertyInterestType, {
        as: 'ValuationReportDatumValuationReportPropertyInterestTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportCurrentUseTypeID',
        otherKey: 'ValuationReportPropertyInterestTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportCurrentUseType.belongsToMany(ValuationReportTitleTenureType, {
        as: 'ValuationReportDatumTitleTenureTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportCurrentUseTypeID',
        otherKey: 'TitleTenureTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportCurrentUseType.belongsToMany(ValuationReportValuationSubType, {
        as: 'ValuationReportDatumValuationReportValuationSubTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportCurrentUseTypeID',
        otherKey: 'ValuationReportValuationSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportCurrentUseType.belongsToMany(ValuationReport, {
        as: 'ValuationReportDatumValuationReports',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportCurrentUseTypeID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
