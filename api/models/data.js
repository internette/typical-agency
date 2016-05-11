var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var DataSchema = new Schema({
  name: String
});
module.exports = mongoose.model('data', DataSchema);
