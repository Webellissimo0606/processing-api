'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportDefault', {
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
        iDIndex: {
            type: DataTypes.STRING(10),
            field: 'IDIndex',
            allowNull: true
        },
        statusCode: {
            type: DataTypes.STRING(10),
            field: 'StatusCode',
            allowNull: true
        },
        status: {
            type: DataTypes.STRING(50),
            field: 'Status',
            allowNull: true
        },
        statusDate: {
            type: DataTypes.DATEONLY,
            field: 'StatusDate',
            allowNull: true
        },
        originalDefaultDateRecorded: {
            type: DataTypes.DATEONLY,
            field: 'OriginalDefaultDateRecorded',
            allowNull: true
        },
        originalDefaultAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'OriginalDefaultAmount',
            allowNull: true
        },
        originalDefaultReasonToReportCode: {
            type: DataTypes.STRING(10),
            field: 'OriginalDefaultReasonToReportCode',
            allowNull: true
        },
        originalDefaultReasonToReport: {
            type: DataTypes.STRING(50),
            field: 'OriginalDefaultReasonToReport',
            allowNull: true
        },
        currentDefaultDateRecorded: {
            type: DataTypes.DATEONLY,
            field: 'CurrentDefaultDateRecorded',
            allowNull: true
        },
        currentDefaultAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'CurrentDefaultAmount',
            allowNull: true
        },
        currentDefaultReasonToReportCode: {
            type: DataTypes.STRING(10),
            field: 'CurrentDefaultReasonToReportCode',
            allowNull: true
        },
        currentDefaultReasonToReport: {
            type: DataTypes.STRING(50),
            field: 'CurrentDefaultReasonToReport',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportDefault',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportDefault = model.CreditReportDefault;
    var CreditReport = model.CreditReport;

    CreditReportDefault.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
