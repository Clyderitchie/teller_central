const sequelize = require('../config/connection');
const { Client, Account, Teller } = require('../models');

const personalData = require('./personalData.json');
const accountData = require('./accountData.json');
const tellerData = require('./tellerData.json');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });
    
    const account = await Account.bulkCreate(accountData);

    const personalClient = await Client.bulkCreate(personalData);

    const tellerInfo = await Teller.bulkCreate(tellerData);
    
    process.exit(0);
};

seedDatabase();