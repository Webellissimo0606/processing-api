'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RiskDescriptionType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        riskTypeID: {
            type: DataTypes.INTEGER,
            field: 'RiskTypeID',
            allowNull: false,
            references: {
                model: 'RiskType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        tableName: 'RiskDescriptionType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RiskDescriptionType = model.RiskDescriptionType;
    var ValuationRisk = model.ValuationRisk;
    var RiskType = model.RiskType;
    var RiskRatingType = model.RiskRatingType;
    var ValuationReport = model.ValuationReport;

    RiskDescriptionType.hasMany(ValuationRisk, {
        as: 'ValuationRiskRiskdescriptiontypeFks',
        foreignKey: 'RiskDescriptionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RiskDescriptionType.belongsTo(RiskType, {
        as: 'RiskType',
        foreignKey: 'RiskTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RiskDescriptionType.belongsToMany(RiskRatingType, {
        as: 'ValuationRiskRiskRatingTypes',
        through: ValuationRisk,
        foreignKey: 'RiskDescriptionTypeID',
        otherKey: 'RiskRatingTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    RiskDescriptionType.belongsToMany(ValuationReport, {
        as: 'ValuationRiskValuationReports',
        through: ValuationRisk,
        foreignKey: 'RiskDescriptionTypeID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
