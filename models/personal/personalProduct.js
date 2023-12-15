const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalProduct extends Model { };

PersonalProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        debitCards: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'debitCard',
            //     key: 'id'
            // },
        },
        creditCards: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'creditCard',
            //     key: 'id'
            // },
        },
        onlineBanking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'onlineBanking',
            //     key: 'id'
            // },
        },
        safetyDepositBox: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'safetyDepositBox',
            //     key: 'id'
            // },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalProduct',
    }
);

module.exports = PersonalProduct;