'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DisbursementTypeSubTypeOption', {
        disbursementTypeID: {
            type: DataTypes.INTEGER,
            field: 'DisbursementTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'DisbursementType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        disbursementSubTypeID: {
            type: DataTypes.INTEGER,
            field: 'DisbursementSubTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'DisbursementSubType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'DisbursementTypeSubTypeOption',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DisbursementTypeSubTypeOption = model.DisbursementTypeSubTypeOption;
    var DisbursementSubType = model.DisbursementSubType;
    var DisbursementType = model.DisbursementType;

    DisbursementTypeSubTypeOption.belongsTo(DisbursementSubType, {
        as: 'DisbursementSubType',
        foreignKey: 'DisbursementSubTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DisbursementTypeSubTypeOption.belongsTo(DisbursementType, {
        as: 'DisbursementType',
        foreignKey: 'DisbursementTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
