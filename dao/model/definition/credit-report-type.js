'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('CreditReportType', {
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
        crumbsPartyTypeID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsPartyTypeID',
            allowNull: true
        },
        shreddingStoredProcedureName: {
            type: DataTypes.STRING(250),
            field: 'ShreddingStoredProcedureName',
            allowNull: true
        },
        vedaProductName: {
            type: DataTypes.STRING(200),
            field: 'VedaProductName',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'CreditReportType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var CreditReportType = model.CreditReportType;
    var CreditReport = model.CreditReport;
    var ApplicationPartyRole = model.ApplicationPartyRole;
    var PartyRole = model.PartyRole;

    CreditReportType.hasMany(CreditReport, {
        as: 'CreditReportCreditreporttypeFks',
        foreignKey: 'CreditReportTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReportType.belongsToMany(ApplicationPartyRole, {
        as: 'CreditReportApplicationPartyRoles',
        through: CreditReport,
        foreignKey: 'CreditReportTypeID',
        otherKey: 'ApplicationPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReportType.belongsToMany(PartyRole, {
        as: 'CreditReportCreatedByPartyRoles',
        through: CreditReport,
        foreignKey: 'CreditReportTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    CreditReportType.belongsToMany(PartyRole, {
        as: 'CreditReportLastUpdatedByPartyRoles',
        through: CreditReport,
        foreignKey: 'CreditReportTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
