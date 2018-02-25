'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentOrderStatusType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        docuSignCode: {
            type: DataTypes.STRING(50),
            field: 'DocuSignCode',
            allowNull: true
        },
        documentOrderStatusCategoryID: {
            type: DataTypes.INTEGER,
            field: 'DocumentOrderStatusCategoryID',
            allowNull: false,
            references: {
                model: 'DocumentOrderStatusCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'DocumentOrderStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentOrderStatusType = model.DocumentOrderStatusType;
    var DocumentOrderHistoryApplicationPartyRoleStatus = model.DocumentOrderHistoryApplicationPartyRoleStatus;
    var DocumentOrderStatusHistory = model.DocumentOrderStatusHistory;
    var DocumentOrderStatusCategory = model.DocumentOrderStatusCategory;
    var PartyRole = model.PartyRole;
    var DocumentOrderHistoryApplicationPartyRole = model.DocumentOrderHistoryApplicationPartyRole;
    var DocumentOrderHistory = model.DocumentOrderHistory;

    DocumentOrderStatusType.hasMany(DocumentOrderHistoryApplicationPartyRoleStatus, {
        as: 'DOHApplicationPartyRoleStatusDocumentorderstatustypeFks',
        foreignKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.hasMany(DocumentOrderStatusHistory, {
        as: 'DocumentOrderStatusHistoryDocumentorderstatustypeFks',
        foreignKey: 'DocumentOrderStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.belongsTo(DocumentOrderStatusCategory, {
        as: 'DocumentOrderStatusCategory',
        foreignKey: 'DocumentOrderStatusCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusCreatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'DocumentOrderStatusTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.belongsToMany(DocumentOrderHistoryApplicationPartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusDocumentOrderHistoryApplicationPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'DocumentOrderStatusTypeID',
        otherKey: 'DocumentOrderHistoryApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.belongsToMany(PartyRole, {
        as: 'DocumentOrderHistoryApplicationPartyRoleStatusLastUpdatedByPartyRoles',
        through: DocumentOrderHistoryApplicationPartyRoleStatus,
        foreignKey: 'DocumentOrderStatusTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.belongsToMany(PartyRole, {
        as: 'DocumentOrderStatusHistoryCreatedByPartyRoles',
        through: DocumentOrderStatusHistory,
        foreignKey: 'DocumentOrderStatusTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.belongsToMany(DocumentOrderHistory, {
        as: 'DocumentOrderStatusHistoryDocumentOrderHistories',
        through: DocumentOrderStatusHistory,
        foreignKey: 'DocumentOrderStatusTypeID',
        otherKey: 'DocumentOrderHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    DocumentOrderStatusType.belongsToMany(PartyRole, {
        as: 'DocumentOrderStatusHistoryLastUpdatedByPartyRoles',
        through: DocumentOrderStatusHistory,
        foreignKey: 'DocumentOrderStatusTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
