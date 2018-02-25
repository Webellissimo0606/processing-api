'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DisbursementType', {
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
        tableName: 'DisbursementType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DisbursementType = model.DisbursementType;
    var Disbursement = model.Disbursement;
    var DisbursementSubType = model.DisbursementSubType;
    var DisbursementTypeSubTypeOption = model.DisbursementTypeSubTypeOption;
    var DisbursementPaymentType = model.DisbursementPaymentType;
    var Security = model.Security;

    DisbursementType.hasMany(Disbursement, {
        as: 'DisbursementDisbursementtypeFks',
        foreignKey: 'DisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementType.hasMany(DisbursementSubType, {
        as: 'DisbursementSubTypeDisbursementtypeFks',
        foreignKey: 'DefaultDisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementType.hasMany(DisbursementTypeSubTypeOption, {
        as: 'SubTypeOptionDisbursementtypeFks',
        foreignKey: 'DisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementType.belongsToMany(DisbursementPaymentType, {
        as: 'DisbursementDisbursementPaymentTypes',
        through: Disbursement,
        foreignKey: 'DisbursementTypeID',
        otherKey: 'DisbursementPaymentTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementType.belongsToMany(Security, {
        as: 'DisbursementSecurities',
        through: Disbursement,
        foreignKey: 'DisbursementTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementType.belongsToMany(DisbursementPaymentType, {
        as: 'DisbursementSubTypeDefaultDisbursementPaymentTypes',
        through: DisbursementSubType,
        foreignKey: 'DefaultDisbursementTypeID',
        otherKey: 'DefaultDisbursementPaymentTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementType.belongsToMany(DisbursementSubType, {
        as: 'DisbursementTypeSubTypeOptionDisbursementSubTypes',
        through: DisbursementTypeSubTypeOption,
        foreignKey: 'DisbursementTypeID',
        otherKey: 'DisbursementSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
