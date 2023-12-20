const router = require('express').Router();
const { Teller } = require('../../models');

//  /api/tellers


router.post('/', async (req, res) => {
  try {
    const userData = await Teller.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id; //copy and paste on all routes
      req.session.logged_in = true;
      req.session.userName = userData.userName; //copy and paste on all routes

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post route for a Teller login
router.post('/login', async (req, res) => {
  try {
    const tellerInfo = await Teller.findOne({ where: { userName: req.body.userName }});

    if(!tellerInfo) {
      res.status(400).json('Incorrect username or password');
      return;
    }

    const tellerPassword = await tellerInfo.checkPassword(req.body.password);

    if(!tellerPassword) {
      res.status(401).json('Unauthorized to login');
      return;
    }

    req.session.save(() => {
      req.session.logged_in = true;


      res.json({ teller: tellerInfo, message: 'You logged in!'});
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err.message);
  }
});

  module.exports = router;