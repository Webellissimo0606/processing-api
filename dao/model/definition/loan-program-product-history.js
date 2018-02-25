'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanProgramProductHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: false
        },
        pMSProgramProductID: {
            type: DataTypes.INTEGER,
            field: 'PMSProgramProductID',
            allowNull: false
        },
        effective: {
            type: DataTypes.DATEONLY,
            field: 'Effective',
            allowNull: false
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
        }
    }, {
        schema: 'public',
        tableName: 'LoanProgramProductHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanProgramProductHistory = model.LoanProgramProductHistory;

};
