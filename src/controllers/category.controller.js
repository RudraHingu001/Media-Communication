import Category from '../models/Category.js';
import connectDB from '../config/db.js';  
// Create Category

await connectDB();
export const createCategory = async (req, res) => {
  const { name } = req.body;

  const exists = await Category.findOne({ name });
  if (exists) {
    return res.status(400).json({ message: 'Category already exists' });
  }

  const category = await Category.create({ name });
  res.status(201).json({ success: true, data: category });
};

// Get All Categories
export const getCategories = async (req, res) => {
  const categories = await Category.find({ status: 'active' });
  res.json({ success: true, data: categories });
};

// Update Category
export const updateCategory = async (req, res) => {
  console.log('Update ID:', req.params.id);
  console.log('Request Body:', req.body);
  const category = await Category.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }

  res.json({ success: true, data: category });
};

// Delete Category
export const deleteCategory = async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);

  if (!category) {
    return res.status(404).json({ message: 'Category not found' });
  }

  res.json({ success: true, message: 'Category deleted' });
};
