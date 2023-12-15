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
const CreditCard = require('../models/product/creditCard');
const DebitCard = require('../models/product/debitcard');
const OnlineBanking = require('../models/product/onlineBanking');
const SafetyDepositBox = require('../models/product/safetyDepositBox');
// Service table imports 
const CashManagement = require('../models/service/cashManagement');
const RemoteCapture = require('../models/service/remoteCapture');
const Payroll = require('../models/service/payroll');
const Overdraft = require('../models/service/overdraft');

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
    foreignKey: 'personalAccount',
    onDelete: 'CASCADE'
});

// Product table associations
// Credit card associations
PersonalProduct.hasMany(CreditCard, {
    foreignKey: 'creditCard',
    as: 'creditCardType',
    onDelete: 'CASCADE'
});

CreditCard.belongsTo(PersonalProduct, {
    foreignKey: 'creditCard',
    as: 'creditCardType',
    onDelete: 'CASCADE'
});

BusinessProduct.hasMany(CreditCard, {
    foreignKey: 'creditCard',
    as: 'businessCreditCardType',
    onDelete: 'CASCADE'
});

CreditCard.belongsTo(BusinessProduct, {
    foreignKey: 'creditCard',
    as: 'businessCreditCardType',
    onDelete: 'CASCADE'
});

// Debit card associations
PersonalProduct.hasMany(DebitCard, {
    foreignKey: 'debitCard',
    as: 'personalDebitCard',
    onDelete: 'CASCADE'
});

DebitCard.belongsTo(PersonalProduct, {
    foreignKey: 'debitCard',
    as: 'debitCardPersonal',
    onDelete: 'CASCADE'
});

BusinessProduct.hasMany(DebitCard, {
    foreignKey: 'debitCard',
    as: 'busDebitCard',
    onDelete: 'CASCADE'
});

DebitCard.belongsTo(BusinessProduct, {
    foreignKey: 'debitCard',
    as: 'debitCardBus',
    onDelete: 'CASCADE'
});

// Online banking associations
BusinessProduct.hasMany(OnlineBanking, {
    foreignKey: 'onlineBanking',
    as: 'busOnlineBanking',
    onDelete: 'CASCADE'
});

OnlineBanking.belongsTo(BusinessProduct, {
    foreignKey: 'onlineBanking',
    as: 'onlineBankingBus',
    onDelete: 'CASCADE'
});

PersonalProduct.hasMany(OnlineBanking, {
    foreignKey: 'onlineBanking',
    as: 'perOnlineBanking',
    onDelete: 'CASCADE'
});

OnlineBanking.belongsTo(PersonalProduct, {
    foreignKey: 'onlineBanking',
    as: 'onlineBankingPer',
    onDelete: 'CASCADE'
});

// Safety deposit box associations
PersonalProduct.hasMany(SafetyDepositBox, {
    foreignKey: 'safetyDepositBox',
    as: 'SDB',
    onDelete: 'CASCADE'
});

SafetyDepositBox.belongsTo(PersonalProduct, {
    foreignKey: 'safetyDepositBox',
    as: 'SDB',
    onDelete: 'CASCADE'
});

// Service table associations
// Cash management associations
PersonalService.hasMany(CashManagement, {
    foreignKey: 'cashManagement',
    as: 'perCashManagement',
    onDelete: 'CASCADE'
});

CashManagement.belongsTo(PersonalService, {
    foreignKey: 'cashManagement',
    as: 'cashManagementPer',
    onDelete: 'CASCADE'
});

BusinessService.hasMany(CashManagement, {
    foreignKey: 'cashManagement',
    as: 'busCashManagement',
    onDelete: 'CASCADE'
});

CashManagement.belongsTo(BusinessService, {
    foreignKey: 'cashManagement',
    as: 'cashManagementBus',
    onDelete: 'CASCADE'
});

// Remote Capture associations
BusinessService.hasMany(RemoteCapture, {
    foreignKey: 'remoteCapture',
    as: 'busRemoteCapture',
    onDelete: 'CASCADE'
});

RemoteCapture.belongsTo(BusinessService, {
    foreignKey: 'remoteCapture',
    as: 'remoteCaptureBus',
    onDelete: 'CASCADE'
});

// Payroll associations
BusinessService.hasMany(Payroll, {
    foreignKey: 'payroll',
    as: 'busPayrool',
    onDelete: 'CASCADE'
});

Payroll.belongsTo(BusinessService, {
    foreignKey: 'payroll',
    as: 'payroolBus',
    onDelete: 'CASCADE'
});

// Overdraft associations
BusinessService.hasMany(Overdraft, {
    foreignKey: 'overdraft',
    as: 'busOverdraft',
    onDelete: 'CASCADE'
});

Overdraft.belongsTo(BusinessService, {
    foreignKey: 'overdraft',
    as: 'overdraftBus',
    onDelete: 'CASCADE'
});

PersonalService.hasMany(Overdraft, {
    foreignKey: 'overdraft',
    as: 'perOverdraft',
    onDelete: 'CASCADE'
});

Overdraft.belongsTo(PersonalService, {
    foreignKey: 'overdraft',
    as: 'overdraftPer',
    onDelete: 'CASCADE'
});

module.exports = {
    BusinessAccount, BusinessChecking, BusinessLoan, BusinessProduct, BusinessService, BusinessClient, PersonalClient, Teller, PersonalAccount, PersonalChecking, PersonalLoan, PersonalProduct, PersonalSaving, PersonalService, CreditCard, DebitCard, OnlineBanking, SafetyDepositBox, CashManagement, RemoteCapture,
    Payroll, Overdraft
};