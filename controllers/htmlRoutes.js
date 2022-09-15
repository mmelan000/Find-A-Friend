const router = require('express').Router();
const withAuth = require('../utils/authorize.js');
const { User, Review, Listing, Category } = require('../models');
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
  const listingData = await Listing.findAll().catch((err) => {
    res.json(err);
  });

  const cateData = await Category.findAll().catch((err) => {
    res.json(err);
  });
  const categories = cateData.map((category) => category.get({ plain: true }));
  const listings = listingData.map((listing) => listing.get({ plain: true }));

  res.render('listings', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
    listings,
    categories,
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
      loggedIn: req.session.loggedIn,
      user: req.session.user_id,
      listing,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});

// renders post page
router.get('/post', async (req, res) => {
  res.render('post', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
  });
});
// renders account
router.get('/profile/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    if (!userData) {
      res.status(404).json({ message: 'There is no user with that id!' });
    }
    const user = userData.get({ plain: true });
    res.render('profile', {
      loggedIn: req.session.loggedIn,
      user: req.session.user_id,
      user,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});
// friends
router.get('/friends', async (req, res) => {
  const friendList = await User.findAll().catch((err) => {
    res.json(err);
  });
  const friends = friendList.map((friend) => friend.get({ plain: true }));
  res.render('friends', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
    friends,
  });
});

module.exports = router;
