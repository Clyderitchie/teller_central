const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Account extends Model {};

Account.init(
    {
        account_owner: {
            type: DataTypes.INTEGER,
            references: {
                model: 'client',
                key: 'id'
            },
        },
        checking: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        saving: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        loans: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        products: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        services: {
            type: DataTypes.STRING,
            allowNull: true
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'account',
    });

module.exports = Account