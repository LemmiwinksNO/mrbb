
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
// NOTE: lots to this stuff - https://github.com/expressjs/body-parser
// app.use(bodyParser());  // deprecated
app.use(bodyParser.urlencoded({ extended: true }));  // what does this do?
app.use(bodyParser.json());

if (process.argv[2] === 'dist') {
	console.log('Loading distribution code');
	app.use(express.static(__dirname + '/dist')); // For testing production
} else {
	// lets you access everything rather than just /public or /app
	// Matters why? b/c we serve index.html from / not /assets
	app.use(express.static(__dirname));	
}

var port = process.env.PORT || 4000;

// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);
app.use('/', staticRouter);


// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
