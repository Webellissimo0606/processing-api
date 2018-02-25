'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationElementSecuredParty', {
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
        registrationNumber: {
            type: DataTypes.STRING(50),
            field: 'RegistrationNumber',
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
        tableName: 'TradingHistoryPPSRRegistrationElementSecuredParties',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationElementSecuredParty = model.TradingHistoryPPSRRegistrationElementSecuredParty;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationElementSecuredParty.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
