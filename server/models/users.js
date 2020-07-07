const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: 'is required',
    minlength: [3, 'is too short'],
    maxlength: [20, 'is too long']
  },
  phone: {
    type: Number,
    required: 'is required',
    minlength: [3, 'is too short'],
    maxlength: [20, 'is too long']
  },
  email: {
    type: String,
    required: 'is required'
  },
  address: String
});

module.exports = mongoose.model('user', userSchema);
