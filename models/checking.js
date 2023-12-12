const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Checking extends Model {};

Checking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        startUp: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        basic: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        gold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        platinum: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        mm_type: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'moneymarket',
            //     key: 'id'
            // },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'checking',
    }
);

module.exports = Checking;