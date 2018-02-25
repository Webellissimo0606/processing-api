'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportAssociation', {
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
        latestStartDate: {
            type: DataTypes.DATEONLY,
            field: 'LatestStartDate',
            allowNull: true
        },
        latestCeasedDate: {
            type: DataTypes.DATEONLY,
            field: 'LatestCeasedDate',
            allowNull: true
        },
        isSeriousCreditInfringement: {
            type: DataTypes.STRING(10),
            field: 'IsSeriousCreditInfringement',
            allowNull: true
        },
        sCIDate: {
            type: DataTypes.DATEONLY,
            field: 'SCIDate',
            allowNull: true
        },
        defaultAssociationStartDate: {
            type: DataTypes.DATEONLY,
            field: 'DefaultAssociationStartDate',
            allowNull: true
        },
        defaultAssociationCeaseDate: {
            type: DataTypes.DATEONLY,
            field: 'DefaultAssociationCeaseDate',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportAssociation',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportAssociation = model.CreditReportAssociation;
    var CreditReport = model.CreditReport;

    CreditReportAssociation.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
