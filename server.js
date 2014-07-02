
var express   = require('express'),
    // routes    = require('./routes'),
    path      = require('path'),
  mongoose  = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');

var app = module.exports = express();  // export so we can use it for tests

app.configure(function(){
  app.set('port', process.env.PORT || 4000);
  // app.set('env', process.env.NODE_ENV || process.argv[2] || 'development');  // Now you can set environment via command line.
  app.set('env', 'production');
  app.use(express.bodyParser());  // parses request body according to content type in request.
  app.use(express.methodOverride());  // Lets you make HTTP methods other than GET and POST
  app.use(app.router);
  app.use(express.static(__dirname));  // lets you access everything rather than just /public or /app
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('test', function(){
  app.set('port', 4001);
});

app.configure('production', function(){
  app.use(express.static(path.join(__dirname + "/dist")));
  app.use(express.errorHandler());
  // app.set('port', 4002);
});

// Routes - Controller code and URL handlers

// require('./routes/index')(app);  // index
// require('./routes/notdoing')(app, mongoose);  // not doing list

// Start the app
var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
  console.log("listening on " + port);
});

// app.listen(app.settings.port);
// console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
