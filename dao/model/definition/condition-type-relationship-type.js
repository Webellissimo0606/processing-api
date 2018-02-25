'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ConditionTypeRelationshipType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            field: 'Name',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ConditionTypeRelationshipType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ConditionTypeRelationshipType = model.ConditionTypeRelationshipType;
    var ConditionTypeConfigurationRelationship = model.ConditionTypeConfigurationRelationship;
    var ConditionTypeConfiguration = model.ConditionTypeConfiguration;

    ConditionTypeRelationshipType.hasMany(ConditionTypeConfigurationRelationship, {
        as: 'ConditionTypeRelationshipTypeIDs',
        foreignKey: 'ConditionTypeRelationshipTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeRelationshipType.belongsToMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationRelationshipChildConditionTypeConfigurations',
        through: ConditionTypeConfigurationRelationship,
        foreignKey: 'ConditionTypeRelationshipTypeID',
        otherKey: 'ChildConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ConditionTypeRelationshipType.belongsToMany(ConditionTypeConfiguration, {
        as: 'ConditionTypeConfigurationRelationshipParentConditionTypeConfigurations',
        through: ConditionTypeConfigurationRelationship,
        foreignKey: 'ConditionTypeRelationshipTypeID',
        otherKey: 'ParentConditionTypeConfigurationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
