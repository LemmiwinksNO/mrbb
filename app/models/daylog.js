
/**
 * Daylog Model
 *
 * This model has a name then an array of key-value pairs.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DaylogSchema = new Schema({
	updated: { type: Date, default: Date.now },
	created: { type: Date, default: Date.now },
	name: String,
	items: []
});

module.exports = mongoose.model('Daylog', DaylogSchema);