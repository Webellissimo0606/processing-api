'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsFirstmaccreditscoretype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(500),
            field: 'Name',
            allowNull: false
        },
        treasuryKey: {
            type: DataTypes.STRING(100),
            field: 'TreasuryKey',
            allowNull: false
        },
        displayName: {
            type: DataTypes.STRING(100),
            field: 'DisplayName',
            allowNull: false
        },
        v8ProductCategoryID: {
            type: DataTypes.INTEGER,
            field: 'V8ProductCategoryID',
            allowNull: true
        },
        v8SubProductCategoryID: {
            type: DataTypes.INTEGER,
            field: 'V8SubProductCategoryID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_FirstmacCreditScoreType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsFirstmaccreditscoretype = model.CrumbsFirstmaccreditscoretype;

};
