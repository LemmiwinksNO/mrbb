
/**
 * Daylog Model
 *
 * This model has a name then an array of key-value pairs.
 */

var mongoose = require('mongoose');

var DaylogSchema = new mongoose.Schema({
	updated: { type: Date, default: Date.now },
	created: { type: Date, default: Date.now },
	date: String,
	items: []
});

// Sets 'id' on the object we send to client!
DaylogSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('Daylog', DaylogSchema);