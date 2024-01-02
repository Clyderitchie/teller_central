const Client = require('./client');
const Account = require('./account');
const Teller = require('./teller');
const Identification = require('./identification');

Client.hasMany(Account, {
    foreignKey: 'clientId'
});

Account.belongsTo(Client);

Teller.hasMany(Client, {
    foreignKey: 'clientId'
});

Client.belongsTo(Teller);

Client.hasMany(Identification, {
    foreignKey: 'clientIdType'
});

Identification.belongsTo(Client);

module.exports = { Client, Account, Teller, Identification }