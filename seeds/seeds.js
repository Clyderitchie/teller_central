const sequelize = require('../config/connection');
const { Client, Account, AccountInfo, Teller } = require('../models');

const personalData = require('./personalData.json');
const accountData = require('./accountData.json');
const accountInfoData = require('./accountInfoData.json');
const tellerData = require('./tellerData.json');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });
    
    const account = await AccountInfo.bulkCreate(accountInfoData);

    const personalClient = await Client.bulkCreate(personalData);

    const accountInfo = await Account.bulkCreate(accountData);

    const tellerInfo = await Teller.bulkCreate(tellerData);
    process.exit(0);
};

seedDatabase();