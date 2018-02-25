'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('FinalApprovalProcessProductCategoryJobType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        finalApprovalProcesProductCategoryID: {
            type: DataTypes.INTEGER,
            field: 'FinalApprovalProcesProductCategoryID',
            allowNull: false,
            references: {
                model: 'FinalApprovalProcessTypeProductCategoryType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        attempt: {
            type: DataTypes.INTEGER,
            field: 'Attempt',
            allowNull: true
        },
        jobTypeID: {
            type: DataTypes.INTEGER,
            field: 'JobTypeID',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'FinalApprovalProcessProductCategoryJobType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var FinalApprovalProcessProductCategoryJobType = model.FinalApprovalProcessProductCategoryJobType;
    var FinalApprovalProcessTypeProductCategoryType = model.FinalApprovalProcessTypeProductCategoryType;

    FinalApprovalProcessProductCategoryJobType.belongsTo(FinalApprovalProcessTypeProductCategoryType, {
        as: 'FinalApprovalProcesProductCategory',
        foreignKey: 'FinalApprovalProcesProductCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
