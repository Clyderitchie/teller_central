const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Loan extends Model { };

Loan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        lineOfCredit: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false
        },
        mortgage: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        auto: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        heloc: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'loan',
    }
);

module.exports = Loan;