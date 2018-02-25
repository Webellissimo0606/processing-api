'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationLVR', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        lVR: {
            type: DataTypes.DECIMAL(12, 4),
            field: 'LVR',
            allowNull: true
        },
        currentStatus: {
            type: DataTypes.STRING(200),
            field: 'CurrentStatus',
            allowNull: true
        },
        estimatedLVR: {
            type: DataTypes.DECIMAL(12, 4),
            field: 'EstimatedLVR',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationLVR',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationLVR = model.ApplicationLVR;
    var ApplicationContainer = model.ApplicationContainer;

    ApplicationLVR.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
