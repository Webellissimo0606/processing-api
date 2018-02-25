'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionTypeConfigurationTraxJobType', {
        conditionTypeConfigurationID: {
            type: DataTypes.INTEGER,
            field: 'ConditionTypeConfigurationID',
            allowNull: false,
            references: {
                model: 'ConditionTypeConfiguration',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        traxJobTypeID: {
            type: DataTypes.INTEGER,
            field: 'TraxJobTypeID',
            allowNull: false
        },
        conditionVerificationStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionVerificationStatusTypeID',
            allowNull: false,
            references: {
                model: 'ConditionVerificationStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ConditionTypeConfigurationTraxJobType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionTypeConfigurationTraxJobType = model.ConditionTypeConfigurationTraxJobType;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionVerificationStatusType = model.ConditionVerificationStatusType;

    ConditionTypeConfigurationTraxJobType.belongsTo(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfiguration',
        foreignKey: 'ConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfigurationTraxJobType.belongsTo(ConditionVerificationStatusType, {
        as: 'ConditionVerificationStatusType',
        foreignKey: 'ConditionVerificationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
