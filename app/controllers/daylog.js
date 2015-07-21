var Daylog = require('../models/daylog');

// Create a day log
exports.create = function(req, res) {
	var daylog = new Daylog();
  setAttributes(daylog, req, res);
};

// Get all daylogs
exports.getAll = function(req, res) {
	Daylog.find(function(err, daylogs) {
		if (err){ res.send(err) };

		res.json(daylogs);
	});
};

// Get a daylog by ID
exports.get = function(req, res) {
  Daylog.findById(req.params.daylog_id, function(err, daylog) {
    if (err){ res.send(err) };

    res.json(daylog);
  });
};

// Update a daylog
exports.update = function(req, res) {
  Daylog.findById(req.params.daylog_id, function(err, daylog) {
    if (err){ res.send(err) };

    setAttributes(daylog, req, res);
  });
};

// Delete a daylog
exports.delete = function(req, res) {
  Daylog.remove({
    _id: req.params.daylog_id
  }, function(err, daylog) {
    if (err){ res.send(err) };

    res.json({ message: 'Daylog Successfully deleted' });
  });
};

/**
 * Set attributes on daylog model and save
 */
function setAttributes(daylog, req, res) {
  var items = req.body.items;
  
  daylog.date = req.body.date;

  // If items is an array.
  if (Array.isArray(items)) {
    daylog.items = items;
  }

  // If items is an object, convert into an array.
  if (Object.prototype.toString.call(items) === '[object Object]') {
    daylog.items = [];  // empty old array
    for (var key in items) {
      var o = {};
      o[key] = items[key];
      daylog.items.push(o);
    }
  }

  daylog.save(function(err) {
    if (err){ res.send(err) };

    res.json(daylog);
  });
}
