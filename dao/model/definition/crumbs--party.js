'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsParty', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            defaultValue: "crumbs_PartySequenceView_seq_nextval\"("
        },
        partyTypeID: {
            type: DataTypes.INTEGER,
            field: 'PartyTypeID',
            allowNull: false
        },
        justicePartyID: {
            type: DataTypes.INTEGER,
            field: 'JusticePartyID',
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        isInternal: {
            type: DataTypes.BOOLEAN,
            field: 'IsInternal',
            allowNull: true
        },
        cRMGuid: {
            type: DataTypes.UUID,
            field: 'CRMGuid',
            allowNull: true
        },
        vedaReference: {
            type: DataTypes.STRING(20),
            field: 'VedaReference',
            allowNull: true
        },
        documentGUID: {
            type: DataTypes.UUID,
            field: 'DocumentGUID',
            allowNull: true
        },
        ultracsClientID: {
            type: DataTypes.INTEGER,
            field: 'UltracsClientID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_Party',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsParty = model.CrumbsParty;

};
