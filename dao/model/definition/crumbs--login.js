'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsLogin', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        username: {
            type: DataTypes.STRING(100),
            field: 'Username',
            allowNull: false
        },
        password: {
            type: DataTypes.BLOB,
            field: 'Password',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        locked: {
            type: DataTypes.BOOLEAN,
            field: 'Locked',
            allowNull: false
        },
        expired: {
            type: DataTypes.DATE,
            field: 'Expired',
            allowNull: true
        },
        siteTypeID: {
            type: DataTypes.INTEGER,
            field: 'SiteTypeID',
            allowNull: true
        },
        objectSID: {
            type: DataTypes.STRING(100),
            field: 'ObjectSID',
            allowNull: true
        },
        decommissioned: {
            type: DataTypes.BOOLEAN,
            field: 'Decommissioned',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Login',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsLogin = model.CrumbsLogin;

};
