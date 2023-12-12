const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Saving extends Model { };

Saving.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        basic: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        highYield: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        platinum: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        cd_type: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model 'cd',
            //     key: 'id'
            // }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'saving',
    }
);

module.exports = Saving;