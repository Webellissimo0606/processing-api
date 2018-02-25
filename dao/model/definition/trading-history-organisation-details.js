'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryOrganisationDetail', {
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
        aBNCode: {
            type: DataTypes.STRING(20),
            field: 'ABNCode',
            allowNull: true
        },
        aBNStatusCode: {
            type: DataTypes.STRING(20),
            field: 'ABNStatusCode',
            allowNull: true
        },
        aBNStatusFromDate: {
            type: DataTypes.DATEONLY,
            field: 'ABNStatusFromDate',
            allowNull: true
        },
        entityTypeDescription: {
            type: DataTypes.STRING(200),
            field: 'EntityTypeDescription',
            allowNull: true
        },
        mainLegalName: {
            type: DataTypes.STRING(200),
            field: 'MainLegalName',
            allowNull: true
        },
        businessAddressStateCode: {
            type: DataTypes.STRING(20),
            field: 'BusinessAddressStateCode',
            allowNull: true
        },
        businessAddressPostCode: {
            type: DataTypes.STRING(20),
            field: 'BusinessAddressPostCode',
            allowNull: true
        },
        gSTStatusCode: {
            type: DataTypes.STRING(20),
            field: 'GSTStatusCode',
            allowNull: true
        },
        gSTStatusFromDate: {
            type: DataTypes.DATEONLY,
            field: 'GSTStatusFromDate',
            allowNull: true
        },
        aSICNumberCode: {
            type: DataTypes.STRING(20),
            field: 'ASICNumberCode',
            allowNull: true
        },
        aBRLastUpdatedDate: {
            type: DataTypes.DATEONLY,
            field: 'ABRLastUpdatedDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryOrganisationDetails',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryOrganisationDetail = model.TradingHistoryOrganisationDetail;
    var CreditReport = model.CreditReport;

    TradingHistoryOrganisationDetail.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
