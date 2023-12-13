const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class BusinessChecking extends Model {};

BusinessChecking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        businessBasic: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        businessGold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        businessPlatinum: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'businessChecking',
    }
);

module.exports = BusinessChecking;