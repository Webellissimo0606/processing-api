'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AAATemp', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        account: {
            type: DataTypes.STRING(200),
            field: 'Account',
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(500),
            field: 'Name',
            allowNull: true
        },
        loanAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'LoanAmount',
            allowNull: true
        },
        mDR: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'MDR',
            allowNull: true
        },
        margin: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Margin',
            allowNull: true
        },
        rate: {
            type: DataTypes.DECIMAL(8, 4),
            field: 'Rate',
            allowNull: true
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'AAATemp',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AAATemp = model.AAATemp;

};
