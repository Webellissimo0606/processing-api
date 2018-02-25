'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LiteHistoryImportTemp', {
        applicationHistoryTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationHistoryTypeID',
            allowNull: false
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false
        },
        applicationHistoryPublicationTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationHistoryPublicationTypeID',
            allowNull: true
        },
        title: {
            type: DataTypes.STRING,
            field: 'Title',
            allowNull: true
        },
        comments: {
            type: DataTypes.STRING(8000),
            field: 'Comments',
            allowNull: true
        },
        followUpDate: {
            type: DataTypes.DATE,
            field: 'FollowUpDate',
            allowNull: true
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByTontoUserID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByTontoUserID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'LiteHistoryImport_Temp',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LiteHistoryImportTemp = model.LiteHistoryImportTemp;

};
