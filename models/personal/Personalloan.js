const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalLoan extends Model { };

PersonalLoan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        lineOfCredit: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
            }
        },
        mortgage: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
            }
        },
        auto: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
            }
        },
        heloc: {
            type: DataTypes.INTEGER,
            allowNull: true,
            validate: {
                isNumeric: true,
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalLoan',
    }
);

module.exports = PersonalLoan;