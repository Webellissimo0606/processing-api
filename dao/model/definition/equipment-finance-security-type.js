'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EquipmentFinanceSecurityType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        pMSID: {
            type: DataTypes.INTEGER,
            field: 'PMSID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'EquipmentFinanceSecurityType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EquipmentFinanceSecurityType = model.EquipmentFinanceSecurityType;

};
