const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Client, Account, Teller } = require('../models');

// Login page for a teller to log in
router.get('/', async (req, res) => {
    try {
        const tellerData = await Teller.findAll();
        const teller = tellerData.map(p => p.get({ plain: true }));
        console.log("Looking for id of teller", tellerData);
        res.render('login', {
            ...teller,
            logged_in: req.session.logged_in,
            user_name: req.session.userName,
            teller_id: req.session.teller_id
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

// Renders the homepage handlebar 
router.get('/homepage', async (req, res) => {
    try {
        const tellerData = await Teller.findAll({
            include: {
                model: Client,
                attributes: ['name', 'age']
            }
        });
        const teller = tellerData.map(p => p.get({ plain: true }));
        console.log("Looking for id of teller", tellerData);
        res.render('homepage', {
            ...teller,
            logged_in: req.session.logged_in,
            user_name: req.session.userName,
            teller_id: req.session.teller_id
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
});

module.exports = router;