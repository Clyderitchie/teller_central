const sequelize = require('../config/connection');
const { PersonalClient, PersonalAccount, PersonalLoan, PersonalProduct, PersonalService, AccountInfo } = require('../models');

const personalData = require('./personalData.json');
const accountData = require('./accountInfoData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const personalClient = await PersonalClient.bulkCreate(personalData);

    // const accountInfo = await AccountInfo.bulkCreate(accountData);


    process.exit(0);
};

seedDatabase();