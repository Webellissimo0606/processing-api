'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookParameterObjectType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookParameterObjectType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookParameterObjectType = model.WorkbookParameterObjectType;
    var WorkbookParameterRelationship = model.WorkbookParameterRelationship;
    var WorkbookParameter = model.WorkbookParameter;

    WorkbookParameterObjectType.hasMany(WorkbookParameterRelationship, {
        as: 'WorkbookParameterRelationshipIdentifier1workbookparameterobjecs',
        foreignKey: 'Identifier1WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.hasMany(WorkbookParameterRelationship, {
        as: 'WorkbookParameterRelationshipIdentifier2workbookparameterobjecs',
        foreignKey: 'Identifier2WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterObjectTypeID',
        otherKey: 'Identifier1WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterObjectTypeID',
        otherKey: 'Identifier2WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterObjectTypeID',
        otherKey: 'Identifier2WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipResultWorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterObjectTypeID',
        otherKey: 'ResultWorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterObjectTypeID',
        otherKey: 'Identifier1WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterObjectTypeID',
        otherKey: 'Identifier1WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterObjectTypeID',
        otherKey: 'Identifier2WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterObjectType.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipResultWorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterObjectTypeID',
        otherKey: 'ResultWorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
