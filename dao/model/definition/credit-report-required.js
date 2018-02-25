'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportRequired', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: false,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        vedaBureauReference: {
            type: DataTypes.STRING(50),
            field: 'VedaBureauReference',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportRequired',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportRequired = model.CreditReportRequired;
    var ApplicationPartyRole = model.ApplicationPartyRole;

    CreditReportRequired.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
