'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanPurposeGroup', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'LoanPurposeGroup',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanPurposeGroup = model.LoanPurposeGroup;
    var LoanPurposeType = model.LoanPurposeType;

    LoanPurposeGroup.hasMany(LoanPurposeType, {
        as: 'LoanPurposeTypeLoanpurposegroupFks',
        foreignKey: 'LoanPurposeGroupID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
