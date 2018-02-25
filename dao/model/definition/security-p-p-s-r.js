'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SecurityPPSR', {
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false,
            primaryKey: true
        },
        pPSRStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'PPSRStatusTypeID',
            allowNull: true,
            references: {
                model: 'PPSRStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        statusDate: {
            type: DataTypes.DATE,
            field: 'StatusDate',
            allowNull: true
        },
        registrationNumber: {
            type: DataTypes.STRING(15),
            field: 'RegistrationNumber',
            allowNull: true
        },
        token: {
            type: DataTypes.STRING(16),
            field: 'Token',
            allowNull: true
        },
        interestExpiryDate: {
            type: DataTypes.DATE,
            field: 'InterestExpiryDate',
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
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: true
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'SecurityPPSR',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SecurityPPSR = model.SecurityPPSR;
    var PPSRStatusType = model.PPSRStatusType;

    SecurityPPSR.belongsTo(PPSRStatusType, {
        as: 'PPSRStatusType',
        foreignKey: 'PPSRStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
