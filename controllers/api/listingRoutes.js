const router = require('express').Router();
const { User, Review, Listing, Category } = require('../../models');

// The `/api/listing` endpoint

router.get('/', async (req, res) => {
  try {
    const allListings = await Listing.findAll({
      include: [{ model: Category, as: 'category' }],
    });
    return res.json(allListings);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleListing = await Listing.findOne({
      where: { id: req.params.id },
      include: {
        model: Category,
      },
    });
    return res.status(200).json(singleListing);
  } catch (error) {
    if (req.status(404)) {
      return res.status(404).json(error);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, text, availabilty, age_range, user_id, category_id } =
      req.body;
    const newListing = await Listing.create({
      title,
      text,
      availabilty,
      age_range,
      user_id,
      category_id,
    });

    res.status(200).json(newListing);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
