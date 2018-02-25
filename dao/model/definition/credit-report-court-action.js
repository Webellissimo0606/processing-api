'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportCourtAction', {
        creditReportID: {
            type: DataTypes.INTEGER,
            field: 'CreditReportID',
            allowNull: false,
            references: {
                model: 'CreditReport',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        iDIndex: {
            type: DataTypes.STRING(10),
            field: 'IDIndex',
            allowNull: true
        },
        courtActionType: {
            type: DataTypes.STRING(50),
            field: 'CourtActionType',
            allowNull: true
        },
        actionDate: {
            type: DataTypes.DATEONLY,
            field: 'ActionDate',
            allowNull: true
        },
        creditor: {
            type: DataTypes.STRING(100),
            field: 'Creditor',
            allowNull: true
        },
        courtActionAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'CourtActionAmount',
            allowNull: true
        },
        plaintNumber: {
            type: DataTypes.STRING(50),
            field: 'PlaintNumber',
            allowNull: true
        },
        courtType: {
            type: DataTypes.STRING(50),
            field: 'CourtType',
            allowNull: true
        },
        relationshipCode: {
            type: DataTypes.STRING(10),
            field: 'RelationshipCode',
            allowNull: true
        },
        relationship: {
            type: DataTypes.STRING(50),
            field: 'Relationship',
            allowNull: true
        },
        coBorrower: {
            type: DataTypes.STRING(50),
            field: 'CoBorrower',
            allowNull: true
        },
        courtActionStatusCode: {
            type: DataTypes.STRING(10),
            field: 'CourtActionStatusCode',
            allowNull: true
        },
        courtActionStatus: {
            type: DataTypes.STRING(50),
            field: 'CourtActionStatus',
            allowNull: true
        },
        courtActionStatusDate: {
            type: DataTypes.DATEONLY,
            field: 'CourtActionStatusDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportCourtAction',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportCourtAction = model.CreditReportCourtAction;
    var CreditReport = model.CreditReport;

    CreditReportCourtAction.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
