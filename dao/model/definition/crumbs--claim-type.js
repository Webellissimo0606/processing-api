'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsClaimtype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(512),
            field: 'Name',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_ClaimType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsClaimtype = model.CrumbsClaimtype;

};
