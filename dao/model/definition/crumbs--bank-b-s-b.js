'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsBankbsb', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_BankBSBSequenceView_seq_nextval\"("
        },
        bSB: {
            type: DataTypes.CHAR(6),
            field: 'BSB',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        branch: {
            type: DataTypes.STRING(200),
            field: 'Branch',
            allowNull: true
        },
        addressID: {
            type: DataTypes.INTEGER,
            field: 'AddressID',
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
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
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
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_BankBSB',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsBankbsb = model.CrumbsBankbsb;

};
