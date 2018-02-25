'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationOrder', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        valuationOrderTypeID: {
            type: DataTypes.INTEGER,
            field: 'ValuationOrderTypeID',
            allowNull: false,
            references: {
                model: 'ValuationOrderType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        valuationContactDetails: {
            type: DataTypes.STRING(1000),
            field: 'ValuationContactDetails',
            allowNull: true
        },
        valuationFee: {
            type: DataTypes.DECIMAL(12, 2),
            field: 'ValuationFee',
            allowNull: true
        },
        applicationSecurityID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationSecurityID',
            allowNull: false
        },
        requestReferenceID: {
            type: DataTypes.STRING(15),
            field: 'RequestReferenceID',
            allowNull: true
        },
        orderValuer: {
            type: DataTypes.STRING(250),
            field: 'OrderValuer',
            allowNull: true
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
        applicationValuationOrderTypeID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationValuationOrderTypeID',
            allowNull: false,
            references: {
                model: 'ApplicationValuationOrderType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        externalComponentID: {
            type: DataTypes.STRING(250),
            field: 'ExternalComponentID',
            allowNull: true
        },
        valuationTierTypeID: {
            type: DataTypes.INTEGER,
            field: 'ValuationTierTypeID',
            allowNull: true,
            references: {
                model: 'ValuationTierType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        initialValuerSelected: {
            type: DataTypes.BOOLEAN,
            field: 'InitialValuerSelected',
            allowNull: false,
            defaultValue: false
        },
        active: {
            type: DataTypes.INTEGER,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ValuationOrder',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationOrder = model.ValuationOrder;
    var ApplicationValuationOrderType = model.ApplicationValuationOrderType;
    var ValuationOrderType = model.ValuationOrderType;
    var ValuationTierType = model.ValuationTierType;

    ValuationOrder.belongsTo(ApplicationValuationOrderType, {
        as: 'ApplicationValuationOrderType',
        foreignKey: 'ApplicationValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationOrder.belongsTo(ValuationOrderType, {
        as: 'ValuationOrderType',
        foreignKey: 'ValuationOrderTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationOrder.belongsTo(ValuationTierType, {
        as: 'ValuationTierType',
        foreignKey: 'ValuationTierTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
