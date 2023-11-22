const router = require('express').Router();
const { Category, Product } = require('../../models');

// Find all categories
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: {
        model: Product,
        attributes: ['id', 'product_name']
      }
    });
    res.json(categoryData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

// Find one category by its `id` value
router.get('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const categoryData = await Category.findByPk(categoryId, {
      include: {
        model: Product,
        attributes: ['id', 'product_name']
      }
    });
      if (!categoryData) {
        res.status(404).json({ message: 'Category Not Found' });
        return;
      }
      res.json(categoryData);
    } catch (err) {
      console.error(err);
      res.status(500).json(err);
    }
});

// Create a new category
router.post('/', async (req, res) => {
  try {
    const { category_name } = req.body;
    const newCategory = await Category.create({ category_name });
    res.status(201).json(newCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Update a category by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { category_name } = req.body;
    const updateCategory = await Category.findByPk(categoryId);
    if (!updateCategory) {
      res.status(404).json({ message: 'Category Not Found' });
      return;
    }
    await updateCategory.update({ category_name });
    res.json(updateCategory);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const categoryId = req.params.id;

    const deleteCategory = await Category.findByPk(categoryId);
    if (!deleteCategory) {
      res.status(404).json({ message: 'Category Not Found'});
      return;
    }
    await deleteCategory.destroy();
    res.json({ message: 'Category Deleted Successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
