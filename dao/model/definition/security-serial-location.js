'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SecuritySerialLocation', {
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
        serialNumber: {
            type: DataTypes.STRING(100),
            field: 'SerialNumber',
            allowNull: true
        },
        productNumber: {
            type: DataTypes.STRING(100),
            field: 'ProductNumber',
            allowNull: true
        },
        premisesLocationTypeID: {
            type: DataTypes.INTEGER,
            field: 'PremisesLocationTypeID',
            allowNull: true,
            references: {
                model: 'PremisesLocationType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        fixedToPremises: {
            type: DataTypes.BOOLEAN,
            field: 'FixedToPremises',
            allowNull: true
        },
        crumbsAddressID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsAddressID',
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
        tableName: 'SecuritySerialLocation',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SecuritySerialLocation = model.SecuritySerialLocation;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;
    var PremisesLocationType = model.PremisesLocationType;

    SecuritySerialLocation.belongsTo(ApplicationSecurity, {
        as: 'ApplicationSecurity',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SecuritySerialLocation.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SecuritySerialLocation.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    SecuritySerialLocation.belongsTo(PremisesLocationType, {
        as: 'PremisesLocationType',
        foreignKey: 'PremisesLocationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
