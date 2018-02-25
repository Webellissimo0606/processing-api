'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        productContainerID: {
            type: DataTypes.INTEGER,
            field: 'ProductContainerID',
            allowNull: false,
            references: {
                model: 'ProductContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
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
        tableName: 'ApplicationType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationType = model.ApplicationType;
    var ProductContainer = model.ProductContainer;

    ApplicationType.belongsTo(ProductContainer, {
        as: 'ProductContainer',
        foreignKey: 'ProductContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
