const router = require('express').Router();
const { User, Review, Listing, Category } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll();
    return res.status(200).json(allUsers);
    //
  } catch (error) {
    return res.status(500).json(error);

    //500 error
  }
});

//404 error for user not existing
router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
