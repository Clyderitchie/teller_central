const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Products extends Model { };

Products.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        debitCard: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
        },
        creditCard: {
            type: DataTypes.INTEGER,
            allowNull: true,
            unique: true,
        },
        clientIdProduct: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
            references: {
                model: 'client',
                key: 'id'
            },
        }
    },
    { sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
    );

module.exports = Products;