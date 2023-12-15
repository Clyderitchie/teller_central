const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class BusinessClient extends Model {};

BusinessClient.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: false  
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
        accountType: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'businessAccount',
                key: 'id'
            },
        },
        identification: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            references: {
                model: 'identification',
                key: 'id'
            },
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'businessClient',
    }
);

module.exports = BusinessClient;