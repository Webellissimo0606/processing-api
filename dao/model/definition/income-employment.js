'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('IncomeEmployment', {
        incomeID: {
            type: DataTypes.INTEGER,
            field: 'IncomeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Income',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        employmentID: {
            type: DataTypes.INTEGER,
            field: 'EmploymentID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Employment',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'IncomeEmployment',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var IncomeEmployment = model.IncomeEmployment;
    var Employment = model.Employment;
    var Income = model.Income;

    IncomeEmployment.belongsTo(Employment, {
        as: 'Employment',
        foreignKey: 'EmploymentID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    IncomeEmployment.belongsTo(Income, {
        as: 'Income',
        foreignKey: 'IncomeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
