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

router.get('/:id', (req, res) => {
  try {
  } catch (error) {}
});

router.post('/', (req, res) => {});

router.put('/:id', (req, res) => {});

router.delete('/:id', (req, res) => {});

module.exports = router;
