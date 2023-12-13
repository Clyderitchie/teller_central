const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalAccount extends Model { };

PersonalAccount.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        personalChecking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        personalSaving: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        personalLoans: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        personalProducts: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        personalServices: {
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalAccount',
    });

module.exports = PersonalAccount