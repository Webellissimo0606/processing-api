'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ServiceabilityHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        workbookID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookID',
            allowNull: true,
            references: {
                model: 'Workbook',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        executed: {
            type: DataTypes.DATE,
            field: 'Executed',
            allowNull: false
        },
        executedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ExecutedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ServiceabilityHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ServiceabilityHistory = model.ServiceabilityHistory;
    var ServiceabilityValueHistory = model.ServiceabilityValueHistory;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var Workbook = model.Workbook;
    var ServiceabilityValueType = model.ServiceabilityValueType;

    ServiceabilityHistory.hasMany(ServiceabilityValueHistory, {
        as: 'FKServiceabilityvaluehistoryserviceabilityhistories',
        foreignKey: 'ServiceabilityHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityHistory.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityHistory.belongsTo(PartyRole, {
        as: 'ExecutedByPartyRole',
        foreignKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityHistory.belongsTo(Workbook, {
        as: 'Workbook',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityHistory.belongsToMany(ServiceabilityValueType, {
        as: 'ServiceabilityValueHistoryServiceabilityValueTypes',
        through: ServiceabilityValueHistory,
        foreignKey: 'ServiceabilityHistoryID',
        otherKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
