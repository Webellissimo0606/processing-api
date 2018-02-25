'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsSalutationtype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        ultracsCode: {
            type: DataTypes.STRING(10),
            field: 'UltracsCode',
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        justiceGenderID: {
            type: DataTypes.INTEGER,
            field: 'JusticeGenderID',
            allowNull: true
        },
        showOnRetailWizard: {
            type: DataTypes.BOOLEAN,
            field: 'ShowOnRetailWizard',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_SalutationType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsSalutationtype = model.CrumbsSalutationtype;

};
