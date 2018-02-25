'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanXrefPoolHistoryStatusLevelType', {
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
        },
        description: {
            type: DataTypes.STRING(100),
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
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'LoanXrefPoolHistoryStatusLevelType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanXrefPoolHistoryStatusLevelType = model.LoanXrefPoolHistoryStatusLevelType;
    var LoanXrefPoolHistoryStatusType = model.LoanXrefPoolHistoryStatusType;

    LoanXrefPoolHistoryStatusLevelType.hasMany(LoanXrefPoolHistoryStatusType, {
        as: 'LoanXrefPoolHistoryStatusTypeLoanxrefpoolhistorystatusleveltyps',
        foreignKey: 'LoanXrefPoolHistoryStatusLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
