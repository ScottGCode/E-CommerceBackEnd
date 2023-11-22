const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findAll } = require('../../models/Product');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: {
        model: Product,
        as: 'tag_products',
        attributes: ['id', 'product_name']
      }
    });
    res.json(tagData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

// Find a single tag by its `id`
router.get('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const tagData = await Tag.findByPk(tagId, {
      include: {
        model: Product,
        as: 'tag_products',
        attributes: ['id', 'product_name']
      }
    });
      if (!tagData) {
        res.status(404).json({ message: 'Tag Not Found' });
        return;
      }
      res.json(tagData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const { tag_name } = req.body;
    const newTag = await Tag.create({ tag_name });
    res.status(201).json(newTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const { tag_name } = req.body;
    const updateTag = await Tag.findByPk(tagId);
    if (!updateTag) {
      res.status(404).json({ message: 'Tag Not Found' });
      return;
    }
    await updateTag.update({ tag_name });
    res.json(updateTag);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const deleteTag = await Tag.findByPk(tagId);
    if (!deleteTag) {
      res.status(404).json({ message: 'Tag Not Found'});
      return;
    }
    await deleteTag.destroy();
    res.json({ message: 'Tag Deleted Successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
