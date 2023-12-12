const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BusinessLoan extends Model { };

BusinessLoan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        sbaLoan: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        businessLineOfCredit: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        smallEquipment: {
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
        modelName: 'businessAccount',
    }
);

module.exports = BusinessLoan;