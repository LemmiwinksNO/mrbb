
// Our static routes
// Mainly for static pages made in design process.

var express = require('express');
var router = express.Router();

router.get('/statictasklist', function(req, res) {
  res.sendfile(__dirname + '/static/statictasklist.html');
});

module.exports = router;
