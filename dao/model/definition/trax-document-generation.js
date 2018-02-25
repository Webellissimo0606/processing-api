'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TraxDocumentGeneration', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: false,
            references: {
                model: 'ApplicationContainer',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: true,
            references: {
                model: 'ApplicationPartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        applicationSecurityID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationSecurityID',
            allowNull: true,
            references: {
                model: 'ApplicationSecurity',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        documentControlDocumentTypeID: {
            type: DataTypes.INTEGER,
            field: 'DocumentControlDocumentTypeID',
            allowNull: true
        },
        traxSerial: {
            type: DataTypes.STRING(32),
            field: 'TraxSerial',
            allowNull: false
        },
        created: {
            type: DataTypes.DATE,
            field: 'Created',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'TraxDocumentGeneration',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TraxDocumentGeneration = model.TraxDocumentGeneration;
    var ApplicationContainer = model.ApplicationContainer;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var ApplicationSecurity = model.ApplicationSecurity;

    TraxDocumentGeneration.belongsTo(ApplicationContainer, {
        as: 'ApplicationContainer',
        foreignKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxDocumentGeneration.belongsTo(ApplicationPartyRole, {
        as: 'ApplicationPartyRole',
        foreignKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TraxDocumentGeneration.belongsTo(ApplicationSecurity, {
        as: 'ApplicationSecurity',
        foreignKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
