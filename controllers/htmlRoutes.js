const router = require('express').Router();
const withAuth = require('../utils/authorize.js');
const { User, Review, Listing, Category } = require('../models');
// renders homepage
router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
  });
});
// renders signup page
router.get('/signup', async (req, res) => {
  res.render('signup', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
  });
});
// renders login page
router.get('/login', async (req, res) => {
  res.render('login', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
  });
});
// renders listings page
router.get('/listings', async (req, res) => {
  const listingData = await Listing.findAll().catch((err) => {
    res.json(err);
  });
  const listings = listingData.map((listing) => listing.get({ plain: true }));
  res.render('listings', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
    listings,
  });
});
// renders individual listings
router.get('/listings/:id', withAuth, async (req, res) => {
  try {
    const listingData = await Listing.findByPk(req.params.id);
    if (!listingData) {
      res.status(404).json({ message: 'This is no listing with that id!' });
    }
    const listing = listingData.get({ plain: true });
    res.render('activity', {
      loggedIn: req.session.logged_in,
      user: req.session.user_id,
      listing,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});
// renders profile page
router.get('/user/:id', withAuth, async (req, res) => {
  res.render('user', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
  });
});
// renders post page
router.get('/post', withAuth, async (req, res) => {
  res.render('post', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
  });
});
// renders account
router.get('/profile', async (req, res) => {
  res.render('profile', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
  });
});
// friends
router.get('/friends', async (req, res) => {
  res.render('friends', {
    loggedIn: req.session.logged_in,
    user: req.session.user_id,
  });
});

module.exports = router;
