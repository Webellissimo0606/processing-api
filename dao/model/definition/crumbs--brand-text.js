'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsBrandtext', {
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: false
        },
        brandTypeID: {
            type: DataTypes.INTEGER,
            field: 'BrandTypeID',
            allowNull: true
        },
        currencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'CurrencyTypeID',
            allowNull: true
        },
        documentLocationTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentLocationTypeID',
            allowNull: true
        },
        alignmentTypeID: {
            type: DataTypes.INTEGER,
            field: 'AlignmentTypeID',
            allowNull: true
        },
        text: {
            type: DataTypes.TEXT,
            field: 'Text',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_BrandText',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsBrandtext = model.CrumbsBrandtext;

};
