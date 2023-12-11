const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Teller, Client, Account } = require('../models');

// Renders the login screen for a teller
router.get('/', async (req, res) => {
    try {
        const loginpage = await Teller.findByPk(req.params.id)
        res.render('login', {
            loginpage
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
})

// login
router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
    }
    res.render('login')
  });

router.get('/homepage', async (req, res) => {
    try {
        
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
})


module.exports = router;