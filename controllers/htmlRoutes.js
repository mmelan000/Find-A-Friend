const router = require('express').Router();
const withAuth = require('../utils/authorize.js');
// renders homepage
router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders signup page
router.get('/signup', async (req, res) => {
  res.render('signup', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders login page
router.get('/login', async (req, res) => {
  res.render('login', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders listings page
router.get('/listings', async (req, res) => {
  res.render('listings', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders profile page
router.get('/profile', withAuth, async (req, res) => {
  res.render('signup', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders post page
router.get('/post', withAuth, async (req, res) => {
  res.render('post', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders account
router.get('/account', async (req, res) => {
  res.render('account', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});

module.exports = router;
