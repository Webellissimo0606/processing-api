'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationReportRelatedPartyType', {
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
        tableName: 'ValuationReportRelatedPartyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationReportRelatedPartyType = model.ValuationReportRelatedPartyType;
    var ValuationReportRelatedPartyRelationship = model.ValuationReportRelatedPartyRelationship;
    var ValuationReport = model.ValuationReport;

    ValuationReportRelatedPartyType.hasMany(ValuationReportRelatedPartyRelationship, {
        as: 'ValuationReportRelatedPartyRelationshipRelatedpartytypeFks',
        foreignKey: 'RelatedPartyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationReportRelatedPartyType.belongsToMany(ValuationReport, {
        as: 'ValuationReportRelatedPartyRelationshipValuationReports',
        through: ValuationReportRelatedPartyRelationship,
        foreignKey: 'RelatedPartyTypeID',
        otherKey: 'ValuationReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
