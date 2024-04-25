const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  
  google_id: { type: String },
  google_address: { type: String },
  drafted_address: { type: String },
  agency_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency' },
  coordinates_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Coordinates' },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

const Request = mongoose.model('Request', requestSchema, 'request');

module.exports = Request;
