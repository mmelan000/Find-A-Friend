const router = require('express').Router();
const { User, Review, Listing, Category } = require('../../models');
// The `/api/category` endpoint

router.get('/', async (req, res) => {
  try {
    const allCategories = await Category.findAll({
      include: [{ model: Listing }],
    });
    return res.json(allCategories);
  } catch (error) {
    return res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const singleCategory = await Category.findOne({
      where: { id: req.params.id },
      include: [{ model: Listing }],
    });
    return res.status(200).json(singleCategory);
  } catch (error) {
    if (req.status(404)) {
      return res.status(404).json(error);
    }
  }
});

router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await Category.create({
      name,
    });

    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json();
  } catch (error) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {});

module.exports = router;
