var Daylog = require('../models/daylog');

// Create a day log
exports.create = function(req, res) {
	var daylog = new Daylog();
	daylog.name = req.body.name;


	// If items is an array, do this.
	// daylog.items.push('whatever');
	daylog.items.push(req.body.items);

	daylog.save(function(err) {
		if (err) res.send(err)

		res.json({ message: 'Daylog created!' });
	});
};

// Get all daylogs
exports.getAll = function(req, res) {
	Daylog.find(function(err, daylogs) {
		if (err) res.send(err);

		res.json(daylogs);
	});
};

// Get a daylog by ID
exports.get = function(req, res) {
  Daylog.findById(req.params.daylog_id, function(err, daylog) {
    if (err)
   res.send(err);

    res.json(daylog);
  });
};

// Update a daylog
exports.update = function(req, res) {
  Daylog.findById(req.params.daylog_id, function(err, daylog) {
    if (err) res.send(err);

    daylog.name = req.body.name; // update daylog info

    daylog.save(function(err) {
      if (err) res.send(err);

      res.json({ message: 'Daylog updated!' });
    });
  });
};

// Delete a daylog
exports.delete = function(req, res) {
  Daylog.remove({
    _id: req.params.daylog_id
  }, function(err, daylog) {
    if (err) res.send(err);

    res.json({ message: 'Daylog Successfully deleted' });
  });
};
