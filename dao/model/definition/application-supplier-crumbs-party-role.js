'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationSupplierCrumbsPartyRole', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: true
        },
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: true
        },
        crumbsSupplierPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsSupplierPartyRoleID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationSupplierCrumbsPartyRole',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationSupplierCrumbsPartyRole = model.ApplicationSupplierCrumbsPartyRole;

};
