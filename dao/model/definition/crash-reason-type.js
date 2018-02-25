'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CrashReasonType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: false
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
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
        }
    }, {
        schema: 'public',
        tableName: 'CrashReasonType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CrashReasonType = model.CrashReasonType;
    var ApplicationStatusHistory = model.ApplicationStatusHistory;
    var ApplicationStatusTypeProductCategoryCrashReasonType = model.ApplicationStatusTypeProductCategoryCrashReasonType;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationStatusType = model.ApplicationStatusType;
    var PartyRole = model.PartyRole;
    var ApplicationStatusTypeProductCategory = model.ApplicationStatusTypeProductCategory;

    CrashReasonType.hasMany(ApplicationStatusHistory, {
        as: 'ApplicationStatusHistoryCrashreasontypeFks',
        foreignKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CrashReasonType.hasMany(ApplicationStatusTypeProductCategoryCrashReasonType, {
        as: 'ApplicationStatusTypeProductCategoryCrashReasonTypeCrashreasons',
        foreignKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CrashReasonType.belongsToMany(ApplicationContainer, {
        as: 'ApplicationStatusHistoryApplicationContainers',
        through: ApplicationStatusHistory,
        foreignKey: 'CrashReasonTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CrashReasonType.belongsToMany(ApplicationStatusType, {
        as: 'ApplicationStatusHistoryApplicationStatusTypes',
        through: ApplicationStatusHistory,
        foreignKey: 'CrashReasonTypeID',
        otherKey: 'ApplicationStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CrashReasonType.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryCreatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'CrashReasonTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CrashReasonType.belongsToMany(PartyRole, {
        as: 'ApplicationStatusHistoryLastUpdatedByPartyRoles',
        through: ApplicationStatusHistory,
        foreignKey: 'CrashReasonTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CrashReasonType.belongsToMany(ApplicationStatusTypeProductCategory, {
        as: 'ApplicationStatusTypeProductCategoryCrashReasonTypeApplicationStatusTypeProductCategories',
        through: ApplicationStatusTypeProductCategoryCrashReasonType,
        foreignKey: 'CrashReasonTypeID',
        otherKey: 'ApplicationStatusTypeProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
