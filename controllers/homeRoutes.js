const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Client, Account, Teller } = require('../models');

// Login page for a teller to log in
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

// login
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
    }
    res.render('login')
});

// Renders the homepage handlebar 
router.get('/homepage/:id', async (req, res) => {
    try {
        const tellerData = await Teller.findByPk(req.params.id);
        const teller = tellerData.get({ plain: true });
        res.render('homepage', {
            ...teller
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
});

module.exports = router;