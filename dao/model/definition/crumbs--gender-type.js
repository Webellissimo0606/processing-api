'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsGendertype', {
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
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        vedaCode: {
            type: DataTypes.STRING(10),
            field: 'VedaCode',
            allowNull: true
        },
        vedaReturnCode: {
            type: DataTypes.STRING(50),
            field: 'VedaReturnCode',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        ultracsCode: {
            type: DataTypes.STRING(10),
            field: 'UltracsCode',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_GenderType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsGendertype = model.CrumbsGendertype;

};
