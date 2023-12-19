const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class CreditCard extends Model { };

CreditCard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
       
        businessBasic: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [12]
            },
        },
        businessRewards: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [12]
            },
        },
        businessDoublePoints: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [12]
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'creditCard', 
    });

    module.exports = CreditCard;