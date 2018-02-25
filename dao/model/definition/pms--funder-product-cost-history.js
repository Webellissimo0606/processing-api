'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsFunderproductcosthistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        funderProductID: {
            type: DataTypes.INTEGER,
            field: 'FunderProductID',
            allowNull: false
        },
        cost: {
            type: DataTypes.DECIMAL(10, 4),
            field: 'Cost',
            allowNull: false
        },
        effectiveDate: {
            type: DataTypes.DATEONLY,
            field: 'EffectiveDate',
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
        tableName: 'pms_FunderProductCostHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsFunderproductcosthistory = model.PmsFunderproductcosthistory;

};
