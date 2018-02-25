'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ValuationType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
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
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ValuationType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ValuationType = model.ValuationType;
    var Valuation = model.Valuation;
    var ApplicationSecurity = model.ApplicationSecurity;
    var PartyRole = model.PartyRole;

    ValuationType.hasMany(Valuation, {
        as: 'ValuationValuationtypeFks',
        foreignKey: 'ValuationTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationType.belongsToMany(ApplicationSecurity, {
        as: 'ValuationApplicationSecurities',
        through: Valuation,
        foreignKey: 'ValuationTypeID',
        otherKey: 'ApplicationSecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationType.belongsToMany(PartyRole, {
        as: 'ValuationCreatedByPartyRoles',
        through: Valuation,
        foreignKey: 'ValuationTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ValuationType.belongsToMany(PartyRole, {
        as: 'ValuationLastUpdatedByPartyRoles',
        through: Valuation,
        foreignKey: 'ValuationTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
