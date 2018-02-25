'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportDisqualifiedDirectorship', {
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
        lastExtractDate: {
            type: DataTypes.DATEONLY,
            field: 'LastExtractDate',
            allowNull: true
        },
        lastExtractTime: {
            type: DataTypes.STRING(50),
            field: 'LastExtractTime',
            allowNull: true
        },
        lastUpdateDate: {
            type: DataTypes.DATEONLY,
            field: 'LastUpdateDate',
            allowNull: true
        },
        lastUpdateTime: {
            type: DataTypes.STRING(50),
            field: 'LastUpdateTime',
            allowNull: true
        },
        dateDisqualified: {
            type: DataTypes.DATEONLY,
            field: 'DateDisqualified',
            allowNull: true
        },
        dateDisqualifiedUntil: {
            type: DataTypes.DATEONLY,
            field: 'DateDisqualifiedUntil',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportDisqualifiedDirectorship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportDisqualifiedDirectorship = model.CreditReportDisqualifiedDirectorship;
    var CreditReport = model.CreditReport;

    CreditReportDisqualifiedDirectorship.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
