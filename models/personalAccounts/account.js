const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Account extends Model { };

Account.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        checkingType: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        savingType: {
            type: DataTypes.STRING,
            allowNull: true
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'client',
                key: 'id'
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'account'
    });


module.exports = Account;