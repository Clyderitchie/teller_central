const sequelize = require('../config/connection');
const { Client, Account, Teller, Identification, Products } = require('../models');

const clientData = require('./clientData.json');
const accountData = require('./accountData.json');
const tellerData = require('./tellerData.json');
const identificationData = require('./identificationData.json');
const productsData = require('./productsData.json');

const seedDatabase = async () => {

    await sequelize.sync({ force: true });

    const client = await Client.bulkCreate(clientData);

    const account = await Account.bulkCreate(accountData);

    const teller = await Teller.bulkCreate(tellerData, {
        individualHooks: true,
        returning: true,
    });

    const identification = await Identification.bulkCreate(identificationData);

    const products = await Products.bulkCreate(productsData);

    
    process.exit(0);
};

seedDatabase();