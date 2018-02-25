'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookParameterRelationship', {
        identifier1WorkbookParameterID: {
            type: DataTypes.INTEGER,
            field: 'Identifier1WorkbookParameterID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'WorkbookParameter',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        identifier2WorkbookParameterID: {
            type: DataTypes.INTEGER,
            field: 'Identifier2WorkbookParameterID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'WorkbookParameter',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        resultWorkbookParameterID: {
            type: DataTypes.INTEGER,
            field: 'ResultWorkbookParameterID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'WorkbookParameter',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        identifier1WorkbookParameterObjectTypeID: {
            type: DataTypes.INTEGER,
            field: 'Identifier1WorkbookParameterObjectTypeID',
            allowNull: true,
            references: {
                model: 'WorkbookParameterObjectType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        identifier2WorkbookParameterObjectTypeID: {
            type: DataTypes.INTEGER,
            field: 'Identifier2WorkbookParameterObjectTypeID',
            allowNull: true,
            references: {
                model: 'WorkbookParameterObjectType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookParameterRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookParameterRelationship = model.WorkbookParameterRelationship;
    var WorkbookParameterObjectType = model.WorkbookParameterObjectType;
    var WorkbookParameter = model.WorkbookParameter;

    WorkbookParameterRelationship.belongsTo(WorkbookParameterObjectType, {
        as: 'Identifier1WorkbookParameterObjectType',
        foreignKey: 'Identifier1WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterRelationship.belongsTo(WorkbookParameter, {
        as: 'Identifier1WorkbookParameter',
        foreignKey: 'Identifier1WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterRelationship.belongsTo(WorkbookParameterObjectType, {
        as: 'Identifier2WorkbookParameterObjectType',
        foreignKey: 'Identifier2WorkbookParameterObjectTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterRelationship.belongsTo(WorkbookParameter, {
        as: 'Identifier2WorkbookParameter',
        foreignKey: 'Identifier2WorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterRelationship.belongsTo(WorkbookParameter, {
        as: 'ResultWorkbookParameter',
        foreignKey: 'ResultWorkbookParameterID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
