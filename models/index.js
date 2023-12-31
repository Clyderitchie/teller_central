const Client = require('./client');
const Account = require('./account');
const Teller = require('./teller');

Client.hasMany(Account, {
    foreignKey: 'clientId'
});

Account.belongsTo(Client);

Teller.hasMany(Client, {
    foreignKey: 'clientId'
});

Client.belongsTo(Teller);

module.exports = { Client, Account, Teller }