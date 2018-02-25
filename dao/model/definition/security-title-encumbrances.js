'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('SecurityTitleEncumbrance', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false
        },
        encumbranceTypeID: {
            type: DataTypes.INTEGER,
            field: 'EncumbranceTypeID',
            allowNull: false,
            references: {
                model: 'SecurityEncumbranceType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        dealingNumber: {
            type: DataTypes.STRING(250),
            field: 'DealingNumber',
            allowNull: false
        },
        inFavourOfID: {
            type: DataTypes.INTEGER,
            field: 'InFavourOfID',
            allowNull: false
        },
        creditProviderID: {
            type: DataTypes.INTEGER,
            field: 'CreditProviderID',
            allowNull: false
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
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'SecurityTitleEncumbrances',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var SecurityTitleEncumbrance = model.SecurityTitleEncumbrance;
    var SecurityEncumbranceType = model.SecurityEncumbranceType;

    SecurityTitleEncumbrance.belongsTo(SecurityEncumbranceType, {
        as: 'EncumbranceType',
        foreignKey: 'EncumbranceTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
