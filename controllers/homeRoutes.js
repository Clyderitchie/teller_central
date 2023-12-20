const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Client, Account, Teller } = require('../models');

router.get('/', async (req, res) => {
    try {
      const tellerData = await Teller.findAll();
      const teller = tellerData.map(p => p.get({ plain: true }));
      res.render('login', {
        teller
      })  
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
});

// Renders the homepage handlebar 
router.get('/homepage', async (req, res) => {
    try {
        const client = await Client.findAll({
            include:
            {
                model: Account,
                attributes: ['checkingType', 'savingType', 'balanceChecking'],
            },
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