const Client = require('../models/personalAccounts/client');
const Account = require('../models/personalAccounts/account');
const AccountInfo = require('../models/personalAccounts/accountInfo');
const Teller = require('../models/employee/teller');

Client.hasMany(Account, {
    foreignKey: 'clientId',
    onDelete: 'SET NULL'
});

Account.belongsTo(Client);

AccountInfo.hasMany(Account, {
    foreignKey: 'account_id',
    onDelete: 'SET NULL'
});

Account.belongsTo(AccountInfo);

AccountInfo.hasOne(Client, {
    foreignKey: 'client_id',
    onDelete: 'SET NULL'
});

Client.belongsTo(AccountInfo);

module.exports = { Client, Account, AccountInfo, Teller };