'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryDirectorCrossReference', {
        creditReportID: {
            type: DataTypes.INTEGER,
            field: 'CreditReportID',
            allowNull: false,
            references: {
                model: 'CreditReport',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        parentBureauReference: {
            type: DataTypes.STRING(20),
            field: 'ParentBureauReference',
            allowNull: true
        },
        bureauReference: {
            type: DataTypes.STRING(20),
            field: 'BureauReference',
            allowNull: true
        },
        fileCreationDate: {
            type: DataTypes.DATEONLY,
            field: 'FileCreationDate',
            allowNull: true
        },
        familyName: {
            type: DataTypes.STRING(200),
            field: 'FamilyName',
            allowNull: true
        },
        firstGivenName: {
            type: DataTypes.STRING(200),
            field: 'FirstGivenName',
            allowNull: true
        },
        otherGivenName: {
            type: DataTypes.STRING(200),
            field: 'OtherGivenName',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryDirectorCrossReferences',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryDirectorCrossReference = model.TradingHistoryDirectorCrossReference;
    var CreditReport = model.CreditReport;

    TradingHistoryDirectorCrossReference.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
