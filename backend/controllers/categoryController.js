// categoryController.js

import Category from  '../Model/cati.js'


// Controller functions for Category model
export const  getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

