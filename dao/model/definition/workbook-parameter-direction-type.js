'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookParameterDirectionType', {
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
        },
        readable: {
            type: DataTypes.BOOLEAN,
            field: 'Readable',
            allowNull: false
        },
        writable: {
            type: DataTypes.BOOLEAN,
            field: 'Writable',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookParameterDirectionType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookParameterDirectionType = model.WorkbookParameterDirectionType;
    var WorkbookParameter = model.WorkbookParameter;
    var ServiceabilityValueType = model.ServiceabilityValueType;
    var WorkbookParameterType = model.WorkbookParameterType;
    var Workbook = model.Workbook;

    WorkbookParameterDirectionType.hasMany(WorkbookParameter, {
        as: 'WorkbookParameterWorkbookparameterdirectiontypeFks',
        foreignKey: 'WorkbookParameterDirectionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterDirectionType.belongsToMany(ServiceabilityValueType, {
        as: 'WorkbookParameterServiceabilityValueTypes',
        through: WorkbookParameter,
        foreignKey: 'WorkbookParameterDirectionTypeID',
        otherKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterDirectionType.belongsToMany(WorkbookParameterType, {
        as: 'WorkbookParameterWorkbookParameterTypes',
        through: WorkbookParameter,
        foreignKey: 'WorkbookParameterDirectionTypeID',
        otherKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookParameterDirectionType.belongsToMany(Workbook, {
        as: 'WorkbookParameterWorkbooks',
        through: WorkbookParameter,
        foreignKey: 'WorkbookParameterDirectionTypeID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
