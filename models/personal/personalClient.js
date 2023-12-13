const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalClient extends Model {};

PersonalClient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
            validate: {
                isEmail: true
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        identification: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalClient',
    }
);

module.exports = PersonalClient;