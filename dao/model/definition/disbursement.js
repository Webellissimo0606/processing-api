'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Disbursement', {
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
            allowNull: false
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: true
        },
        crumbsBankAccountID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsBankAccountID',
            allowNull: false
        },
        amount: {
            type: DataTypes.DECIMAL,
            field: 'Amount',
            allowNull: false
        },
        disbursementTypeID: {
            type: DataTypes.INTEGER,
            field: 'DisbursementTypeID',
            allowNull: false,
            references: {
                model: 'DisbursementType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        solicitorReferenceID: {
            type: DataTypes.STRING(150),
            field: 'SolicitorReferenceID',
            allowNull: true
        },
        ultracsSequenceNumber: {
            type: DataTypes.INTEGER,
            field: 'UltracsSequenceNumber',
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
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        },
        disbursementPaymentTypeID: {
            type: DataTypes.INTEGER,
            field: 'DisbursementPaymentTypeID',
            allowNull: true,
            references: {
                model: 'DisbursementPaymentType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        autoDisbursement: {
            type: DataTypes.BOOLEAN,
            field: 'AutoDisbursement',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: true,
            references: {
                model: 'Security',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'Disbursement',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Disbursement = model.Disbursement;
    var DisbursementDrawHistory = model.DisbursementDrawHistory;
    var DisbursementPaymentType = model.DisbursementPaymentType;
    var DisbursementType = model.DisbursementType;
    var Security = model.Security;
    var DisbursementSubType = model.DisbursementSubType;

    Disbursement.hasMany(DisbursementDrawHistory, {
        as: 'DrawHistoryDisbursementFks',
        foreignKey: 'DisbursementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Disbursement.belongsTo(DisbursementPaymentType, {
        as: 'DisbursementPaymentType',
        foreignKey: 'DisbursementPaymentTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Disbursement.belongsTo(DisbursementType, {
        as: 'DisbursementType',
        foreignKey: 'DisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Disbursement.belongsTo(Security, {
        as: 'Security',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Disbursement.belongsToMany(DisbursementSubType, {
        as: 'DisbursementDrawHistoryDisbursementSubTypes',
        through: DisbursementDrawHistory,
        foreignKey: 'DisbursementID',
        otherKey: 'DisbursementSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
