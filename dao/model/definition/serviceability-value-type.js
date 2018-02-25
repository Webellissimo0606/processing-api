'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ServiceabilityValueType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ServiceabilityValueType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ServiceabilityValueType = model.ServiceabilityValueType;
    var ApplicationServiceabilityHistoryValue = model.ApplicationServiceabilityHistoryValue;
    var ServiceabilityValueHistory = model.ServiceabilityValueHistory;
    var WorkbookParameter = model.WorkbookParameter;
    var ApplicationServiceabilityHistory = model.ApplicationServiceabilityHistory;
    var ServiceabilityHistory = model.ServiceabilityHistory;
    var WorkbookParameterDirectionType = model.WorkbookParameterDirectionType;
    var WorkbookParameterType = model.WorkbookParameterType;
    var Workbook = model.Workbook;

    ServiceabilityValueType.hasMany(ApplicationServiceabilityHistoryValue, {
        as: 'ApplicationServiceabilityHistoryValueServiceabilityvaluetypeFs',
        foreignKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueType.hasMany(ServiceabilityValueHistory, {
        as: 'FKServiceabilityvaluehistoryserviceabilityvaluetypes',
        foreignKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueType.hasMany(WorkbookParameter, {
        as: 'WorkbookParameterWorkbookparameterserviceabilityvaluetypeFks',
        foreignKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueType.belongsToMany(ApplicationServiceabilityHistory, {
        as: 'ApplicationServiceabilityHistoryValueApplicationserviceabilityhistoryid s',
        through: ApplicationServiceabilityHistoryValue,
        foreignKey: 'ServiceabilityValueTypeID',
        otherKey: 'ApplicationServiceabilityHistoryID ',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueType.belongsToMany(ServiceabilityHistory, {
        as: 'ServiceabilityValueHistoryServiceabilityHistories',
        through: ServiceabilityValueHistory,
        foreignKey: 'ServiceabilityValueTypeID',
        otherKey: 'ServiceabilityHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueType.belongsToMany(WorkbookParameterDirectionType, {
        as: 'WorkbookParameterWorkbookParameterDirectionTypes',
        through: WorkbookParameter,
        foreignKey: 'ServiceabilityValueTypeID',
        otherKey: 'WorkbookParameterDirectionTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueType.belongsToMany(WorkbookParameterType, {
        as: 'WorkbookParameterWorkbookParameterTypes',
        through: WorkbookParameter,
        foreignKey: 'ServiceabilityValueTypeID',
        otherKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityValueType.belongsToMany(Workbook, {
        as: 'WorkbookParameterWorkbooks',
        through: WorkbookParameter,
        foreignKey: 'ServiceabilityValueTypeID',
        otherKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
