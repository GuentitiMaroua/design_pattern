const db = require('../app').db;

const Area = {
  getAllAreas: function(callback) {
    return db.query('SELECT * FROM area', callback);
  },
  getAreaById: function(id, callback) {
    return db.query('SELECT * FROM area WHERE area_id = ?', [id], callback);
  },
  // Add other CRUD operations as needed
};

module.exports = Area;