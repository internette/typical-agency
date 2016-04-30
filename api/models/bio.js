var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BioSchema   = new Schema({
    name: String
});

module.exports = mongoose.model('Bio', BioSchema);
