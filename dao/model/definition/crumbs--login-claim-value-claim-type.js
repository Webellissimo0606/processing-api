'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsLoginclaimvalueclaimtype', {
        loginID: {
            type: DataTypes.INTEGER,
            field: 'LoginID',
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(100),
            field: 'Username',
            allowNull: false
        },
        value: {
            type: DataTypes.STRING(256),
            field: 'Value',
            allowNull: false
        },
        claimTypeID: {
            type: DataTypes.INTEGER,
            field: 'ClaimTypeID',
            allowNull: false
        },
        claimTypeName: {
            type: DataTypes.STRING(512),
            field: 'ClaimTypeName',
            allowNull: false
        },
        loginActive: {
            type: DataTypes.BOOLEAN,
            field: 'LoginActive',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_LoginClaimValueClaimType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsLoginclaimvalueclaimtype = model.CrumbsLoginclaimvalueclaimtype;

};
