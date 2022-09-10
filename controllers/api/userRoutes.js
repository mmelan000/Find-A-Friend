const router = require('express').Router();
const { User, Review, Listing, Category } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
});

//404 error for user not existing
router.get('/:id', async (req, res) => {
  try {
    const singleUser = await User.findOne({
      where: { id: req.params.id },
    });
    return res.status(200).json(singleUser);
  } catch (error) {
    if (req.status(404)) {
      return res.status(404).json(error);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/:id', async (req, res) => {
  if (req.session.logged_in) {
    try {
      User.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json();
    } catch (err) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
  }
});

router.delete('/:id', (req, res) => {});

module.exports = router;
