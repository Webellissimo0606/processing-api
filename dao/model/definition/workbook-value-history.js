'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('WorkbookValueHistory', {
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
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'WorkbookValueHistory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var WorkbookValueHistory = model.WorkbookValueHistory;
    var WorkbookHistory = model.WorkbookHistory;
    var WorkbookParameterType = model.WorkbookParameterType;

    WorkbookValueHistory.belongsTo(WorkbookHistory, {
        as: 'WorkbookHistory',
        foreignKey: 'WorkbookHistoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    WorkbookValueHistory.belongsTo(WorkbookParameterType, {
        as: 'WorkbookParameterType',
        foreignKey: 'WorkbookParameterTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
