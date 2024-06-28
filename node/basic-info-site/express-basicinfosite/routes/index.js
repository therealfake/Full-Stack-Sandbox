var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

router.get('/index', function(req, res, next) {
  res.render('layout', { title: 'Index Also!' });
});

router.get('/about', function(req, res, next) {
  res.render('layout', { title: 'About' });
});

router.get('/contact-me', function(req, res, next) {
  res.render('layout', { title: 'Contact Me' });
});

module.exports = router;
