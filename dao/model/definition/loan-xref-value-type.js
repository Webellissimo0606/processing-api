'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanXrefValueType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(250),
            field: 'Description',
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
        tableName: 'LoanXrefValueType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanXrefValueType = model.LoanXrefValueType;
    var LoanXrefValue = model.LoanXrefValue;

    LoanXrefValueType.hasMany(LoanXrefValue, {
        as: 'LoanXrefValueLoanxrefvaluetypeFks',
        foreignKey: 'LoanXrefValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
