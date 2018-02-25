'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsFrequencytype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: true
        },
        annualConversion: {
            type: DataTypes.INTEGER,
            field: 'AnnualConversion',
            allowNull: true
        },
        weeklyConversion: {
            type: DataTypes.INTEGER,
            field: 'WeeklyConversion',
            allowNull: true
        },
        monthlyConversion: {
            type: DataTypes.DECIMAL(7, 4),
            field: 'MonthlyConversion',
            allowNull: true
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: true
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'pms_FrequencyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsFrequencytype = model.PmsFrequencytype;

};
