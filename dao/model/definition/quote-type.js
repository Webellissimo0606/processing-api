'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('QuoteType', {
        loanPurposeTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanPurposeTypeID',
            allowNull: true
        },
        workbookID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookID',
            allowNull: false,
            references: {
                model: 'Workbook',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        expiryDays: {
            type: DataTypes.INTEGER,
            field: 'ExpiryDays',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        },
        effective: {
            type: DataTypes.DATEONLY,
            field: 'Effective',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'QuoteType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var QuoteType = model.QuoteType;
    var Workbook = model.Workbook;

    QuoteType.belongsTo(Workbook, {
        as: 'Workbook',
        foreignKey: 'WorkbookID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
