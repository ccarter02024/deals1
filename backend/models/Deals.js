const mongoose = require('mongoose');

// Define Deal schema
const dealSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Unique identifier for the deal
  title: { type: String, required: true },            // Title of the deal
  description: { type: String, required: true },      // Description of the deal
  retailer: { type: String, required: true },         // Retailer offering the deal
  datesubmitted: { type: Date, default: Date.now },   // Date when the deal was submitted
  link: { type: String, required: true },             // Link to the deal
  price: { type: Number, required: true },            // Current price of the deal
  oldprice: { type: Number },                         // Previous price (if applicable)
  notes: { type: String },                            // Additional notes or comments
});

// Model
const Deal = mongoose.model('Deal', dealSchema);
module.exports = Deal;