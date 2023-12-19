const PersonalClient = require('../models/personal/personalClient');
const PersonalAccount = require('../models/personal/personalAccount');
const PersonalLoan = require('../models/personal/PersonalLoan');
const PersonalProduct = require('../models/personal/personalProduct');
const PersonalService = require('../models/personal/personalService');
const AccountInfo = require('../models/personal/accountInfo');

// My goal for these two associations is to have the AccountInfo table (junction table) to store the information of the account owner (personalClient name column),
// and the accountId (personalAccount accounts, storing as string to store account types name), and for the final column of the AccountInfo table 
// I would like the balance column to simply store the balance of each of the users accounts that they have
// Example: Account_Owner: Dale Ritchie
// accountId, Basic and Savings
// Balances: $1,500 in basic and $3,000 in the savings account
// Is this possible to do with a junction table or do I need to back to the belongs to many and belongsTo associations?
PersonalClient.belongsToMany(PersonalAccount, {
    through: 'AccountInfo',
    foreignKey: 'clientId',
    as: 'client_accounts',
    sourceKey: 'accounts' // SourceKey has a default primary for PersonalAccount and different key for PersonalClient
});

PersonalAccount.belongsToMany(PersonalClient, {
    through: 'AccountInfo',
    foreignKey: 'accountId',
    as: 'clients',
    targetKey: 'accounts' // TargetKey has different primary for PersonalAccount and default for PersonalClient
});

// AccountInfo.belongsTo(PersonalClient, {
//     foreignKey: 'accountId',
//     as: 'clients'
// });

// AccountInfo.belongsTo(PersonalAccount, {
//     foreignKey: 'clientId',
//     as: 'client_accounts'
// });


// PersonalClient.hasMany(PersonalAccount, {
//     foreignKey: 'account_id',
//     onDelete: 'SET NULL',
// });

// PersonalAccount.belongsTo(PersonalClient);

// PersonalClient.hasMany(PersonalProduct, {
//     foreignKey: 'client_id',
//     onDelete: 'SET NULL',
// });

// PersonalProduct.belongsTo(PersonalClient);

// PersonalClient.hasMany(PersonalService, {
//     foreignKey: 'client_id',
//     onDelete: 'SET NULL'
// });

// PersonalService.belongsTo(PersonalClient);

// PersonalClient.hasMany(PersonalLoan, {
//     foreignKey: 'personalLoan',
//     onDelete: 'SET NULL'
// });

// PersonalLoan.belongsTo(PersonalClient, {
//     foreignKey: 'personalLoan',
//     onDelete: 'SET NULL'
// });



module.exports = { PersonalClient, PersonalAccount, PersonalLoan, PersonalProduct, PersonalService, AccountInfo };