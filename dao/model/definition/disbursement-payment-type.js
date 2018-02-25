'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DisbursementPaymentType', {
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
        tableName: 'DisbursementPaymentType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DisbursementPaymentType = model.DisbursementPaymentType;
    var Disbursement = model.Disbursement;
    var DisbursementSubType = model.DisbursementSubType;
    var DisbursementType = model.DisbursementType;
    var Security = model.Security;

    DisbursementPaymentType.hasMany(Disbursement, {
        as: 'DisbursementDisbursementpaymenttypeFks',
        foreignKey: 'DisbursementPaymentTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementPaymentType.hasMany(DisbursementSubType, {
        as: 'DisbursementSubTypeDisbursementpaymenttypeFks',
        foreignKey: 'DefaultDisbursementPaymentTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementPaymentType.belongsToMany(DisbursementType, {
        as: 'DisbursementDisbursementTypes',
        through: Disbursement,
        foreignKey: 'DisbursementPaymentTypeID',
        otherKey: 'DisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementPaymentType.belongsToMany(Security, {
        as: 'DisbursementSecurities',
        through: Disbursement,
        foreignKey: 'DisbursementPaymentTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementPaymentType.belongsToMany(DisbursementType, {
        as: 'DisbursementSubTypeDefaultDisbursementTypes',
        through: DisbursementSubType,
        foreignKey: 'DefaultDisbursementPaymentTypeID',
        otherKey: 'DefaultDisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
