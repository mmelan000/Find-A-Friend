const router = require('express').Router();
const { User, Review, Listing, Category } = require('../../models');

// The `/api/review` endpoint

router.get('/', async (req, res) => {
  try {
    const allReviews = await Review.findAll({
      include: ['reviewer', 'reviewee'],
    });
    return res.json(allReviews);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/:id', (req, res) => {});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
