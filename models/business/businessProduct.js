const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class BusinessProduct extends Model {};

BusinessProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        businessDebitCard: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'debitCard',
                key: 'id'
            },
        },
        businessCreditCard: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'creditCard',
                key: 'id'
            },
        },
        businessOnlineBanking: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'onlineBanking',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'businessAccount',
    }
);

module.exports = BusinessProduct;