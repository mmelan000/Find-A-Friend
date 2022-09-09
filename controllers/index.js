const router = require('express').Router();
const apiRoutes = require('./api');
const viewRoutes = require('./views');

router.use('/api', apiRoutes);
router.use('/views', viewRoutes);

module.exports = router;
