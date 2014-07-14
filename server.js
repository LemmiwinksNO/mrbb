
// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var app         = express();
var Bear        = require('./app/models/bear');
var router      = require('./app/routes');

// configuration ===============================================================

// process.env.MONGOHQ_URL uses the MongoHQ Heroku addon
var db_url = process.env.MONGOHQ_URL || 'mongodb://localhost/my_database';
mongoose.connect(db_url);

// parses request body according to content type in request.
// :bear_id from request is accessed thanks to this package.
app.use(bodyParser());

// lets you access everything rather than just /public or /app
app.use(express.static(__dirname));

var port = process.env.PORT || 4000;

// ROUTES FOR OUR API
// =============================================================================

// // create our router
// var router = express.Router();

// // middleware to use for all requests (many uses for this - validation of request;
// // extra logging for analytics or statistics)
// router.use(function(req, res, next) {
//   // do logging
//   console.log('Something is happening.');
//   next();
// });

// // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//   res.json({ message: 'hooray! welcome to our api!' });
// });

// // on routes that end in /bears
// // -----------------------------------------------------
// router.route('/bears')

//   // create a bear (accessed at POST http://localhost:4000/api/bears)
//   .post(function(req, res) {
//     var bear = new Bear();
//     bear.name = req.body.name;

//     bear.save(function(err) {
//       if (err)
//         res.send(err);

//       res.json({ message: 'Bear created!' });
//     });
//   })

//   // get all the bears  (access at GET http://localhost:4000/api/bears)
//   .get(function(req, res) {
//     Bear.find(function(err, bears) {
//       if (err)
//         res.send(err);

//       res.json(bears);
//     });
//   });

// // on routes that end in /bears:bear_id
// // -----------------------------------------------------
// router.route('/bears/:bear_id')

//   // get the bear with that id (accessed at GET http://localhost:4000/api/bears/:bear_id)
//   .get(function(req, res) {
//     Bear.findById(req.params.bear_id, function(err, bear) {
//       if (err)
//         res.send(err);

//       res.json(bear);
//     });
//   })

//   // update the bear with this id (accessed at PUT http://localhost:4000/api/bears/:bear_id)
//   .put(function(req, res) {
//     Bear.findById(req.params.bear_id, function(err, bear) {
//       if (err)
//         res.send(err);

//       bear.name = req.body.name; // update bear info

//       bear.save(function(err) {
//         if (err)
//           res.send(err);

//         res.json({ message: 'Bear updated!' });
//       });
//     });
//   })

//   .delete(function(req, res) {
//     Bear.remove({
//       _id: req.params.bear_id
//     }, function(err, bear) {
//       if (err)
//         res.send(err);

//       res.json({ message: 'Successfully deleted' });
//     });
//   });


// // REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);





// listen (start app with node server.js) ======================================
// app.listen(app.settings.port, function() {
//   console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
// });

// app.configure(function(){
//   app.set('port', process.env.PORT || 4000);
//   app.set('env', process.env.NODE_ENV || process.argv[2] || 'development');  // Now you can set environment via command line.
//   app.use(express.static(__dirname));  // lets you access everything rather than just /public or /app
//   app.use(express.bodyParser());  // parses request body according to content type in request.
//   app.use(express.methodOverride());  // Lets you make HTTP methods other than GET and POST
// });