
// All the routes for our app

var express = require('express');
var router = express.Router();

var API = {};
API.bears = require('../controllers/bears');
API.daylog = require('../controllers/daylog');


// middleware to use for all requests (many uses for this - validation of request;
// extra logging for analytics or statistics)
router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

// test route to make sure everything is working (accessed at GET http://localhost:4000/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});


// API ROUTES ==================================================================
// Bear routes
router
  .post('/bears', API.bears.create)
  .get('/bears', API.bears.getAll)
  .get('/bears/:bear_id', API.bears.get)
  .put('/bears/:bear_id', API.bears.update)
  .delete('/bears/:bear_id', API.bears.delete);

// Log routes
router
  .post('/daylog', API.daylog.create)
  .get('/daylog', API.daylog.getAll)
  .get('/daylog/:daylog_id', API.daylog.get)
  .put('/daylog/:daylog_id', API.daylog.update)
  .delete('/daylog/:daylog_id', API.daylog.delete);

module.exports = router;
