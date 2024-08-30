import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      discountPercentage: {
        type: Number,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      brand: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      thumbnail: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
});
    
// Add data to schema to create model
const Product = mongoose.model("Product", productSchema);
    
export default Product;