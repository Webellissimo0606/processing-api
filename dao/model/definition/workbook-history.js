'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookHistory', {
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
            allowNull: true,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        workbookID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookID',
            allowNull: true,
            references: {
                model: 'Workbook',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        executed: {
            type: DataTypes.DATE,
            field: 'Executed',
            allowNull: false
        },
        executedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ExecutedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookHistory = model.WorkbookHistory;
    var Quote = model.Quote;
    var WorkbookValueHistory = model.WorkbookValueHistory;
    var WorkbookValueHistoryArchive = model.WorkbookValueHistoryArchive;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var Workbook = model.Workbook;
    var LoanPurposeType = model.LoanPurposeType;
    var WorkbookParameterType = model.WorkbookParameterType;

    WorkbookHistory.hasMany(Quote, {
        as: 'QuoteWorkbookhistoryFks',
        foreignKey: 'WorkBookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.hasMany(WorkbookValueHistory, {
        as: 'WorkbookValueHistoryWorkbookhistoryFks',
        foreignKey: 'WorkbookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.hasMany(WorkbookValueHistoryArchive, {
        as: 'WorkbookValueHistoryArchiveWorkbookhistoryFks',
        foreignKey: 'WorkbookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsTo(PartyRole, {
        as: 'ExecutedByPartyRole',
        foreignKey: 'ExecutedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsTo(Workbook, {
        as: 'Workbook',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsToMany(PartyRole, {
        as: 'QuoteCreatedByPartyRoles',
        through: Quote,
        foreignKey: 'WorkBookHistoryID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsToMany(PartyRole, {
        as: 'QuoteLastUpdatedByPartyRoles',
        through: Quote,
        foreignKey: 'WorkBookHistoryID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsToMany(PartyRole, {
        as: 'QuoteOwnedByPartyRoles',
        through: Quote,
        foreignKey: 'WorkBookHistoryID',
        otherKey: 'OwnedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsToMany(LoanPurposeType, {
        as: 'QuoteQuoteTypes',
        through: Quote,
        foreignKey: 'WorkBookHistoryID',
        otherKey: 'QuoteTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsToMany(WorkbookParameterType, {
        as: 'WorkbookValueHistoryWorkbookParameterTypes',
        through: WorkbookValueHistory,
        foreignKey: 'WorkbookHistoryID',
        otherKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookHistory.belongsToMany(WorkbookParameterType, {
        as: 'WorkbookValueHistoryArchiveWorkbookParameterTypes',
        through: WorkbookValueHistoryArchive,
        foreignKey: 'WorkbookHistoryID',
        otherKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
