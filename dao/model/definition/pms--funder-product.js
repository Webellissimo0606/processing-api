'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsFunderproduct', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        crumbsFunderPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsFunderPartyRoleID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        },
        documentationTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentationTypeID',
            allowNull: false
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
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
            allowNull: true
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByUserID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByUserID',
            allowNull: true
        },
        interestTypeID: {
            type: DataTypes.INTEGER,
            field: 'InterestTypeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'pms_FunderProduct',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsFunderproduct = model.PmsFunderproduct;

};
