var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ClientSchema   = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('Client', ClientSchema);
