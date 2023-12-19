const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalAccount extends Model { };

PersonalAccount.init(
    {
       accounts: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: false,
       },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'personalAccount',
    });

module.exports = PersonalAccount