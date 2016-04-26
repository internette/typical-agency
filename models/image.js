var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ImageSchema   = new Schema({
    name: String,
    url: String
});

module.exports = mongoose.model('Image', ImageSchema);
