'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('PPSRStatusType', {
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
        description: {
            type: DataTypes.STRING(250),
            field: 'Description',
            allowNull: false
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'PPSRStatusType',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var PPSRStatusType = model.PPSRStatusType;
    var SecurityPPSR = model.SecurityPPSR;

    PPSRStatusType.hasMany(SecurityPPSR, {
        as: 'SecurityPPSRPpsrstatustypeFks',
        foreignKey: 'PPSRStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
