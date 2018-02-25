'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('ApplicationPartyRoleEmploymentContact', {
        applicationContainerID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationContainerID',
            allowNull: true
        },
        applicationPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'ApplicationPartyRoleID',
            allowNull: true
        },
        crumbsPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsPartyRoleID',
            allowNull: true
        },
        employmentID: {
            type: DataTypes.INTEGER,
            field: 'EmploymentID',
            allowNull: true
        },
        crumbsEmployerTelephoneNumberID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsEmployerTelephoneNumberID',
            allowNull: true
        },
        employerEmailAddressID: {
            type: DataTypes.INTEGER,
            field: 'EmployerEmailAddressID',
            allowNull: true
        },
        employerFaxNumberID: {
            type: DataTypes.INTEGER,
            field: 'EmployerFaxNumberID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'ApplicationPartyRoleEmploymentContacts',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var ApplicationPartyRoleEmploymentContact = model.ApplicationPartyRoleEmploymentContact;

};
