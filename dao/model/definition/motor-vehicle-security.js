'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('MotorVehicleSecurity', {
        securityID: {
            type: DataTypes.INTEGER,
            field: 'SecurityID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'Security',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        loanID: {
            type: DataTypes.INTEGER,
            field: 'LoanID',
            allowNull: false,
            references: {
                model: 'Loan',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        motorVehicleYear: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleYear',
            allowNull: true
        },
        retailMakeID: {
            type: DataTypes.INTEGER,
            field: 'RetailMakeID',
            allowNull: true
        },
        retailModelID: {
            type: DataTypes.INTEGER,
            field: 'RetailModelID',
            allowNull: true
        },
        motorVehicleSecurityTypeID: {
            type: DataTypes.INTEGER,
            field: 'MotorVehicleSecurityTypeID',
            allowNull: true,
            references: {
                model: 'MotorVehicleSecurityType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        odometerReading: {
            type: DataTypes.BIGINT,
            field: 'OdometerReading',
            allowNull: true
        },
        registrationNumber: {
            type: DataTypes.STRING(20),
            field: 'RegistrationNumber',
            allowNull: true
        },
        vINChassisNumber: {
            type: DataTypes.STRING(50),
            field: 'VINChassisNumber',
            allowNull: true
        },
        engineNumber: {
            type: DataTypes.STRING(50),
            field: 'EngineNumber',
            allowNull: true
        },
        valuationAmount: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'ValuationAmount',
            allowNull: true
        },
        purchasePrice: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'PurchasePrice',
            allowNull: true
        },
        nVIC: {
            type: DataTypes.STRING(50),
            field: 'NVIC',
            allowNull: true
        },
        crumbsRegistrationStateID: {
            type: DataTypes.INTEGER,
            field: 'CrumbsRegistrationStateID',
            allowNull: true
        },
        firstRegistrationDate: {
            type: DataTypes.DATEONLY,
            field: 'FirstRegistrationDate',
            allowNull: true
        },
        financeOwing: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'FinanceOwing',
            allowNull: true
        },
        financeTerm: {
            type: DataTypes.INTEGER,
            field: 'FinanceTerm',
            allowNull: true
        },
        financeTermFrequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FinanceTermFrequencyTypeID',
            allowNull: true,
            references: {
                model: 'FrequencyType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        lastUpdated: {
            type: DataTypes.DATE,
            field: 'LastUpdated',
            allowNull: false
        },
        lastUpdatedByPartyRoleID: {
            type: DataTypes.INTEGER,
            field: 'LastUpdatedByPartyRoleID',
            allowNull: false,
            references: {
                model: 'PartyRole',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        motorVehicleDescription: {
            type: DataTypes.STRING(200),
            field: 'MotorVehicleDescription',
            allowNull: true
        },
        retailEngineTypeID: {
            type: DataTypes.INTEGER,
            field: 'RetailEngineTypeID',
            allowNull: true
        },
        numberOfDoors: {
            type: DataTypes.INTEGER,
            field: 'NumberOfDoors',
            allowNull: true
        },
        businessUse: {
            type: DataTypes.BOOLEAN,
            field: 'BusinessUse',
            allowNull: true
        },
        manufactureMonth: {
            type: DataTypes.INTEGER,
            field: 'ManufactureMonth',
            allowNull: true
        },
        manufactureYear: {
            type: DataTypes.INTEGER,
            field: 'ManufactureYear',
            allowNull: true
        },
        gVM: {
            type: DataTypes.DECIMAL(18, 4),
            field: 'GVM',
            allowNull: true
        },
        cO2: {
            type: DataTypes.STRING(50),
            field: 'CO2',
            allowNull: true
        },
        complianceMonth: {
            type: DataTypes.INTEGER,
            field: 'ComplianceMonth',
            allowNull: true
        },
        complianceYear: {
            type: DataTypes.INTEGER,
            field: 'ComplianceYear',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'MotorVehicleSecurity',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var MotorVehicleSecurity = model.MotorVehicleSecurity;
    var FrequencyType = model.FrequencyType;
    var PartyRole = model.PartyRole;
    var Loan = model.Loan;
    var MotorVehicleSecurityType = model.MotorVehicleSecurityType;
    var Security = model.Security;

    MotorVehicleSecurity.belongsTo(FrequencyType, {
        as: 'FinanceTermFrequencyType',
        foreignKey: 'FinanceTermFrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurity.belongsTo(PartyRole, {
        as: 'LastUpdatedByPartyRole',
        foreignKey: 'LastUpdatedByPartyRoleID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurity.belongsTo(Loan, {
        as: 'Loan',
        foreignKey: 'LoanID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurity.belongsTo(MotorVehicleSecurityType, {
        as: 'MotorVehicleSecurityType',
        foreignKey: 'MotorVehicleSecurityTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    MotorVehicleSecurity.belongsTo(Security, {
        as: 'Security',
        foreignKey: 'SecurityID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
