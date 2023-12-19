const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');


class Teller extends Model { };


Teller.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlpha: true
            },
        },
        branchLocation: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            },
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                len: [10]
            }
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'teller'
    });

module.exports = Teller