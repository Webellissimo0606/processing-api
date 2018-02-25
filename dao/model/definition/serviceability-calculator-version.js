'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ServiceabilityCalculatorVersion', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        effective: {
            type: DataTypes.DATE,
            field: 'Effective',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ServiceabilityCalculatorVersion',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ServiceabilityCalculatorVersion = model.ServiceabilityCalculatorVersion;
    var ApplicationServiceabilityHistory = model.ApplicationServiceabilityHistory;
    var PartyRole = model.PartyRole;
    var ApplicationContainer = model.ApplicationContainer;

    ServiceabilityCalculatorVersion.hasMany(ApplicationServiceabilityHistory, {
        as: 'ApplicationServiceabilityHistoryServiceabilitycalculatorversios',
        foreignKey: 'ServiceabilityCalculatorVersionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityCalculatorVersion.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityCalculatorVersion.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityCalculatorVersion.belongsTo(PartyRole, {
        as: 'PartyRole',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityCalculatorVersion.belongsToMany(ApplicationContainer, {
        as: 'ApplicationServiceabilityHistoryApplicationContainers',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ServiceabilityCalculatorVersionID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityCalculatorVersion.belongsToMany(PartyRole, {
        as: 'ApplicationServiceabilityHistoryExecutedByPartyRoles',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ServiceabilityCalculatorVersionID',
        otherKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ServiceabilityCalculatorVersion.belongsToMany(PartyRole, {
        as: 'ApplicationServiceabilityHistoryPartyRoles',
        through: ApplicationServiceabilityHistory,
        foreignKey: 'ServiceabilityCalculatorVersionID',
        otherKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
