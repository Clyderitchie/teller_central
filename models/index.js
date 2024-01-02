const Client = require('./client');
const Account = require('./account');
const Teller = require('./teller');
const Identification = require('./identification');
const Products = require('./products')

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

Client.hasMany(Products, {
    foreignKey: 'clientIdProduct'
});

Products.belongsTo(Client);

module.exports = { Client, Account, Teller, Identification, Products };