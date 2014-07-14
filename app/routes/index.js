var express = require('express');
var Bear = require('../models/bear');

// create our router
var router = express.Router();

// middleware to use for all requests (many uses for this - validation of request;
// extra logging for analytics or statistics)
router.use(function(req, res, next) {
  // do logging
  console.log('Something is happening.');
  next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// on routes that end in /bears
// -----------------------------------------------------
router.route('/bears')

  // create a bear (accessed at POST http://localhost:4000/api/bears)
  .post(function(req, res) {
    var bear = new Bear();
    bear.name = req.body.name;

    bear.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Bear created!' });
    });
  })

  // get all the bears  (access at GET http://localhost:4000/api/bears)
  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if (err)
        res.send(err);

      res.json(bears);
    });
  });

// on routes that end in /bears:bear_id
// -----------------------------------------------------
router.route('/bears/:bear_id')

  // get the bear with that id (accessed at GET http://localhost:4000/api/bears/:bear_id)
  .get(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err)
        res.send(err);

      res.json(bear);
    });
  })

  // update the bear with this id (accessed at PUT http://localhost:4000/api/bears/:bear_id)
  .put(function(req, res) {
    Bear.findById(req.params.bear_id, function(err, bear) {
      if (err)
        res.send(err);

      bear.name = req.body.name; // update bear info

      bear.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Bear updated!' });
      });
    });
  })

  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });


module.exports = router;


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);