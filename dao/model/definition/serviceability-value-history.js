'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ServiceabilityValueHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        serviceabilityHistoryID: {
            type: DataTypes.INTEGER,
            field: 'ServiceabilityHistoryID',
            allowNull: false,
            references: {
                model: 'ServiceabilityHistory',
                key: 'ID'
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
            type: DataTypes.STRING(256),
            field: 'Value',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ServiceabilityValueHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ServiceabilityValueHistory = model.ServiceabilityValueHistory;
    var ServiceabilityHistory = model.ServiceabilityHistory;
    var ServiceabilityValueType = model.ServiceabilityValueType;

    ServiceabilityValueHistory.belongsTo(ServiceabilityHistory, {
        as: 'ServiceabilityHistory',
        foreignKey: 'ServiceabilityHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueHistory.belongsTo(ServiceabilityValueType, {
        as: 'ServiceabilityValueType',
        foreignKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
