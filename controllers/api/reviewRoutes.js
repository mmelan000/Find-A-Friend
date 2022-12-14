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
    const singleReview = await Review.findOne({
      where: { id: req.params.id },
      include: ['reviewer', 'reviewee'],
    });
    return res.status(200).json(singleReview);
  } catch (error) {
    if (req.status(404)) {
      return res.status(404).json(error);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const { text, score, user_id, reviewee_id } = req.body;
    const newReview = await Review.create({
      text,
      score,
      user_id,
      reviewee_id,
    });

    res.status(200).json(newReview);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    Review.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    return res.status(200).json();
  } catch (error) {
    return res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedreview = await Review.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedreview) {
      return res.status(404).json({ message: 'No review found with that id.' });
    }
    return res.status(200).json({
      message: 'That review has been deleted with that id',
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
