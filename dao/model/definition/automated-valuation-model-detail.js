'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AutomatedValuationModelDetail', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rPDataPropertyId: {
            type: DataTypes.INTEGER,
            field: 'RPDataPropertyId',
            allowNull: false
        },
        propertyAddress: {
            type: DataTypes.STRING(500),
            field: 'PropertyAddress',
            allowNull: true
        },
        propertyDescription: {
            type: DataTypes.STRING(500),
            field: 'PropertyDescription',
            allowNull: true
        },
        propertyTypeID: {
            type: DataTypes.INTEGER,
            field: 'PropertyTypeID',
            allowNull: true,
            references: {
                model: 'ValuationPropertyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        estimatedPropertyValue: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'EstimatedPropertyValue',
            allowNull: true
        },
        propertyValueHigh: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'PropertyValueHigh',
            allowNull: true
        },
        propertyValueLow: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'PropertyValueLow',
            allowNull: true
        },
        forecastDeviation: {
            type: DataTypes.DECIMAL(10, 4),
            field: 'ForecastDeviation',
            allowNull: true
        },
        landZoningTypeID: {
            type: DataTypes.INTEGER,
            field: 'LandZoningTypeID',
            allowNull: true
        },
        landArea: {
            type: DataTypes.BIGINT,
            field: 'LandArea',
            allowNull: true
        },
        floorArea: {
            type: DataTypes.INTEGER,
            field: 'FloorArea',
            allowNull: true
        },
        bathroom: {
            type: DataTypes.INTEGER,
            field: 'Bathroom',
            allowNull: true
        },
        carSpace: {
            type: DataTypes.INTEGER,
            field: 'CarSpace',
            allowNull: true
        },
        lockupGarage: {
            type: DataTypes.INTEGER,
            field: 'LockupGarage',
            allowNull: true
        },
        bedroom: {
            type: DataTypes.INTEGER,
            field: 'Bedroom',
            allowNull: true
        },
        largeImageUrl: {
            type: DataTypes.STRING(200),
            field: 'LargeImageUrl',
            allowNull: true
        },
        effectiveDate: {
            type: DataTypes.DATE,
            field: 'EffectiveDate',
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
        }
    }, {
        schema: 'public',
        tableName: 'AutomatedValuationModelDetail',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AutomatedValuationModelDetail = model.AutomatedValuationModelDetail;
    var PartyRole = model.PartyRole;
    var ValuationPropertyType = model.ValuationPropertyType;

    AutomatedValuationModelDetail.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutomatedValuationModelDetail.belongsTo(ValuationPropertyType, {
        as: 'PropertyType',
        foreignKey: 'PropertyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutomatedValuationModelDetail.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
