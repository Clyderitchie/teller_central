const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalProduct extends Model {};

PersonalProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        personalDebitCards: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'debitCard',
            //     key: 'id'
            // }
        },
        personalCreditCards: {
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
            allowNull: true
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