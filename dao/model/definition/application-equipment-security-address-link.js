'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationEquipmentSecurityAddressLink', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: true
        },
        crumbsAddressID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsAddressID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationEquipmentSecurityAddressLink',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationEquipmentSecurityAddressLink = model.ApplicationEquipmentSecurityAddressLink;

};
