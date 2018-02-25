'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsState', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        countryID: {
            type: DataTypes.INTEGER,
            field: 'CountryID',
            allowNull: false
        },
        iSOStateCode: {
            type: DataTypes.STRING(15),
            field: 'ISOStateCode',
            allowNull: false
        },
        stateCode: {
            type: DataTypes.STRING(50),
            field: 'StateCode',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
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
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        vedaCode: {
            type: DataTypes.STRING(3),
            field: 'VedaCode',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_State',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsState = model.CrumbsState;

};
