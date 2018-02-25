'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionTypeConfigurationApplicationStatusType', {
        conditionTypeConfigurationID: {
            type: DataTypes.INTEGER,
            field: 'ConditionTypeConfigurationID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ConditionTypeConfiguration',
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
        tableName: 'ConditionTypeConfigurationApplicationStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionTypeConfigurationApplicationStatusType = model.ConditionTypeConfigurationApplicationStatusType;
    var ApplicationStatusType = model.ApplicationStatusType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;

    ConditionTypeConfigurationApplicationStatusType.belongsTo(ApplicationStatusType, {
        as: 'ApplicationStatusType',
        foreignKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfigurationApplicationStatusType.belongsTo(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfiguration',
        foreignKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
