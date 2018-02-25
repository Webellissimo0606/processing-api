'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRoleAncillary', {
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        identifyElectronically: {
            type: DataTypes.BOOLEAN,
            field: 'IdentifyElectronically',
            allowNull: false
        },
        consentToVerify: {
            type: DataTypes.BOOLEAN,
            field: 'ConsentToVerify',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRoleAncillary',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRoleAncillary = model.ApplicationPartyRoleAncillary;
    var ApplicationPartyRole = model.ApplicationPartyRole;

    ApplicationPartyRoleAncillary.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
