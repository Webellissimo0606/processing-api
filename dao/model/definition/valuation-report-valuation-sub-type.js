'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportValuationSubType', {
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
        tableName: 'ValuationReportValuationSubType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportValuationSubType = model.ValuationReportValuationSubType;
    var ValuationReportDatum = model.ValuationReportDatum;
    var ValuationReportAddress = model.ValuationReportAddress;
    var ValuationReportCurrentUseType = model.ValuationReportCurrentUseType;
    var ValuationReportPropertyInterestType = model.ValuationReportPropertyInterestType;
    var ValuationReportTitleTenureType = model.ValuationReportTitleTenureType;
    var ValuationReport = model.ValuationReport;

    ValuationReportValuationSubType.hasMany(ValuationReportDatum, {
        as: 'ValuationReportDataValuationreportvaluationsubtypeFks',
        foreignKey: 'ValuationReportValuationSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportValuationSubType.belongsToMany(ValuationReportAddress, {
        as: 'ValuationReportDatumValuationReportAddresses',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportValuationSubTypeID',
        otherKey: 'ValuationReportAddressID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportValuationSubType.belongsToMany(ValuationReportCurrentUseType, {
        as: 'ValuationReportDatumValuationReportCurrentUseTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportValuationSubTypeID',
        otherKey: 'ValuationReportCurrentUseTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportValuationSubType.belongsToMany(ValuationReportPropertyInterestType, {
        as: 'ValuationReportDatumValuationReportPropertyInterestTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportValuationSubTypeID',
        otherKey: 'ValuationReportPropertyInterestTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportValuationSubType.belongsToMany(ValuationReportTitleTenureType, {
        as: 'ValuationReportDatumTitleTenureTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportValuationSubTypeID',
        otherKey: 'TitleTenureTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportValuationSubType.belongsToMany(ValuationReport, {
        as: 'ValuationReportDatumValuationReports',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportValuationSubTypeID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
