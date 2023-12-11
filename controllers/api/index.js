const router = require('express').Router();
const tellerRoutes = require('./tellerRoutes');

router.use('/tellers', tellerRoutes);


module.exports = router;