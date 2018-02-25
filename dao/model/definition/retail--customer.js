'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('RetailCustomer', {
        customerID: {
            type: DataTypes.INTEGER,
            field: 'CustomerID',
            allowNull: false
        },
        optOut: {
            type: DataTypes.BOOLEAN,
            field: 'OptOut',
            allowNull: true
        },
        vedaResult: {
            type: DataTypes.STRING(50),
            field: 'VedaResult',
            allowNull: true
        },
        vedaID: {
            type: DataTypes.STRING(50),
            field: 'VedaID',
            allowNull: true
        },
        ultracsClientID: {
            type: DataTypes.BIGINT,
            field: 'UltracsClientID',
            allowNull: true
        },
        rowStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'RowStatusTypeID',
            allowNull: true
        },
        identifier: {
            type: DataTypes.UUID,
            field: 'Identifier',
            allowNull: true
        },
        bestTimeToCallTypeID: {
            type: DataTypes.INTEGER,
            field: 'BestTimeToCallTypeID',
            allowNull: true
        },
        existingCustomer: {
            type: DataTypes.BOOLEAN,
            field: 'ExistingCustomer',
            allowNull: true
        },
        crumbsPartyID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsPartyID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'retail_Customer',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var RetailCustomer = model.RetailCustomer;

};
