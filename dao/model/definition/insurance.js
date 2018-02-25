'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Insurance', {
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
        crumbsInsurerPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsInsurerPartyRoleID',
            allowNull: false
        },
        insuranceTypeID: {
            type: DataTypes.INTEGER,
            field: 'InsuranceTypeID',
            allowNull: true,
            references: {
                model: 'InsuranceType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        coverAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'CoverAmount',
            allowNull: true
        },
        policyNumber: {
            type: DataTypes.STRING(100),
            field: 'PolicyNumber',
            allowNull: true
        },
        expiryDate: {
            type: DataTypes.DATEONLY,
            field: 'ExpiryDate',
            allowNull: true
        },
        isInsured: {
            type: DataTypes.BOOLEAN,
            field: 'IsInsured',
            allowNull: true
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
        tableName: 'Insurance',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Insurance = model.Insurance;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;
    var InsuranceType = model.InsuranceType;

    Insurance.belongsTo(ApplicationSecurity, {
        as: 'ApplicationSecurity',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Insurance.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Insurance.belongsTo(InsuranceType, {
        as: 'InsuranceType',
        foreignKey: 'InsuranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Insurance.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
