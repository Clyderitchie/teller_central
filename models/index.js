// Business table imports
const BusinessAccount = require('../models/business/businessAccount');
const BusinessChecking = require('../models/business/businessChecking');
const BusinessLoan = require('../models/business/businessLoan');
const BusinessProduct = require('../models/business/businessProduct');
const BusinessService = require('../models/business/businessService');
const BusinessClient = require('../models/clients/businessClient');
// Employee table imports
const Teller = require('../models/employee/teller');
// Personal table imports
const PersonalAccount = require('../models/personal/personalAccount');
const PersonalChecking = require('../models/personal/personalChecking');
const PersonalClient = require('../models/clients/personalClient');
const PersonalLoan = require('../models/personal/Personalloan');
const PersonalProduct = require('../models/personal/personalProduct');
const PersonalSaving = require('../models/personal/personalSaving');
const PersonalService = require('../models/personal/personalService');
// Product table imports
// const CreditCard = require('../models/product/creditCard');
// const DebitCard = require('../models/product/debitcard');
// const OnlineBanking = require('../models/product/onlineBanking');
// const SafetyDepositBox = require('../models/product/safetyDepositBox');
// Service table imports 
// const CashManagement = require('../models/service/cashManagement');
// const RemoteCapture = require('../models/service/remoteCapture');
// const Payroll = require('../models/service/payroll');
// const Overdraft = require('../models/service/overdraft');

// Business table associations
BusinessClient.hasMany(BusinessAccount, {
    foreignKey: 'businessAccount',
    onDelete: 'CASCADE'
});

BusinessAccount.belongsTo(BusinessClient, {
    foreignKey: 'businessAccount',
    onDelete: 'CASCADE'
});

// Personal table associations
PersonalClient.hasMany(PersonalAccount, {
    foreignKey: 'personalAccount',
    onDelete: 'CASCADE'
});

PersonalAccount.belongsTo(PersonalClient, {
    foreignKey: 'personalpersonalAccountAccount',
    onDelete: 'CASCADE'
})

module.exports = { BusinessAccount, BusinessChecking, BusinessLoan, BusinessProduct, BusinessService, BusinessClient, PersonalClient, Teller, PersonalAccount, PersonalChecking, PersonalLoan, PersonalProduct, PersonalSaving, PersonalService };