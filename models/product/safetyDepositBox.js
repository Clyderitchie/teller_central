const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class SafetyDepositBox extends Model {};

SafetyDepositBox.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        small: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        large: {
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
        modelName: 'safetyDepositBox',
    });

module.exports = SafetyDepositBox;