const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class OnlineBanking extends Model { };

OnlineBanking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            },
        },
        password: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [8]
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'onlineBanking',
    }
);

module.exports = OnlineBanking;