'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportScoreDataContributingFactor', {
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
        iD: {
            type: DataTypes.STRING(10),
            field: 'ID',
            allowNull: true
        },
        name: {
            type: DataTypes.STRING(100),
            field: 'Name',
            allowNull: true
        },
        description: {
            type: DataTypes.STRING(200),
            field: 'Description',
            allowNull: true
        },
        impactor: {
            type: DataTypes.STRING(50),
            field: 'Impactor',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportScoreDataContributingFactor',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportScoreDataContributingFactor = model.CreditReportScoreDataContributingFactor;
    var CreditReport = model.CreditReport;

    CreditReportScoreDataContributingFactor.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
