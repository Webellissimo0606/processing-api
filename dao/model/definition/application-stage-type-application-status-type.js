'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStageTypeApplicationStatusType', {
        applicationStageTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationStageTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationStageType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationStatusTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationStageTypeApplicationStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStageTypeApplicationStatusType = model.ApplicationStageTypeApplicationStatusType;
    var ApplicationStageType = model.ApplicationStageType;
    var ApplicationStatusType = model.ApplicationStatusType;

    ApplicationStageTypeApplicationStatusType.belongsTo(ApplicationStageType, {
        as: 'ApplicationStageType',
        foreignKey: 'ApplicationStageTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStageTypeApplicationStatusType.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
