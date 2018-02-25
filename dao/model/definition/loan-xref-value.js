'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('LoanXrefValue', {
        xref: {
            type: DataTypes.INTEGER,
            field: 'Xref',
            allowNull: false,
            primaryKey: true
        },
        value: {
            type: DataTypes.DECIMAL(14, 2),
            field: 'Value',
            allowNull: false
        },
        loanXrefValueTypeID: {
            type: DataTypes.INTEGER,
            field: 'LoanXrefValueTypeID',
            allowNull: false,
            references: {
                model: 'LoanXrefValueType',
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
            allowNull: false
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'LoanXrefValue',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var LoanXrefValue = model.LoanXrefValue;
    var LoanXrefValueType = model.LoanXrefValueType;

    LoanXrefValue.belongsTo(LoanXrefValueType, {
        as: 'LoanXrefValueType',
        foreignKey: 'LoanXrefValueTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
