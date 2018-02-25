'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DisbursementSubType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(250),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: false
        },
        settlementTypeID: {
            type: DataTypes.INTEGER,
            field: 'SettlementTypeID',
            allowNull: true
        },
        requiresValuationOrder: {
            type: DataTypes.BOOLEAN,
            field: 'RequiresValuationOrder',
            allowNull: false,
            defaultValue: true
        },
        defaultDisbursementPaymentTypeID: {
            type: DataTypes.INTEGER,
            field: 'DefaultDisbursementPaymentTypeID',
            allowNull: false,
            references: {
                model: 'DisbursementPaymentType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        defaultDisbursementTypeID: {
            type: DataTypes.INTEGER,
            field: 'DefaultDisbursementTypeID',
            allowNull: false,
            references: {
                model: 'DisbursementType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        allowManyDraws: {
            type: DataTypes.BOOLEAN,
            field: 'AllowManyDraws',
            allowNull: false,
            defaultValue: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
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
        tableName: 'DisbursementSubType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DisbursementSubType = model.DisbursementSubType;
    var DisbursementDrawHistory = model.DisbursementDrawHistory;
    var DisbursementTypeSubTypeOption = model.DisbursementTypeSubTypeOption;
    var DisbursementPaymentType = model.DisbursementPaymentType;
    var DisbursementType = model.DisbursementType;
    var Disbursement = model.Disbursement;

    DisbursementSubType.hasMany(DisbursementDrawHistory, {
        as: 'DisbursementDrawHistoryDisbursementsubtypeFks',
        foreignKey: 'DisbursementSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementSubType.hasMany(DisbursementTypeSubTypeOption, {
        as: 'DisbursementTypeSubTypeOptionDisbursementsubtypeFks',
        foreignKey: 'DisbursementSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementSubType.belongsTo(DisbursementPaymentType, {
        as: 'DefaultDisbursementPaymentType',
        foreignKey: 'DefaultDisbursementPaymentTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementSubType.belongsTo(DisbursementType, {
        as: 'DefaultDisbursementType',
        foreignKey: 'DefaultDisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementSubType.belongsToMany(Disbursement, {
        as: 'DisbursementDrawHistoryDisbursements',
        through: DisbursementDrawHistory,
        foreignKey: 'DisbursementSubTypeID',
        otherKey: 'DisbursementID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementSubType.belongsToMany(DisbursementType, {
        as: 'DisbursementTypeSubTypeOptionDisbursementTypes',
        through: DisbursementTypeSubTypeOption,
        foreignKey: 'DisbursementSubTypeID',
        otherKey: 'DisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
