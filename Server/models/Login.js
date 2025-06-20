const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true,
});

module.exports = mongoose.model('Login', LoginSchema);
