const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalProduct extends Model { };

PersonalProduct.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        personalDebitCard: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [12],
                isNumeric: true,
            },
        },
        basicCashBack: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [12],
                isNumeric: true,
            },
        },
        travelRewards: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [12],
                isNumeric: true,
            },
        },
        doubleThePoints: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                len: [12],
                isNumeric: true,
            },
        },
        safetyDepositBox: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'safetyDepositBox',
            //     key: 'id'
            // },
        },
        client_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'personalClient',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalProduct',
    }
);

module.exports = PersonalProduct;