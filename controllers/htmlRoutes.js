const router = require('express').Router();
const withAuth = require('../utils/authorize.js');
const { User, Review, Listing, Category } = require('../models');
const sequelize = require('../config/connection.js');
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
  //req.query.day req.query.event
  try {
    var whereStatement = {};
    if (req.query.day && req.query.category) {
      whereStatement.availabilty = req.query.day;
      whereStatement.category_id = req.query.category;
    }
    if (req.query.day && !req.query.category) {
      whereStatement.availabilty = req.query.day;
    }
    if (!req.query.day && req.query.category) {
      whereStatement.category_id = req.query.category;
    }
    if (!req.query.day && !req.query.category) {
      whereStatement.id != null;
    }
    const listingData = await Listing.findAll({
      where: whereStatement,
    }).catch((err) => {
      res.json(err);
    });
    const listings = listingData.map((listing) => listing.get({ plain: true }));
    const cateData = await Category.findAll().catch((err) => {
      res.json(err);
    });
    const categories = cateData.map((category) =>
      category.get({ plain: true })
    );
    res.render('listings', {
      loggedIn: req.session.loggedIn,
      user: req.session.user_id,
      listings,
      categories,
    });
  } catch (error) {
    res.status(500).json();
  }
});
// renders individual listings
router.get('/listings/:id', withAuth, async (req, res) => {
  try {
    const listingData = await Listing.findByPk(req.params.id, {
      include: [{ model: User }],
    });
    if (!listingData) {
      res.status(404).json({ message: 'This is no listing with that id!' });
    }

    const listing = listingData.get({ plain: true });

    console.log(listing);
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
router.get('/post', withAuth, async (req, res) => {
  try {
    const cateData = await Category.findAll().catch((err) => {
      res.json(err);
    });
    const categories = cateData.map((category) =>
      category.get({ plain: true })
    );
    res.render('post', {
      loggedIn: req.session.loggedIn,
      user: req.session.user_id,
      categories,
    });
  } catch (error) {
    res.status(500).json(err);
  }
});
// renders account
router.get('/profile/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        { model: Listing },
        { model: Review, as: 'reviews', attributes: [] },
      ],
      attributes: {
        include: [
          [sequelize.fn('AVG', sequelize.col('reviews.score')), 'avgScore'],
        ],
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'There is no user with that id!' });
    }

    const user = userData.get({ plain: true });
    user.avgScore = user.avgScore * 20;
    console.log(user);
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
  const friends = await friendList.map((friend) => friend.get({ plain: true }));
  console.log(friends);
  res.render('friends', {
    loggedIn: req.session.loggedIn,
    user: req.session.user_id,
    friends,
  });
});

module.exports = router;
