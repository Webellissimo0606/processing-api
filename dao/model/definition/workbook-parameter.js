'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookParameter', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workbookID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookID',
            allowNull: false,
            references: {
                model: 'Workbook',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        workbookParameterTypeID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookParameterTypeID',
            allowNull: false,
            references: {
                model: 'WorkbookParameterType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        worksheet: {
            type: DataTypes.INTEGER,
            field: 'Worksheet',
            allowNull: false
        },
        cell: {
            type: DataTypes.STRING(10),
            field: 'Cell',
            allowNull: false
        },
        mandatory: {
            type: DataTypes.BOOLEAN,
            field: 'Mandatory',
            allowNull: false
        },
        workbookParameterDirectionTypeID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookParameterDirectionTypeID',
            allowNull: false,
            references: {
                model: 'WorkbookParameterDirectionType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        defaultValue: {
            type: DataTypes.STRING(128),
            field: 'DefaultValue',
            allowNull: true
        },
        commandText: {
            type: DataTypes.STRING(512),
            field: 'CommandText',
            allowNull: true
        },
        serviceabilityValueTypeID: {
            type: DataTypes.INTEGER,
            field: 'ServiceabilityValueTypeID',
            allowNull: true,
            references: {
                model: 'ServiceabilityValueType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookParameter',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookParameter = model.WorkbookParameter;
    var WorkbookParameterRelationship = model.WorkbookParameterRelationship;
    var WorkbookParameterDirectionType = model.WorkbookParameterDirectionType;
    var ServiceabilityValueType = model.ServiceabilityValueType;
    var WorkbookParameterType = model.WorkbookParameterType;
    var Workbook = model.Workbook;
    var WorkbookParameterObjectType = model.WorkbookParameterObjectType;

    WorkbookParameter.hasMany(WorkbookParameterRelationship, {
        as: 'RelationshipIdentifier1workbookparameterFks',
        foreignKey: 'Identifier1WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.hasMany(WorkbookParameterRelationship, {
        as: 'RelationshipIdentifier2workbookparameterFks',
        foreignKey: 'Identifier2WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.hasMany(WorkbookParameterRelationship, {
        as: 'RelationshipResultworkbookparameterFks',
        foreignKey: 'ResultWorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsTo(WorkbookParameterDirectionType, {
        as: 'WorkbookParameterDirectionType',
        foreignKey: 'WorkbookParameterDirectionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsTo(ServiceabilityValueType, {
        as: 'ServiceabilityValueType',
        foreignKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsTo(WorkbookParameterType, {
        as: 'WorkbookParameterType',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsTo(Workbook, {
        as: 'Workbook',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterID',
        otherKey: 'Identifier1WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterID',
        otherKey: 'Identifier2WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterID',
        otherKey: 'Identifier2WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipResultWorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier1WorkbookParameterID',
        otherKey: 'ResultWorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterID',
        otherKey: 'Identifier1WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterID',
        otherKey: 'Identifier1WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterID',
        otherKey: 'Identifier2WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipResultWorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'Identifier2WorkbookParameterID',
        otherKey: 'ResultWorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'ResultWorkbookParameterID',
        otherKey: 'Identifier1WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier1WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'ResultWorkbookParameterID',
        otherKey: 'Identifier1WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameterObjectType, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameterObjectTypes',
        through: WorkbookParameterRelationship,
        foreignKey: 'ResultWorkbookParameterID',
        otherKey: 'Identifier2WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameter.belongsToMany(WorkbookParameter, {
        as: 'WorkbookParameterRelationshipIdentifier2WorkbookParameters',
        through: WorkbookParameterRelationship,
        foreignKey: 'ResultWorkbookParameterID',
        otherKey: 'Identifier2WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
