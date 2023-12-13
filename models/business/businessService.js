const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class BusinessService extends Model { };

BusinessService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        overDraftProtection: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'overdraftProtection',
            //     key: 'id'
            // }
        },
        payroll: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'businessService',
    }
);

module.exports = BusinessService;