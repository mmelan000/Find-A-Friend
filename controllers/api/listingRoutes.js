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
  console.log(req.body);
  try {
    const newListing = await Listing.create(req.body);

    res.status(200).json(newListing);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  try {
    Listing.update(req.body, {
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
    const deletedListing = await Listing.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedListing) {
      return res
        .status(404)
        .json({ message: 'No listing found with that id.' });
    }
    return res.status(200).json({
      message: 'That listing has been deleted with that id',
    });
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
