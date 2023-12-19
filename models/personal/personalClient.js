const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalClient extends Model {};

PersonalClient.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                notEmpty: true,
                isAlpha: true
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isEmail: true,
                notEmpty: true,
            },
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
            validate: {
                isNumeric: true,
            }
        },
        accounts: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        products: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        services: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        loanType: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'personalLoan',
                key: 'id'
            },
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