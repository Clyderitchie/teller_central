const router = require('express').Router();
const { Teller } = require('../../models');

//  /api/teller


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


//  Login for a teller route
router.post('/login', async (req, res) => {
    try {
      const tellerData = await Teller.findOne({ where: { userName: req.body.userName } });
  
      if (!tellerData) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      const validPassword = await tellerData.checkPassword(req.body.password);
  
      if (!validPassword) {
        res
          .status(400)
          .json({ message: 'Incorrect email or password, please try again' });
        return;
      }
  
      // req.session.save(() => {
      //   req.session.user_id = tellerData.id;
      //   req.session.logged_in = true;
      //   req.session.userName = tellerData.userName;
        
      //   res.json({ user: tellerData, message: 'You are now logged in!' });
      // });
  
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;