'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsCountry', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        iSOCountryCode: {
            type: DataTypes.STRING(50),
            field: 'ISOCountryCode',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: false
        },
        internationalDiallingCode: {
            type: DataTypes.STRING(4),
            field: 'InternationalDiallingCode',
            allowNull: true
        },
        rPDataCode: {
            type: DataTypes.STRING(10),
            field: 'RPDataCode',
            allowNull: true
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        retailID: {
            type: DataTypes.INTEGER,
            field: 'RetailID',
            allowNull: true
        },
        vedaCode: {
            type: DataTypes.STRING(3),
            field: 'VedaCode',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Country',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsCountry = model.CrumbsCountry;

};
