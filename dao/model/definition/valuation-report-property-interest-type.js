'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportPropertyInterestType', {
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
        tableName: 'ValuationReportPropertyInterestType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportPropertyInterestType = model.ValuationReportPropertyInterestType;
    var ValuationReportDatum = model.ValuationReportDatum;
    var ValuationReportAddress = model.ValuationReportAddress;
    var ValuationReportCurrentUseType = model.ValuationReportCurrentUseType;
    var ValuationReportTitleTenureType = model.ValuationReportTitleTenureType;
    var ValuationReportValuationSubType = model.ValuationReportValuationSubType;
    var ValuationReport = model.ValuationReport;

    ValuationReportPropertyInterestType.hasMany(ValuationReportDatum, {
        as: 'ValuationReportDataValuationreportpropertyinteresttypeFks',
        foreignKey: 'ValuationReportPropertyInterestTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportPropertyInterestType.belongsToMany(ValuationReportAddress, {
        as: 'ValuationReportDatumValuationReportAddresses',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportPropertyInterestTypeID',
        otherKey: 'ValuationReportAddressID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportPropertyInterestType.belongsToMany(ValuationReportCurrentUseType, {
        as: 'ValuationReportDatumValuationReportCurrentUseTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportPropertyInterestTypeID',
        otherKey: 'ValuationReportCurrentUseTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportPropertyInterestType.belongsToMany(ValuationReportTitleTenureType, {
        as: 'ValuationReportDatumTitleTenureTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportPropertyInterestTypeID',
        otherKey: 'TitleTenureTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportPropertyInterestType.belongsToMany(ValuationReportValuationSubType, {
        as: 'ValuationReportDatumValuationReportValuationSubTypes',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportPropertyInterestTypeID',
        otherKey: 'ValuationReportValuationSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportPropertyInterestType.belongsToMany(ValuationReport, {
        as: 'ValuationReportDatumValuationReports',
        through: ValuationReportDatum,
        foreignKey: 'ValuationReportPropertyInterestTypeID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
