'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('HomeLoanApplicationRepaymentTransfer', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        parentHomeLoanApplicationID: {
            type: DataTypes.INTEGER,
            field: 'ParentHomeLoanApplicationID',
            allowNull: false,
            references: {
                model: 'HomeLoanApplication',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        childHomeLoanApplicationID: {
            type: DataTypes.INTEGER,
            field: 'ChildHomeLoanApplicationID',
            allowNull: false,
            references: {
                model: 'HomeLoanApplication',
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
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false,
            defaultValue: true
        }
    }, {
        schema: 'public',
        tableName: 'HomeLoanApplicationRepaymentTransfer',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var HomeLoanApplicationRepaymentTransfer = model.HomeLoanApplicationRepaymentTransfer;
    var HomeLoanApplication = model.HomeLoanApplication;

    HomeLoanApplicationRepaymentTransfer.belongsTo(HomeLoanApplication, {
        as: 'ChildHomeLoanApplication',
        foreignKey: 'ChildHomeLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    HomeLoanApplicationRepaymentTransfer.belongsTo(HomeLoanApplication, {
        as: 'ParentHomeLoanApplication',
        foreignKey: 'ParentHomeLoanApplicationID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
