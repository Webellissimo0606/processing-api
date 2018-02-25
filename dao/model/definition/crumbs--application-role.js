'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsApplicationrole', {
        applicationTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationTypeID',
            allowNull: false
        },
        loginID: {
            type: DataTypes.INTEGER,
            field: 'LoginID',
            allowNull: false
        },
        roleTypeID: {
            type: DataTypes.INTEGER,
            field: 'RoleTypeID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_ApplicationRole',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsApplicationrole = model.CrumbsApplicationrole;

};
