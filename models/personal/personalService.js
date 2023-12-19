const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/connection');

class PersonalService extends Model { };

PersonalService.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        onlineBanking: {
            type: DataTypes.INTEGER,
            defaultValue: false,
            allowNull: true,
            // references: {
            //     model: 'onlineBanking',
            //     key: 'id'
            // },
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
        modelName: 'personalService',
    }
);

module.exports = PersonalService;