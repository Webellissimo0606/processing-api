'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FinalApprovalProcessType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(200),
            field: 'Name',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'FinalApprovalProcessType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var FinalApprovalProcessType = model.FinalApprovalProcessType;
    var FinalApprovalProcessHistory = model.FinalApprovalProcessHistory;
    var FinalApprovalProcessTypeProductCategoryType = model.FinalApprovalProcessTypeProductCategoryType;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var ProductCategory = model.ProductCategory;

    FinalApprovalProcessType.hasMany(FinalApprovalProcessHistory, {
        as: 'FinalApprovalProcessHistoryFinalapprovalprocesstypes',
        foreignKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessType.hasMany(FinalApprovalProcessTypeProductCategoryType, {
        as: 'ProductCategoryTypeFapts',
        foreignKey: 'FinalApprovalProcessTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessType.belongsToMany(ApplicationContainer, {
        as: 'FinalApprovalProcessHistoryApplicationContainers',
        through: FinalApprovalProcessHistory,
        foreignKey: 'FinalApprovalProcessTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessType.belongsToMany(PartyRole, {
        as: 'FinalApprovalProcessHistoryCompletedByPartyRoles',
        through: FinalApprovalProcessHistory,
        foreignKey: 'FinalApprovalProcessTypeID',
        otherKey: 'CompletedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessType.belongsToMany(PartyRole, {
        as: 'FinalApprovalProcessHistoryCreatedByPartyRoles',
        through: FinalApprovalProcessHistory,
        foreignKey: 'FinalApprovalProcessTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessType.belongsToMany(ProductCategory, {
        as: 'FinalApprovalProcessTypeProductCategoryTypeProductCategoryTypes',
        through: FinalApprovalProcessTypeProductCategoryType,
        foreignKey: 'FinalApprovalProcessTypeID',
        otherKey: 'ProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    FinalApprovalProcessType.belongsToMany(ProductCategory, {
        as: 'FinalApprovalProcessTypeProductCategoryTypeSubProductCategoryTypes',
        through: FinalApprovalProcessTypeProductCategoryType,
        foreignKey: 'FinalApprovalProcessTypeID',
        otherKey: 'SubProductCategoryTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
