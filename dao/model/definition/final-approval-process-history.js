'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FinalApprovalProcessHistory', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        finalApprovalProcessTypeID: {
            type: DataTypes.INTEGER,
            field: 'FinalApprovalProcessTypeID',
            allowNull: false,
            references: {
                model: 'FinalApprovalProcessType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        createdByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CreatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        completed: {
            type: DataTypes.DATE,
            field: 'Completed',
            allowNull: true
        },
        completedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CompletedByPartyRoleID',
            allowNull: true,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'FinalApprovalProcessHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var FinalApprovalProcessHistory = model.FinalApprovalProcessHistory;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var FinalApprovalProcessType = model.FinalApprovalProcessType;

    FinalApprovalProcessHistory.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessHistory.belongsTo(PartyRole, {
        as: 'CompletedByPartyRole',
        foreignKey: 'CompletedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessHistory.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessHistory.belongsTo(FinalApprovalProcessType, {
        as: 'FinalApprovalProcessType',
        foreignKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
