'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsAddress', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_AddressSequenceView_seq_nextval\"("
        },
        propertyName: {
            type: DataTypes.STRING(100),
            field: 'PropertyName',
            allowNull: true
        },
        unitNumber: {
            type: DataTypes.STRING(100),
            field: 'UnitNumber',
            allowNull: true
        },
        streetNumber: {
            type: DataTypes.STRING(100),
            field: 'StreetNumber',
            allowNull: true
        },
        pOBox: {
            type: DataTypes.STRING(30),
            field: 'POBox',
            allowNull: true
        },
        streetName: {
            type: DataTypes.STRING(100),
            field: 'StreetName',
            allowNull: true
        },
        streetTypeID: {
            type: DataTypes.INTEGER,
            field: 'StreetTypeID',
            allowNull: true
        },
        suburb: {
            type: DataTypes.STRING(100),
            field: 'Suburb',
            allowNull: false
        },
        stateID: {
            type: DataTypes.INTEGER,
            field: 'StateID',
            allowNull: true
        },
        countryID: {
            type: DataTypes.INTEGER,
            field: 'CountryID',
            allowNull: false
        },
        postCode: {
            type: DataTypes.STRING(10),
            field: 'PostCode',
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
            allowNull: true
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: true
        },
        streetTypeText: {
            type: DataTypes.STRING(50),
            field: 'StreetTypeText',
            allowNull: true
        },
        stateText: {
            type: DataTypes.STRING(50),
            field: 'StateText',
            allowNull: true
        },
        addressText: {
            type: DataTypes.STRING(500),
            field: 'AddressText',
            allowNull: true
        },
        rPDataPropertyID: {
            type: DataTypes.INTEGER,
            field: 'RPDataPropertyID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        retailID: {
            type: DataTypes.INTEGER,
            field: 'RetailID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Address',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsAddress = model.CrumbsAddress;

};
