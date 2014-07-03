// set up ======================================================================
var express   = require('express');
var app = express();
var mongoose  = require('mongoose');
// process.env.MONGOHQ_URL uses the MongoHQ Heroku addon
var db_url = process.env.MONGOHQ_URL || 'mongodb://localhost/my_database';


// configuration ===============================================================
mongoose.connect(db_url);

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  app.set('env', process.env.NODE_ENV || process.argv[2] || 'development');  // Now you can set environment via command line.
  app.use(express.static(__dirname));  // lets you access everything rather than just /public or /app
  app.use(express.bodyParser());  // parses request body according to content type in request.
  app.use(express.methodOverride());  // Lets you make HTTP methods other than GET and POST
});


// routes ======================================================================

// Had to divide it up this way because I want an index.html for production and
// development, and it MUST be in root directory. Also, you can't specify
// something other than index.html if there is an index.html.
app.get('*', function(req, res) {
  if (app.settings.env == 'production') {
    res.sendfile('./index-prod.html');
  } else {
    res.sendfile('./index-dev.html');
  }
});


// listen (start app with node server.js) ======================================
app.listen(app.settings.port, function() {
  console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
});
