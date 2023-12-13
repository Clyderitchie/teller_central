const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class CashManagement extends Model { };

CashManagement.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        privateBanking: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true,
        },
        treasuryManagement: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'cashManagement',
    }
);

module.exports = CashManagement;