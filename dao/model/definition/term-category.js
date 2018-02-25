'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('TermCategory', {
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
        ultracsCode: {
            type: DataTypes.STRING,
            field: 'UltracsCode',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'TermCategory',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var TermCategory = model.TermCategory;
    var TermType = model.TermType;
    var FrequencyType = model.FrequencyType;

    TermCategory.hasMany(TermType, {
        as: 'TermTypeTermcategoryFks',
        foreignKey: 'TermCategoryID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    TermCategory.belongsToMany(FrequencyType, {
        as: 'TermTypeFrequencyTypes',
        through: TermType,
        foreignKey: 'TermCategoryID',
        otherKey: 'FrequencyTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
