var mongoose = require('mongoose');
module.exports = (function (app, db) {
    var module = {};
    module.connect = function(){
      mongoose.connect('mongodb://twaffles:sakura@ec2-52-73-225-190.compute-1.amazonaws.com:27017/dummyDB'); // connect to our database
    };
    return module;
})();
