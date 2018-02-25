'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionTypeConfigurationRelationship', {
        parentConditionTypeConfigurationID: {
            type: DataTypes.INTEGER,
            field: 'ParentConditionTypeConfigurationID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ConditionTypeConfiguration',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        childConditionTypeConfigurationID: {
            type: DataTypes.INTEGER,
            field: 'ChildConditionTypeConfigurationID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ConditionTypeConfiguration',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        conditionTypeRelationshipTypeID: {
            type: DataTypes.INTEGER,
            field: 'ConditionTypeRelationshipTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ConditionTypeRelationshipType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ConditionTypeConfigurationRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionTypeConfigurationRelationship = model.ConditionTypeConfigurationRelationship;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;
    var ConditionTypeRelationshipType = model.ConditionTypeRelationshipType;

    ConditionTypeConfigurationRelationship.belongsTo(ConditionTypeConfiguration, {
        as: 'ChildConditionTypeConfiguration',
        foreignKey: 'ChildConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfigurationRelationship.belongsTo(ConditionTypeRelationshipType, {
        as: 'ConditionTypeRelationshipType',
        foreignKey: 'ConditionTypeRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeConfigurationRelationship.belongsTo(ConditionTypeConfiguration, {
        as: 'ParentConditionTypeConfiguration',
        foreignKey: 'ParentConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
