'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationServiceabilityHistoryValue', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationServiceabilityHistoryID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationServiceabilityHistoryID ',
            allowNull: false,
            references: {
                model: 'ApplicationServiceabilityHistory',
                key: 'ID '
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        serviceabilityValueTypeID: {
            type: DataTypes.INTEGER,
            field: 'ServiceabilityValueTypeID',
            allowNull: false,
            references: {
                model: 'ServiceabilityValueType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        value: {
            type: DataTypes.DECIMAL(12, 4),
            field: 'Value',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationServiceabilityHistoryValue',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationServiceabilityHistoryValue = model.ApplicationServiceabilityHistoryValue;
    var ApplicationServiceabilityHistory = model.ApplicationServiceabilityHistory;
    var ServiceabilityValueType = model.ServiceabilityValueType;

    ApplicationServiceabilityHistoryValue.belongsTo(ApplicationServiceabilityHistory, {
        as: 'RelatedApplicationserviceabilityhistoryid ',
        foreignKey: 'ApplicationServiceabilityHistoryID ',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationServiceabilityHistoryValue.belongsTo(ServiceabilityValueType, {
        as: 'ServiceabilityValueType',
        foreignKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
