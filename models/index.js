const Teller = require('./teller');
const Client = require('./client');
const Account = require('./account');

Client.hasMany(Account, {
    foreignKey: 'account_owner',
    onDelete: 'CASCADE'  
});

Account.belongsTo(Client, {
    foreignKey: 'account_owner',
    onDelete: 'CASCADE'
});

module.exports = { Teller, Client, Account }