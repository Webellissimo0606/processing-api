'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RiskRatingType', {
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
        value: {
            type: DataTypes.INTEGER,
            field: 'Value',
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
        tableName: 'RiskRatingType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RiskRatingType = model.RiskRatingType;
    var ValuationRisk = model.ValuationRisk;
    var RiskDescriptionType = model.RiskDescriptionType;
    var ValuationReport = model.ValuationReport;

    RiskRatingType.hasMany(ValuationRisk, {
        as: 'ValuationRiskRiskratingtypeFks',
        foreignKey: 'RiskRatingTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RiskRatingType.belongsToMany(RiskDescriptionType, {
        as: 'ValuationRiskRiskDescriptionTypes',
        through: ValuationRisk,
        foreignKey: 'RiskRatingTypeID',
        otherKey: 'RiskDescriptionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RiskRatingType.belongsToMany(ValuationReport, {
        as: 'ValuationRiskValuationReports',
        through: ValuationRisk,
        foreignKey: 'RiskRatingTypeID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
