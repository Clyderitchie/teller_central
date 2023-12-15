const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalService extends Model {};

PersonalService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cashManagement: {
            type: DataTypes.INTEGER,
            defaultValue: true,
            allowNull: true,
            references: {
                model: 'cashManagement',
                key: 'id'
            }
        },
        overdraftProtection: {
            type: DataTypes.INTEGER,
            defaultValue: true,
            allowNull: true,
            references: {
                model: 'overdraft',
                key: 'id'
            }
        },
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalService',
    }
);

module.exports = PersonalService;