const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class BusinessService extends Model { };

BusinessService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        overDraftProtection: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'overdraft',
                key: 'id'
            }
        },
        payroll: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'payroll',
                key: 'id'
            },
        },
        cashManagement: {
            type: DataTypes.INTEGER,
            defaultValue: true,
            allowNull: true,
            references: {
                model: 'cashManagement',
                key: 'id'
            },
        },
        remoteCapture: {
            type: DataTypes.INTEGER,
            defaultValue: true,
            allowNull: true,
            references: {
                model: 'remoteCapture',
                key: 'id'
            },
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'businessService',
    }
);

module.exports = BusinessService;