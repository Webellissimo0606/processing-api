'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportSummaryDatum', {
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
        dataBlockType: {
            type: DataTypes.STRING(50),
            field: 'DataBlockType',
            allowNull: true
        },
        dataBlockName: {
            type: DataTypes.STRING(50),
            field: 'DataBlockName',
            allowNull: true
        },
        characteristicID: {
            type: DataTypes.STRING(20),
            field: 'CharacteristicID',
            allowNull: true
        },
        keyCharacteristic: {
            type: DataTypes.BOOLEAN,
            field: 'KeyCharacteristic',
            allowNull: true
        },
        variableName: {
            type: DataTypes.STRING(50),
            field: 'VariableName',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(150),
            field: 'Description',
            allowNull: true
        },
        value: {
            type: DataTypes.STRING(50),
            field: 'Value',
            allowNull: true
        },
        valueUnitOfMeasure: {
            type: DataTypes.STRING(20),
            field: 'ValueUnitOfMeasure',
            allowNull: true
        },
        dataLevelCode: {
            type: DataTypes.STRING(10),
            field: 'DataLevelCode',
            allowNull: true
        },
        dataLevel: {
            type: DataTypes.STRING(20),
            field: 'DataLevel',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportSummaryData',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportSummaryDatum = model.CreditReportSummaryDatum;
    var CreditReport = model.CreditReport;

    CreditReportSummaryDatum.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
