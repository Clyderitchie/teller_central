const Client = require('../models/personalAccounts/client');
const Account = require('../models/personalAccounts/account');

Client.hasMany(Account, {
    foreignKey: 'clientId',
    onDelete: 'SET NULL'
});

Account.belongsTo(Client);



module.exports = { Client, Account };