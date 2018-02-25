'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationRisk', {
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
        riskRatingTypeID: {
            type: DataTypes.INTEGER,
            field: 'RiskRatingTypeID',
            allowNull: false,
            references: {
                model: 'RiskRatingType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        riskDescriptionTypeID: {
            type: DataTypes.INTEGER,
            field: 'RiskDescriptionTypeID',
            allowNull: false,
            references: {
                model: 'RiskDescriptionType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        },
        comment: {
            type: DataTypes.STRING(5000),
            field: 'Comment',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ValuationRisk',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationRisk = model.ValuationRisk;
    var RiskDescriptionType = model.RiskDescriptionType;
    var RiskRatingType = model.RiskRatingType;
    var ValuationReport = model.ValuationReport;

    ValuationRisk.belongsTo(RiskDescriptionType, {
        as: 'RiskDescriptionType',
        foreignKey: 'RiskDescriptionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationRisk.belongsTo(RiskRatingType, {
        as: 'RiskRatingType',
        foreignKey: 'RiskRatingTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationRisk.belongsTo(ValuationReport, {
        as: 'ValuationReport',
        foreignKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
