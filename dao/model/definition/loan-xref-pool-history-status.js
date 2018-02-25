'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanXrefPoolHistoryStatus', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        loanXrefPoolHistoryID: {
            type: DataTypes.INTEGER,
            field: 'LoanXrefPoolHistoryID',
            allowNull: false
        },
        loanXrefPoolHistoryStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanXrefPoolHistoryStatusTypeID',
            allowNull: false,
            references: {
                model: 'LoanXrefPoolHistoryStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        comments: {
            type: DataTypes.STRING(200),
            field: 'Comments',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'LoanXrefPoolHistoryStatus',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanXrefPoolHistoryStatus = model.LoanXrefPoolHistoryStatus;
    var LoanXrefPoolHistoryStatusType = model.LoanXrefPoolHistoryStatusType;

    LoanXrefPoolHistoryStatus.belongsTo(LoanXrefPoolHistoryStatusType, {
        as: 'LoanXrefPoolHistoryStatusType',
        foreignKey: 'LoanXrefPoolHistoryStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
