const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class Overdraft extends Model {};

Overdraft.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        bounceGuard: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        linkedAccount: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        positivePay: {
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
        modelName: 'overdraft',
    } );

module.exports = Overdraft