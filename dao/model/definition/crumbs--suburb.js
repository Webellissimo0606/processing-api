'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsSuburb', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        },
        postCode: {
            type: DataTypes.STRING(10),
            field: 'PostCode',
            allowNull: false
        },
        stateID: {
            type: DataTypes.INTEGER,
            field: 'StateID',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        suburbText: {
            type: DataTypes.STRING(150),
            field: 'SuburbText',
            allowNull: true
        },
        excludedForNonPOBoxSearch: {
            type: DataTypes.BOOLEAN,
            field: 'ExcludedForNonPOBoxSearch',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Suburb',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsSuburb = model.CrumbsSuburb;

};
