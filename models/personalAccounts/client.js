const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Client extends Model { };

Client.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isAlpha: true,
            },
        },
        phoneNumber: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            unique: false,
            validate: {
                isNumeric: true,
                len: [10]
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'client'
    });

module.exports = Client;