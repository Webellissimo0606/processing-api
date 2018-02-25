'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrumbsPartyscorehistory', {
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
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        bureauScore: {
            type: DataTypes.STRING(20),
            field: 'BureauScore',
            allowNull: true
        },
        oldBureauScore: {
            type: DataTypes.STRING(20),
            field: 'OldBureauScore',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'crumbs_PartyScoreHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrumbsPartyscorehistory = model.CrumbsPartyscorehistory;

};
