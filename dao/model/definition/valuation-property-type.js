'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationPropertyType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        rPDataPropertyTypeID: {
            type: DataTypes.STRING(10),
            field: 'RPDataPropertyTypeID',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(200),
            field: 'Description',
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
        tableName: 'ValuationPropertyType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationPropertyType = model.ValuationPropertyType;
    var AutomatedValuationModelDetail = model.AutomatedValuationModelDetail;
    var PartyRole = model.PartyRole;

    ValuationPropertyType.hasMany(AutomatedValuationModelDetail, {
        as: 'AutomatedValuationModelDetailPropertytypeFks',
        foreignKey: 'PropertyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationPropertyType.belongsTo(PartyRole, {
        as: 'CreatedByPartyRole',
        foreignKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationPropertyType.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationPropertyType.belongsToMany(PartyRole, {
        as: 'AutomatedValuationModelDetailCreatedByPartyRoles',
        through: AutomatedValuationModelDetail,
        foreignKey: 'PropertyTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationPropertyType.belongsToMany(PartyRole, {
        as: 'AutomatedValuationModelDetailLastUpdatedByPartyRoles',
        through: AutomatedValuationModelDetail,
        foreignKey: 'PropertyTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
