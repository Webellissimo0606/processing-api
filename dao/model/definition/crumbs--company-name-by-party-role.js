'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsCompanynamebypartyrole', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        companyName: {
            type: DataTypes.STRING(150),
            field: 'CompanyName',
            allowNull: true
        },
        preferredName: {
            type: DataTypes.STRING(150),
            field: 'PreferredName',
            allowNull: true
        },
        aCN: {
            type: DataTypes.STRING(15),
            field: 'ACN',
            allowNull: true
        },
        aBN: {
            type: DataTypes.STRING(15),
            field: 'ABN',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_CompanyNameByPartyRole',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsCompanynamebypartyrole = model.CrumbsCompanynamebypartyrole;

};
