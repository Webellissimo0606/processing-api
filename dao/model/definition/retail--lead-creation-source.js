'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailLeadcreationsource', {
        leadCreationSourceID: {
            type: DataTypes.INTEGER,
            field: 'LeadCreationSourceID',
            allowNull: false
        },
        leadCreationSourceName: {
            type: DataTypes.STRING(200),
            field: 'LeadCreationSourceName',
            allowNull: false
        },
        rowStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'RowStatusTypeID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'retail_LeadCreationSource',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailLeadcreationsource = model.RetailLeadcreationsource;

};
