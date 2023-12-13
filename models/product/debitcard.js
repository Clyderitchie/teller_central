const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class DebitCard extends Model { };

DebitCard.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        personalDebitCard: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                len: [12]
            },
        },
        businessDebitCard: {
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
        modelName: 'debitCard', 
    });

    module.exports = DebitCard;