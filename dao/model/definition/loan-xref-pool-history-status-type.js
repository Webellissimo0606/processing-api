'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanXrefPoolHistoryStatusType', {
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
        loanXrefPoolHistoryStatusLevelTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanXrefPoolHistoryStatusLevelTypeID',
            allowNull: false,
            references: {
                model: 'LoanXrefPoolHistoryStatusLevelType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        tableName: 'LoanXrefPoolHistoryStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanXrefPoolHistoryStatusType = model.LoanXrefPoolHistoryStatusType;
    var LoanXrefPoolHistoryStatus = model.LoanXrefPoolHistoryStatus;
    var LoanXrefPoolHistoryStatusLevelType = model.LoanXrefPoolHistoryStatusLevelType;

    LoanXrefPoolHistoryStatusType.hasMany(LoanXrefPoolHistoryStatus, {
        as: 'LoanXrefPoolHistoryStatusLoanxrefpoolhistorystatustypeFks',
        foreignKey: 'LoanXrefPoolHistoryStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    LoanXrefPoolHistoryStatusType.belongsTo(LoanXrefPoolHistoryStatusLevelType, {
        as: 'LoanXrefPoolHistoryStatusLevelType',
        foreignKey: 'LoanXrefPoolHistoryStatusLevelTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
