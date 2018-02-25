'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('Quote', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workBookHistoryID: {
            type: DataTypes.INTEGER,
            field: 'WorkBookHistoryID',
            allowNull: false,
            references: {
                model: 'WorkbookHistory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        quoteTypeID: {
            type: DataTypes.INTEGER,
            field: 'QuoteTypeID',
            allowNull: false,
            references: {
                model: 'LoanPurposeType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        quoteDocumentID: {
            type: DataTypes.STRING(32),
            field: 'QuoteDocumentID',
            allowNull: false
        },
        quoteExpiryDays: {
            type: DataTypes.INTEGER,
            field: 'QuoteExpiryDays',
            allowNull: false
        },
        ownedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'OwnedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
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
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.INTEGER,
            field: 'Active',
            allowNull: false
        },
        workbookFileSerial: {
            type: DataTypes.STRING(32),
            field: 'WorkbookFileSerial',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'Quote',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var Quote = model.Quote;
    var PartyRole = model.PartyRole;
    var LoanPurposeType = model.LoanPurposeType;
    var WorkbookHistory = model.WorkbookHistory;

    Quote.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Quote.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Quote.belongsTo(PartyRole, {
        as: 'OwnedByPartyRole',
        foreignKey: 'OwnedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Quote.belongsTo(LoanPurposeType, {
        as: 'QuoteType',
        foreignKey: 'QuoteTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    Quote.belongsTo(WorkbookHistory, {
        as: 'WorkBookHistory',
        foreignKey: 'WorkBookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
