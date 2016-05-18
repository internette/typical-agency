// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
var database = require('../server/connect');
var Data = require('../api/models/data');

database.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(err, res, req, next){
//   res.status(404).sendfile(path.join(__dirname + '/../errors/index.html'));
// });
// app.use(function(err, res, req, next){
//   res.status(500).sendfile(path.join(__dirname + '/../errors/index.html'));
// });

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
// middleware to use for all requests
router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

app.use(express.static(path.join(__dirname + '/../')));
router.route('/').get(function(req, res) {
  res.sendfile(path.join(__dirname + '/../index.html'));
});
// router.route('/:error').get(function(req, res){
//   console.log(res)
// });
router.route('/team').get(function(req, res) {
  res.sendfile(path.join(__dirname + '/../team/index.html'));
});
router.route('/api').get(function(req, res) {
  res.sendfile(path.join(__dirname + '/../api/index.html'));
});

// more routes for our API will happen here
// on routes that end in /words
// ----------------------------------------------------
router.route('/api/:name').get(function(req, res) {
  var name = '$'+req.params.name;
  if(req.params.name.match(/\d/gi)){
    // console.log('this is not a valid path');
    // res.sendfile(path.join(__dirname + '/../errors/index.html'));
    res.sendStatus(404);
  } else {
    Data.aggregate([{$project: {data: name}}], function(err, data){
      res.jsonp(data[0].data);
    })
  }
});
router.route('/api/:name/:subname').get(function(req, res) {
  var name = '$'+req.params.name;
  var query = '$' + req.params.name + '.' + req.params.subname + '.images';
  if(req.params.name.match(/\d/gi) || req.params.subname.match(/\d/gi)){
    // console.log('this is not a valid path');
    // res.sendfile(path.join(__dirname + '/../errors/index.html'));
    res.sendStatus(404);
  } else {
    if(Object.keys(req.query).length === 0){
      Data.aggregate([{$unwind: '$images.images'}, {$match: {'images.images.category': req.params.subname}}, {$group: {_id: '$_id', 'images': {$push: '$images'}}}, {$project: {images: '$images.images'}}], function(err, data){
        res.jsonp(data[0]);
      })
    } else {
      if(req.query.hasOwnProperty('type')){
        Data.aggregate([{$unwind: '$images.images'}, {$match: {'images.images.type': req.query.type}}, {$group: {_id: '$_id', 'images': {$push: '$images'}}}, {$project: {images: '$images.images'}}], function(err, data){
          res.jsonp(data[0]);
        })
      } else if(req.query.id.match(/\d/gi)){
        Data.aggregate([{$unwind: '$images.images'}, {$match: {'images.images._id': new ObjectId(req.query.id)}}, {$group: {_id: '$_id', 'images': {$push: '$images'}}}, {$project: {images: '$images.images'}}], function(err, data){
          res.jsonp(data[0]);
        })
      }
    }
  }
});
// REGISTER OUR ROUTES -------------------------------
app.use('/', router);
app.use(function(req, res, next) {
  res.status(404).sendfile(path.join(__dirname + '/../errors/index.html'));
});
// START THE SERVER
// =============================================================================
app.listen(port);
