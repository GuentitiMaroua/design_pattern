const mongoose = require('mongoose');

const divisionSchema = new mongoose.Schema({
  division_id: { type: Number }, 
  name: { type: String, required: true },
  country_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
  polygon_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Polygon' },
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Division' }
});

const Division = mongoose.model('Division', divisionSchema);

module.exports = Division;
