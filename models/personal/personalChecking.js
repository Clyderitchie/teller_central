const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalChecking extends Model {};

PersonalChecking.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        startUp: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        basic: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        gold: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        platinum: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true
        },
        moneyMarket: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'moneymarket',
            //     key: 'id'
            // },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalChecking',
    }
);

module.exports = PersonalChecking;