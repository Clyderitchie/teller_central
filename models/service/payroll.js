const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Payroll extends Model { };

Payroll.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        directDepositSupport: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        paperStubs: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'payroll',
    });

module.exports = Payroll;