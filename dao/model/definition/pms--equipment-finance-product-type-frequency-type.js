'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsEquipmentfinanceproducttypefrequencytype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: true
        },
        equipmentFinanceProductTypeID: {
            type: DataTypes.INTEGER,
            field: 'EquipmentFinanceProductTypeID',
            allowNull: true
        },
        frequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FrequencyTypeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'pms_EquipmentFinanceProductTypeFrequencyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsEquipmentfinanceproducttypefrequencytype = model.PmsEquipmentfinanceproducttypefrequencytype;

};
