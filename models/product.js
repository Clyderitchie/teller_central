const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {};

Product.init(
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
            // }
        },
        onlineBanking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        creditCards: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'creditCard',
            //     key: 'id'
            // },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;