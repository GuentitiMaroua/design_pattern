const mongoose = require('mongoose');

const polygonSchema = new mongoose.Schema({
  polygon_id:{type: Number},
  geo_json: { type: Object },
  bbox: { type: Object }
});

const Polygon = mongoose.model('Polygon', polygonSchema, 'polygon');

module.exports = Polygon;
