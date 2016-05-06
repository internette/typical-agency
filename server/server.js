// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var Word = require('../api/models/word');
var Color = require('../api/models/color');
var Images = require('../api/models/image');
var Bio = require('../api/models/bio');
var Client = require('../api/models/client');
var Person = require('../api/models/person');

mongoose.connect('mongodb://twaffles:sakura@ec2-52-73-225-190.compute-1.amazonaws.com:27017/dummyDB'); // connect to our database
//
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(function(req, res, next){
//   res.header('Access-Control-Allow-Origin','*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

var port = process.env.PORT || 8080;        // set our port


// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router
// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
app.use(express.static(path.join(__dirname + '/../')));
router.route('/').get(function(req, res) {
    fs.readdir('./', function(d){
      console.log(d);
    });
    res.sendFile('./index.html');

});
router.route('/team').get(function(req, res) {
    res.sendFile(path.join(__dirname + '/../team.html'));

});
router.route('/api').get(function(req, res) {
    res.sendFile(path.join(__dirname + '/../api/index.html'));
});

// more routes for our API will happen here
// on routes that end in /words
// ----------------------------------------------------
router.route('/api/words')
    // retrieve words
    .get(function(req, res) {
        Word.find(function(err, words) {
            if (err)
                res.send(err);

            res.jsonp(words);
        });
    });
    router.route('/api/words/buzzwords')
        // retrieve words
        .get(function(req, res) {
            Word.find(function(err, words) {
                if (err)
                    res.send(err);

                res.jsonp(words[0].toJSON().buzzwords);
            });
        });
router.route('/api/colors')
  .get(function(req,res){
    Color.find(function(err, colors) {
      if (err)
        res.send(err);

      res.jsonp(colors);
    });
  });
  router.route('/api/images')
    .get(function(req,res){
      Images.find(function(err, images) {
        if (err)
          res.send(err);

        res.jsonp(images);
      });
    });
    router.route('/api/bios').get(function(req,res){
        Bio.find(function(err, bios) {
          if (err)
            res.send(err);

          res.jsonp(bios);
        });
      });
      router.route('/api/clients')
        .get(function(req,res){
          Client.find(function(err,clients) {
            if (err)
              res.send(err);

            res.jsonp(clients);
          });
        });
        router.route('/api/people')
          .get(function(req,res){
            Person.find(function(err,people) {
              if (err)
                res.send(err);

              res.jsonp(people);
            });
          });
// REGISTER OUR ROUTES -------------------------------
app.use('/', router);

// START THE SERVER
// =============================================================================
app.listen(port);
