const BusinessAccount = require('../models/business/businessAccount');
const BusinessChecking = require('../models/business/businessChecking');
const BusinessLoan = require('../models/business/businessLoan');
const BusinessProduct = require('../models/business/businessProduct');
const BusinessService = require('../models/business/businessService');
// Clients table imports
const BusinessClient = require('../models/clients/businessClient');
const PersonalClient = require('../models/clients/personalClient');
// Employee table imports
// Personal table imports
// Product table imports
// Service table imports 

// Business table associations
BusinessClient.hasMany(BusinessAccount, {
    foreignKey: 'businessAccount',
    onDelete: 'CASCADE'
});

BusinessAccount.belongsTo(BusinessClient, {
    foreignKey: 'businessAccount',
    onDelete: 'CASCADE'
});

module.exports = { BusinessAccount, BusinessChecking, BusinessLoan, BusinessProduct, BusinessService, BusinessClient, PersonalClient };