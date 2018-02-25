'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailLeadcustomerrelationship', {
        leadID: {
            type: DataTypes.INTEGER,
            field: 'LeadID',
            allowNull: false
        },
        customerID: {
            type: DataTypes.INTEGER,
            field: 'CustomerID',
            allowNull: false
        },
        rowStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'RowStatusTypeID',
            allowNull: false
        },
        customerNumber: {
            type: DataTypes.INTEGER,
            field: 'CustomerNumber',
            allowNull: false
        },
        crumbsLoginID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsLoginID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'retail_LeadCustomerRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailLeadcustomerrelationship = model.RetailLeadcustomerrelationship;

};
