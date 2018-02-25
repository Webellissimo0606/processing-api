'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsSupplierpartyroletyperelationship', {
        partyRoleTypeID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleTypeID',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_SupplierPartyRoleTypeRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsSupplierpartyroletyperelationship = model.CrumbsSupplierpartyroletyperelationship;

};
