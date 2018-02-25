'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Valuation', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationSecurityID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationSecurityID',
            allowNull: false,
            references: {
                model: 'ApplicationSecurity',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        valuationTypeID: {
            type: DataTypes.INTEGER,
            field: 'ValuationTypeID',
            allowNull: false,
            references: {
                model: 'ValuationType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false,
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
        tableName: 'Valuation',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Valuation = model.Valuation;
    var MotorVehicleSecurityValuation = model.MotorVehicleSecurityValuation;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;
    var ValuationType = model.ValuationType;

    Valuation.hasMany(MotorVehicleSecurityValuation, {
        as: 'MotorVehicleSecurityValuationValuationFks',
        foreignKey: 'ValuationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Valuation.belongsTo(ApplicationSecurity, {
        as: 'ApplicationSecurity',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Valuation.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Valuation.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Valuation.belongsTo(ValuationType, {
        as: 'ValuationType',
        foreignKey: 'ValuationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
