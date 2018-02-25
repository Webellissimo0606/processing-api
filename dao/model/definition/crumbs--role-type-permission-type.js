'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsRoletypepermissiontype', {
        roleTypeID: {
            type: DataTypes.INTEGER,
            field: 'RoleTypeID',
            allowNull: false
        },
        permissionTypeID: {
            type: DataTypes.INTEGER,
            field: 'PermissionTypeID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_RoleTypePermissionType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsRoletypepermissiontype = model.CrumbsRoletypepermissiontype;

};
