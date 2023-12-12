const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Service extends Model {};

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cashManagement: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true,
            // references: {
            //     model: 'cashManagement',
            //     key: 'id'
            // }
        },
        overdraftProtection: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true,
            // references: {
            //     model: 'overdraftProtection',
            //     key: 'id'
            // }
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'service',
    }
);

module.exports = Service;