const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class RemoteCapture extends Model { };

RemoteCapture.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        deviceTotal: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        basic: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
        },
        gold: {
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
        modelName: 'remoteCapture',
    });

module.exports = RemoteCapture;