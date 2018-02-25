'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationStatusTypeProductCategoryCrashReasonType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationStatusTypeProductCategoryID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationStatusTypeProductCategoryID',
            allowNull: false,
            references: {
                model: 'ApplicationStatusTypeProductCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        crashReasonTypeID: {
            type: DataTypes.INTEGER,
            field: 'CrashReasonTypeID',
            allowNull: false,
            references: {
                model: 'CrashReasonType',
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
        tableName: 'ApplicationStatusTypeProductCategoryCrashReasonType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationStatusTypeProductCategoryCrashReasonType = model.ApplicationStatusTypeProductCategoryCrashReasonType;
    var ApplicationStatusTypeProductCategory = model.ApplicationStatusTypeProductCategory;
    var CrashReasonType = model.CrashReasonType;

    ApplicationStatusTypeProductCategoryCrashReasonType.belongsTo(ApplicationStatusTypeProductCategory, {
        as: 'ApplicationStatusTypeProductCategory',
        foreignKey: 'ApplicationStatusTypeProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationStatusTypeProductCategoryCrashReasonType.belongsTo(CrashReasonType, {
        as: 'CrashReasonType',
        foreignKey: 'CrashReasonTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
