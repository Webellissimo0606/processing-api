'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationGrantor', {
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
        grantorType: {
            type: DataTypes.STRING(20),
            field: 'GrantorType',
            allowNull: true
        },
        familyName: {
            type: DataTypes.STRING(200),
            field: 'FamilyName',
            allowNull: true
        },
        givenNames: {
            type: DataTypes.STRING(200),
            field: 'GivenNames',
            allowNull: true
        },
        organisationName: {
            type: DataTypes.STRING(200),
            field: 'OrganisationName',
            allowNull: true
        },
        organisationNumberType: {
            type: DataTypes.STRING(50),
            field: 'OrganisationNumberType',
            allowNull: true
        },
        organisationNumber: {
            type: DataTypes.STRING(20),
            field: 'OrganisationNumber',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRRegistrationGrantors',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationGrantor = model.TradingHistoryPPSRRegistrationGrantor;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationGrantor.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
