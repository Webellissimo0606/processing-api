'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PmsTermtype', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(50),
            field: 'Name',
            allowNull: false
        },
        termCategoryID: {
            type: DataTypes.INTEGER,
            field: 'TermCategoryID',
            allowNull: false
        },
        termTypeCode: {
            type: DataTypes.INTEGER,
            field: 'TermTypeCode',
            allowNull: true
        },
        frequencyTypeID: {
            type: DataTypes.INTEGER,
            field: 'FrequencyTypeID',
            allowNull: false
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
        v8ID: {
            type: DataTypes.INTEGER,
            field: 'V8ID',
            allowNull: true
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'pms_TermType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PmsTermtype = model.PmsTermtype;

};
