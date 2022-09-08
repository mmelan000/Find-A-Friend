const router = require('express').Router();
const { User, Review, Listing, Category } = require('../../models');

// The `/api/user` endpoint

router.get('/', async (req, res) => {
  try {
    const allUsers = await User.findAll({
      include: [{ model: Review, as: 'review' }],
    });
    return res.json(allUsers);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
