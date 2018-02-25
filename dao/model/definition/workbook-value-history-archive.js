'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookValueHistoryArchive', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        workbookHistoryID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookHistoryID',
            allowNull: false,
            references: {
                model: 'WorkbookHistory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        workbookParameterTypeID: {
            type: DataTypes.INTEGER,
            field: 'WorkbookParameterTypeID',
            allowNull: false,
            references: {
                model: 'WorkbookParameterType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        value: {
            type: DataTypes.STRING(256),
            field: 'Value',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookValueHistoryArchive',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookValueHistoryArchive = model.WorkbookValueHistoryArchive;
    var WorkbookHistory = model.WorkbookHistory;
    var WorkbookParameterType = model.WorkbookParameterType;

    WorkbookValueHistoryArchive.belongsTo(WorkbookHistory, {
        as: 'WorkbookHistory',
        foreignKey: 'WorkbookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookValueHistoryArchive.belongsTo(WorkbookParameterType, {
        as: 'WorkbookParameterType',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
