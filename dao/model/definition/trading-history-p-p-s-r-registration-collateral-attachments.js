'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TradingHistoryPPSRRegistrationCollateralAttachment', {
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
        attachmentID: {
            type: DataTypes.STRING(20),
            field: 'AttachmentID',
            allowNull: true
        },
        attachmentFileName: {
            type: DataTypes.STRING(200),
            field: 'AttachmentFileName',
            allowNull: true
        },
        attachmentFileSizeBytes: {
            type: DataTypes.STRING(20),
            field: 'AttachmentFileSizeBytes',
            allowNull: true
        },
        attachmentDescription: {
            type: DataTypes.STRING(200),
            field: 'AttachmentDescription',
            allowNull: true
        },
        attachmentMigratedFlag: {
            type: DataTypes.STRING(20),
            field: 'AttachmentMigratedFlag',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TradingHistoryPPSRRegistrationCollateralAttachments',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TradingHistoryPPSRRegistrationCollateralAttachment = model.TradingHistoryPPSRRegistrationCollateralAttachment;
    var CreditReport = model.CreditReport;

    TradingHistoryPPSRRegistrationCollateralAttachment.belongsTo(CreditReport, {
        as: 'CreditReport',
        foreignKey: 'CreditReportID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
