'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsProgramproductinformationByprogramproductpricingid', {
        programProductPricingID: {
            type: DataTypes.INTEGER,
            field: 'ProgramProductPricingID',
            allowNull: false
        },
        termTypeName: {
            type: DataTypes.STRING(50),
            field: 'TermTypeName',
            allowNull: true
        },
        type: {
            type: DataTypes.STRING(10),
            field: 'Type',
            allowNull: true
        },
        loanProduct: {
            type: DataTypes.STRING,
            field: 'LoanProduct',
            allowNull: true
        },
        loanDescription: {
            type: DataTypes.STRING,
            field: 'LoanDescription',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'pms_ProgramProductInformation_ByProgramProductPricingID',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsProgramproductinformationByprogramproductpricingid = model.PmsProgramproductinformationByprogramproductpricingid;

};
