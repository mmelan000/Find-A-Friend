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

router.get('/:id', async (req, res) => {
  try {
    const singleReview = await User.findOne({
      where: { id: req.params.id },
    });
    return res.status(200).json(singleReview);
  } catch (error) {
    if (req.status(404)) {
      return res.status(404).json(error);
    }
  }
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
