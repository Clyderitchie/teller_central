const router = require('express').Router();
const withAuth = require('../utils/auth');
const { PersonalClient, PersonalAccount, PersonalProduct, PersonalService, PersonalLoan, AccountInfo } = require('../models');

// Renders the login screen for a teller
router.get('/', async (req, res) => {
    try {
        const homepage = await AccountInfo.findAll({
            include: [{
                model: PersonalClient,
                as: 'clients',
                attributes: ['name'],
            },
            {
                model: PersonalAccount,
                as: 'client_accounts'
            }],
        });
        console.log("HomePage", homepage)
        const homepageData = homepage.map(info => ({
            account_owner: info.client.name,
            account_type: info.account.account_type,
            balance: info.balance,
        }));
        console.log("homepageData", homepageData);
        res.render('homepage', {
            homepageData
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

router.get('/clients/:id', async (req, res) => {
    try {
        const clientData = await PersonalClient.findByPk(req.params.id, {
            include: {
                model: PersonalAccount
            }
        });
        const client = clientData.get({ plain: true });
        console.log('client', client);
        res.render('singleClient', {
            ...client
        })
    } catch (err) {
        console.log(err.message);
        res.status(500).json(err);
    }
})


module.exports = router;