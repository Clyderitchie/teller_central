const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Client, Account, AccountInfo } = require('../models');

// Renders the homepage handlebar and able to access
// the account model to also have that data on the front end
router.get('/', async (req, res) => {
    try {
        const client = await Client.findAll({
            include: [
                {
                    model: Account,
                    attributes: ['checkingType', 'savingType'],
                },
                {
                    model: AccountInfo,
                    attributes: ['client_id', 'account_id', 'balance']
                }
            ],
        });
        const clients = client.map(p => p.get({ plain: true }));
        console.log('clients', clients);
        res.render('homepage', {
            clients
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
});

// login
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    }
    res.render('login')
});

module.exports = router;