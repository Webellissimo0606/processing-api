'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TermType', {
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
        termCategoryID: {
            type: DataTypes.INTEGER,
            field: 'TermCategoryID',
            allowNull: false,
            references: {
                model: 'TermCategory',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        termTypeCode: {
            type: DataTypes.INTEGER,
            field: 'TermTypeCode',
            allowNull: true
        },
        frequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FrequencyTypeID',
            allowNull: false,
            references: {
                model: 'FrequencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        description: {
            type: DataTypes.STRING(500),
            field: 'Description',
            allowNull: false
        },
        tontoID: {
            type: DataTypes.INTEGER,
            field: 'TontoID',
            allowNull: true
        },
        justiceID: {
            type: DataTypes.INTEGER,
            field: 'JusticeID',
            allowNull: true
        },
        ultracsCode: {
            type: DataTypes.STRING(10),
            field: 'UltracsCode',
            allowNull: true
        },
        pMSID: {
            type: DataTypes.INTEGER,
            field: 'PMSID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        },
        ultracsServiceID: {
            type: DataTypes.INTEGER,
            field: 'UltracsServiceID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TermType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TermType = model.TermType;
    var EquipmentFinanceLoanApplication = model.EquipmentFinanceLoanApplication;
    var MotorVehicleLoanApplication = model.MotorVehicleLoanApplication;
    var PersonalLoanApplication = model.PersonalLoanApplication;
    var FrequencyType = model.FrequencyType;
    var TermCategory = model.TermCategory;
    var ApplicationContainer = model.ApplicationContainer;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var LoanPurposeType = model.LoanPurposeType;

    TermType.hasMany(EquipmentFinanceLoanApplication, {
        as: 'EquipmentFinanceLoanApplicationLoantermtypeFks',
        foreignKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.hasMany(MotorVehicleLoanApplication, {
        as: 'MotorVehicleLoanApplicationLoantermtypeFks',
        foreignKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.hasMany(PersonalLoanApplication, {
        as: 'PersonalLoanApplicationTermtypeFks',
        foreignKey: 'LoanTermTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsTo(FrequencyType, {
        as: 'FrequencyType',
        foreignKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsTo(TermCategory, {
        as: 'TermCategory',
        foreignKey: 'TermCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(ApplicationContainer, {
        as: 'EquipmentFinanceLoanApplicationApplicationContainers',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationCreatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(PartyRole, {
        as: 'EquipmentFinanceLoanApplicationLastUpdatedByPartyRoles',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(Loan, {
        as: 'EquipmentFinanceLoanApplicationLoans',
        through: EquipmentFinanceLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(ApplicationContainer, {
        as: 'MotorVehicleLoanApplicationApplicationContainers',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationCreatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(PartyRole, {
        as: 'MotorVehicleLoanApplicationLastUpdatedByPartyRoles',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(Loan, {
        as: 'MotorVehicleLoanApplicationLoans',
        through: MotorVehicleLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(ApplicationContainer, {
        as: 'PersonalLoanApplicationApplicationContainers',
        through: PersonalLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'ApplicationContainerID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationCreatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'CreatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(PartyRole, {
        as: 'PersonalLoanApplicationLastUpdatedByPartyRoles',
        through: PersonalLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(LoanPurposeType, {
        as: 'PersonalLoanApplicationLoanPurposeTypes',
        through: PersonalLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'LoanPurposeTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermType.belongsToMany(Loan, {
        as: 'PersonalLoanApplicationLoans',
        through: PersonalLoanApplication,
        foreignKey: 'LoanTermTypeID',
        otherKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
