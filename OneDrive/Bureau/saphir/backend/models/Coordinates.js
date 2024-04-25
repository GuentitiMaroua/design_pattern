const mongoose = require('mongoose');

const coordinatesSchema = new mongoose.Schema({
  coordinates_id: { type: Number }, 
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  request_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Request' }
});

const Coordinates = mongoose.model('Coordinates', coordinatesSchema);

module.exports = Coordinates;
