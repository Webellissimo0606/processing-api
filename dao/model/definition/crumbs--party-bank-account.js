'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartybankaccount', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        partyID: {
            type: DataTypes.INTEGER,
            field: 'PartyID',
            allowNull: false
        },
        bankAccountID: {
            type: DataTypes.INTEGER,
            field: 'BankAccountID',
            allowNull: false
        },
        partyBankAccountTypeID: {
            type: DataTypes.INTEGER,
            field: 'PartyBankAccountTypeID',
            allowNull: false
        },
        bankBSBID: {
            type: DataTypes.INTEGER,
            field: 'BankBSBID',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: true
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: true
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: true
        },
        lastUpdateByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdateByPartyRoleID',
            allowNull: true
        },
        treasuryApproved: {
            type: DataTypes.DATE,
            field: 'TreasuryApproved',
            allowNull: true
        },
        treasuryApprovedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'TreasuryApprovedByPartyRoleID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyBankAccount',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartybankaccount = model.CrumbsPartybankaccount;

};
