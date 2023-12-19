const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class AccountInfo extends Model {};

AccountInfo.init(
    {
        account_owner: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountId: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: 'personalClient',
                key: 'accounts'
            }
        },
        balance: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'accountInfo',
    });

    module.exports = AccountInfo;