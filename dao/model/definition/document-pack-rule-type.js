'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('DocumentPackRuleType', {
        iD: {
            type: DataTypes.INTEGER,
            field: 'ID',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(150),
            field: 'Name',
            allowNull: false
        },
        documentGenerationID: {
            type: DataTypes.INTEGER,
            field: 'DocumentGenerationID',
            allowNull: true
        }
    }, {
        schema: 'public',
        tableName: 'DocumentPackRuleType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var DocumentPackRuleType = model.DocumentPackRuleType;

};
