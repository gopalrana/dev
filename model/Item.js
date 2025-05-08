const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  value: Number
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);
