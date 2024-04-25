const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
 
  street: { type: String, required: true },
  postcode: { type: String },
  city: { type: String },
  country_id: { type: Number, ref: 'Country' }
});

const Address = mongoose.model('Address', addressSchema , 'address');

module.exports = Address;
