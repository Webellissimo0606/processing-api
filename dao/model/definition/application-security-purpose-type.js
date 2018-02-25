'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationSecurityPurposeType', {
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
        sortOrder: {
            type: DataTypes.INTEGER,
            field: 'SortOrder',
            allowNull: false
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationSecurityPurposeType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationSecurityPurposeType = model.ApplicationSecurityPurposeType;
    var HomeLoanSecurity = model.HomeLoanSecurity;
    var Security = model.Security;

    ApplicationSecurityPurposeType.hasMany(HomeLoanSecurity, {
        as: 'HomeLoanSecurityApplicationsecuritypurposetypeFks',
        foreignKey: 'ApplicationSecurityPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    ApplicationSecurityPurposeType.belongsToMany(Security, {
        as: 'HomeLoanSecuritySecurities',
        through: HomeLoanSecurity,
        foreignKey: 'ApplicationSecurityPurposeTypeID',
        otherKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
