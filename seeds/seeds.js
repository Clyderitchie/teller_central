const sequelize = require('../config/connection');
const { Teller, Client, Account } = require('../models');

const tellerData = require('./teller.json');
const clientData = require('./clientData.json');
const accountData = require('./account.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const tellers = await Teller.bulkCreate(tellerData, {
        individualHooks: true,
        returning: true,
    });

    const clients = await Client.bulkCreate(clientData);

    const account = await Account.bulkCreate(accountData);

    
    process.exit(0);
};

seedDatabase();