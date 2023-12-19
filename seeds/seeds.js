const sequelize = require('../config/connection');
const { Client, Account } = require('../models');

const personalData = require('./personalData.json');
const accountData = require('./accountData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const personalClient = await Client.bulkCreate(personalData);

    const accountInfo = await Account.bulkCreate(accountData);


    process.exit(0);
};

seedDatabase();