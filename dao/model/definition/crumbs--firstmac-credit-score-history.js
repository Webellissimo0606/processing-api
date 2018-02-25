'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsFirstmaccreditscorehistory', {
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
        score: {
            type: DataTypes.DECIMAL(14, 6),
            field: 'Score',
            allowNull: true
        },
        estimatedScore: {
            type: DataTypes.DECIMAL(14, 6),
            field: 'EstimatedScore',
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
        firstmacCreditScoreTypeID: {
            type: DataTypes.INTEGER,
            field: 'FirstmacCreditScoreTypeID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_FirstmacCreditScoreHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsFirstmaccreditscorehistory = model.CrumbsFirstmaccreditscorehistory;

};
