'use strict';

module.exports = function(sequelize, DataTypes) {
    return sequelize.define('EmploymentStatusTypeBasisTypeRelationship', {
        employmentStatusTypeID: {
            type: DataTypes.INTEGER,
            field: 'EmploymentStatusTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'EmploymentStatusType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        employmentBasisTypeID: {
            type: DataTypes.INTEGER,
            field: 'EmploymentBasisTypeID',
            allowNull: false,
            primaryKey: true,
            references: {
                model: 'EmploymentBasisType',
                key: 'ID'
            },
            onUpdate: 'NO ACTION',
            onDelete: 'NO ACTION'
        },
        active: {
            type: DataTypes.BOOLEAN,
            field: 'Active',
            allowNull: false
        }
    }, {
        schema: 'public',
        tableName: 'EmploymentStatusTypeBasisTypeRelationship',
        timestamps: false
    });
};

module.exports.initRelations = function() {
    delete module.exports.initRelations; // Destroy itself to prevent repeated calls.
    var model = require('../index');
    var EmploymentStatusTypeBasisTypeRelationship = model.EmploymentStatusTypeBasisTypeRelationship;
    var EmploymentBasisType = model.EmploymentBasisType;
    var EmploymentStatusType = model.EmploymentStatusType;

    EmploymentStatusTypeBasisTypeRelationship.belongsTo(EmploymentBasisType, {
        as: 'EmploymentBasisType',
        foreignKey: 'EmploymentBasisTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

    EmploymentStatusTypeBasisTypeRelationship.belongsTo(EmploymentStatusType, {
        as: 'EmploymentStatusType',
        foreignKey: 'EmploymentStatusTypeID',
        onDelete: 'NO ACTION',
        onUpdate: 'NO ACTION'
    });

};
