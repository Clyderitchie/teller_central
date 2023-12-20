const sequelize = require('../config/connection');
const { Client, Account, Teller } = require('../models');

const clientData = require('./clientData.json');
const accountData = require('./accountData.json');
const tellerData = require('./tellerData.json');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });
    
    const client = await Client.bulkCreate(clientData);

    const account = await Account.bulkCreate(accountData);

    const teller = await Teller.bulkCreate(tellerData);

    process.exit(0);
};

seedDatabase();