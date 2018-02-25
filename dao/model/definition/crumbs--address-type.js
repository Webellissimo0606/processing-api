'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsAddresstype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: true
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        },
        vedaCode: {
            type: DataTypes.STRING(20),
            field: 'VedaCode',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_AddressType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsAddresstype = model.CrumbsAddresstype;

};
