'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsProgramproduct', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        productID: {
            type: DataTypes.INTEGER,
            field: 'ProductID',
            allowNull: false
        },
        programID: {
            type: DataTypes.INTEGER,
            field: 'ProgramID',
            allowNull: false
        },
        futureProgramProductID: {
            type: DataTypes.INTEGER,
            field: 'FutureProgramProductID',
            allowNull: true
        },
        defaultFee: {
            type: DataTypes.DECIMAL(10, 2),
            field: 'DefaultFee',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByUserID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByUserID',
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByUserID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByUserID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'pms_ProgramProduct',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsProgramproduct = model.PmsProgramproduct;

};
