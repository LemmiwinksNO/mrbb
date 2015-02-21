
// Our static routes
// Mainly for static pages made in design process.

var express = require('express');
var router = express.Router();

router.get('/statictasklist', function(req, res) {
  res.sendFile(__dirname + 'static/statictasklist.html');
});

router.get('/staticanki', function(req, res) {
  res.sendFile(__dirname + 'static/staticanki.html');
});

router.get('/staticwiki', function(req, res) {
  res.sendFile(__dirname + 'static/staticwiki.html');
});

module.exports = router;
