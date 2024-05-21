import mongoose from "mongoose";


// Define the schema for categories
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true // Assuming category names should be unique
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  }

},
{ timestamps: true }
);

// Create the Category model
const Category = mongoose.model('Category', categorySchema);

export default Category;
