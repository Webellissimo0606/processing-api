'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartyaddress', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_PartyAddressSequenceView_seq_nextval\"("
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        addressID: {
            type: DataTypes.INTEGER,
            field: 'AddressID',
            allowNull: false
        },
        addressTypeID: {
            type: DataTypes.INTEGER,
            field: 'AddressTypeID',
            allowNull: false
        },
        communicationTypeID: {
            type: DataTypes.INTEGER,
            field: 'CommunicationTypeID',
            allowNull: false
        },
        currencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'CurrencyTypeID',
            allowNull: false
        },
        residencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'ResidencyTypeID',
            allowNull: true
        },
        locationTypeID: {
            type: DataTypes.INTEGER,
            field: 'LocationTypeID',
            allowNull: true
        },
        periodOfOccupancyMonths: {
            type: DataTypes.INTEGER,
            field: 'PeriodOfOccupancyMonths',
            allowNull: true
        },
        periodOfOccupancyYears: {
            type: DataTypes.INTEGER,
            field: 'PeriodOfOccupancyYears',
            allowNull: true
        },
        priority: {
            type: DataTypes.INTEGER,
            field: 'Priority',
            allowNull: true
        },
        optOut: {
            type: DataTypes.BOOLEAN,
            field: 'OptOut',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyAddress',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartyaddress = model.CrumbsPartyaddress;

};
