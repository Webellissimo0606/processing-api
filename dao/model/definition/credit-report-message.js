'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportMessage', {
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
        message: {
            type: DataTypes.STRING(200),
            field: 'Message',
            allowNull: true
        },
        messageCode: {
            type: DataTypes.STRING(10),
            field: 'MessageCode',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportMessage',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportMessage = model.CreditReportMessage;
    var CreditReport = model.CreditReport;

    CreditReportMessage.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
