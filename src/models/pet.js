
const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nome: { type: String, required: true },
});

const pet = mongoose.model('pet', petSchema);
module.exports = pet; 