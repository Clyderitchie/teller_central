const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class BusinessAccount extends Model {};

BusinessAccount.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        businessChecking: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'businessChecking',
                key: 'id'
            },
        },
        businessLoan: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'businessLoan',
                key: 'id'
            },
        },
        businessProducts: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'businessProduct',
                key:'id'
            },
        },
        businessService: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: true,
            references: {
                model: 'businessService',
                key: 'id'
            },
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'businessAccount',
    }
);

module.exports = BusinessAccount;