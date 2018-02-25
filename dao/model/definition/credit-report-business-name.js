'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportBusinessName', {
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
        startDate: {
            type: DataTypes.DATEONLY,
            field: 'StartDate',
            allowNull: true
        },
        businessBureauReference: {
            type: DataTypes.STRING(100),
            field: 'BusinessBureauReference',
            allowNull: true
        },
        businessName: {
            type: DataTypes.STRING(200),
            field: 'BusinessName',
            allowNull: true
        },
        registrationState: {
            type: DataTypes.STRING(50),
            field: 'RegistrationState',
            allowNull: true
        },
        registrationNumber: {
            type: DataTypes.STRING(20),
            field: 'RegistrationNumber',
            allowNull: true
        },
        aBN: {
            type: DataTypes.STRING(20),
            field: 'ABN',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportBusinessName',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportBusinessName = model.CreditReportBusinessName;
    var CreditReport = model.CreditReport;

    CreditReportBusinessName.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
