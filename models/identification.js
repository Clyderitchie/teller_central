const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Identification extends Model { };

Identification.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        drivers: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        passport: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        stateId: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        militaryId: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true
        },
        clientIdType: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'client',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'id',
    }
);

module.exports = Identification;