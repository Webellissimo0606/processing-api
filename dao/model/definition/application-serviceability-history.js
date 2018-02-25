'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationServiceabilityHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID ',
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
        executedDate: {
            type: DataTypes.DATE,
            field: 'ExecutedDate',
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
        },
        serviceabilityCalculatorVersionID: {
            type: DataTypes.INTEGER,
            field: 'ServiceabilityCalculatorVersionID',
            allowNull: false,
            references: {
                model: 'ServiceabilityCalculatorVersion',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationServiceabilityHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationServiceabilityHistory = model.ApplicationServiceabilityHistory;
    var ApplicationServiceabilityHistoryValue = model.ApplicationServiceabilityHistoryValue;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var ServiceabilityCalculatorVersion = model.ServiceabilityCalculatorVersion;
    var ServiceabilityValueType = model.ServiceabilityValueType;

    ApplicationServiceabilityHistory.hasMany(ApplicationServiceabilityHistoryValue, {
        as: 'ValueApplicationserviceabilities',
        foreignKey: 'ApplicationServiceabilityHistoryID ',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationServiceabilityHistory.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationServiceabilityHistory.belongsTo(PartyRole, {
        as: 'ExecutedByPartyRole',
        foreignKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationServiceabilityHistory.belongsTo(PartyRole, {
        as: 'PartyRole',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationServiceabilityHistory.belongsTo(ServiceabilityCalculatorVersion, {
        as: 'ServiceabilityCalculatorVersion',
        foreignKey: 'ServiceabilityCalculatorVersionID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationServiceabilityHistory.belongsToMany(ServiceabilityValueType, {
        as: 'ApplicationServiceabilityHistoryValueServiceabilityValueTypes',
        through: ApplicationServiceabilityHistoryValue,
        foreignKey: 'ApplicationServiceabilityHistoryID ',
        otherKey: 'ServiceabilityValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
