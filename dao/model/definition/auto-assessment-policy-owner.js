'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('AutoAssessmentPolicyOwner', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        partyRoleID: {
            type: DataTypes.INTEGER,
            field: 'PartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'AutoAssessmentPolicyOwner',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var AutoAssessmentPolicyOwner = model.AutoAssessmentPolicyOwner;
    var AutoAssessmentPolicyType = model.AutoAssessmentPolicyType;
    var PartyRole = model.PartyRole;

    AutoAssessmentPolicyOwner.hasMany(AutoAssessmentPolicyType, {
        as: 'AutoAssessmentPolicyTypeAutoassessmentpolicyownerFks',
        foreignKey: 'AutoAssessmentPolicyOwnerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    AutoAssessmentPolicyOwner.belongsTo(PartyRole, {
        as: 'PartyRole',
        foreignKey: 'PartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
