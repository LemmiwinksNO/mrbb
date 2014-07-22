
// BASE SETUP
// =============================================================================

// call the packages we need
var express     = require('express');
var bodyParser  = require('body-parser');
var mongoose    = require('mongoose');
var app         = express();
var router      = require('./app/routes/index');
var staticRouter = require('./app/routes/static');

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

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/', staticRouter);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
